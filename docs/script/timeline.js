var d3data;

var dataSelector;

var height = 100;

var computeYearRange = true;
var minYear = 3000;
var maxYear = 0;

var maxFrequency = 0;

var selectorColors = ['#1a8e6a', '#f9ba02', '#6762a2', '#eb298d', '#7cc522', '#ec6502'];

var niceIntervals = [1, 2, 5, 10, 20, 50, 100, 200, 500, 1000];
var maxYearIntervals = 10;
var maxFrequencyIntervals = 5;

function computeData(entries) {
    var data = {};
    dataSelector = {};
    $.each(entries, function (id, entry) {
        year = parseFloat(entry['year']);
        if (!year) {
            console.error('undefined year for entry ' + id);
            return;
        }
        if (isNaN(year)) {
            console.error('cannot parse year for entry ' + id);
            return;
        }
        if (computeYearRange) {
            minYear = Math.min(year, minYear);
            maxYear = Math.max(year, maxYear);
        }
        if (year in data) {
            data[year] += 1;
        } else {
            data[year] = 1;
        }
        $.each(selectors, function (i, selector) {
            if (selector) {
                if (!dataSelector[i]) {
                    dataSelector[i] = {};
                }
                if (!dataSelector[i][year]) {
                    dataSelector[i][year] = 0;
                }
                var sim = window.entrySelectorSimilarities[id][i];
                if (sim) {
                    dataSelector[i][year] += sim;
                }
            }
        });
    });
    for (var year = minYear; year <= maxYear; year++) {
        if (!data[year]) {
            data[year] = 0;
        } else {
            if (computeYearRange) {
                maxFrequency = Math.max(data[year], maxFrequency);
            }
        }
    }
    computeYearRange = false;
    d3data = d3.entries(data);
    d3data = d3data.sort(function (a, b) {
        return d3.ascending(a.key, b.key);
    });
}

function updateTimeline(entries) {
    var timelineDiv = $('#timeline');
    timelineDiv.empty();
    computeData(entries);

    var chart = d3.select('#timeline').append('svg')
        .attr('class', 'chart')
        .style('border', '1px solid black')
        .attr('height', height + 'px');
    var width = timelineDiv.width();
    chart.attr('width', width + 'px');
    var barWidth = width / (maxYear - minYear + 1);
    var publicationHeight = height / (maxFrequency + 1);
    var yearIntervalIndex = 0;
    while (yearIntervalIndex < niceIntervals.length - 1 && (maxYear - minYear) / niceIntervals[yearIntervalIndex] > maxYearIntervals) {
        yearIntervalIndex++;
    }
    var yearIntervalLength = niceIntervals[yearIntervalIndex];
    for (var intervalYear = minYear - minYear % yearIntervalLength; intervalYear < maxYear; intervalYear += yearIntervalLength) {
        var x = (intervalYear - minYear) * barWidth;
        var even = intervalYear % (2 * yearIntervalLength) == 0 ? 'Even' : 'Uneven';
        chart.append('rect').attr('class', 'decade' + even)
            .attr('x', x).attr('y', 0)
            .attr('width', yearIntervalLength * barWidth)
            .attr('height', height)
            .style('fill', even == 'Even' ? '#FFFFFF' : '#CCCCCC');
        chart.append('text').attr('class', 'decade' + even)
            .attr('x', x + 5)
            .attr('y', height / 4).text(intervalYear)
            .style('font-size', '20pt')
            .style('fill', even != 'Even' ? '#FFFFFF' : '#CCCCCC');
    }
    var frequencyIntervalIndex = 0;
    while (frequencyIntervalIndex < niceIntervals.length - 1 && maxFrequency / niceIntervals[frequencyIntervalIndex] > maxFrequencyIntervals) {
        frequencyIntervalIndex++;
    }
    var frequencyIntervalLength = niceIntervals[frequencyIntervalIndex];
    for (var i = frequencyIntervalLength; i <= maxFrequency; i += frequencyIntervalLength) {
        var y = height - publicationHeight * i;
        chart.append('line')
            .attr('x1', 0)
            .attr('y1', y)
            .attr('x2', width)
            .attr('y2', y)
            .style('stroke', 'black')
            .style('stroke-width', '0.25px');
        chart.append('text')
            .attr('x', 0)
            .attr('y', y + 12)
            .style('font-size', '12pt')
            .text(i);
    }
    chart.selectAll('svg').data(d3data).enter().append('rect')
        .attr('class', 'bar total')
        .style('fill', '#EEEEEE')
        .style('stroke', 'black')
        .attr('x', function (d) {
            return (d.key - minYear) * barWidth;
        })
        .attr('y', function (d) {
            return height - publicationHeight * d.value;
        })
        .attr('width', barWidth)
        .attr('height', function (d) {
            return publicationHeight * d.value + 1;
        })
        .attr('title', function (d) {
            return d.key + ': ' + d.value + ' publications';
        })
        .on('click', function (d) {
            toggleSelector('year', d.key);
        });
    var j = 0;
    var nActiveSelectors = getNActiveSelectors();
    var barWidthSelector = (barWidth - 2) / nActiveSelectors;
    $.each(selectors, function (i, selector) {
            if (selector && !selector['lock']) {
                var d3dataSelector = d3.entries(dataSelector[i]);
                d3dataSelector = d3dataSelector.sort(function (a, b) {
                    return d3.ascending(a.key, b.key);
                });
                chart.selectAll('svg').data(d3dataSelector).enter().append('rect')
                    .attr('class', 'bar fill')
                    .style('fill', selectorColors[i])
                    .attr('x', function (d) {
                        return 0.5 + (d.key - minYear + j / nActiveSelectors) * barWidth;
                    })
                    .attr('y', function (d) {
                        return height - publicationHeight * d.value + 0.5;
                    })
                    .attr('width', barWidthSelector)
                    .attr('height', function (d) {
                        return publicationHeight * d.value;
                    })
                    .attr('title', function (d) {
                        return d.key + ' (' + selector['text'] + '): ' + d.value + ' publications';
                    })
                    .on('click', function (d) {
                        toggleSelector('year', d.key);
                    });
                j++;
            }
        }
    )
    ;

}
