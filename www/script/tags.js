function parseTags(tagString) {
    if (!tagString) {
        tagString = "";
    }
    var tags = tagString.split(',');
    $.each(tags, function (i, tag) {
        tag = $.trim(tag.split("\\").join("")).toLowerCase();
        tags[i] = tag;
    });
    $.each(tagCategories, function (categoryName) {
        if (tagString.indexOf(categoryName + ":") == -1) {
            tags.push(categoryName + ":?");
        }
    });
    tags.sort(tagSort);
    return tags;
}

function getActiveTags() {
    var activeTags = {};
    $.each(getSelectors('tag'), function (i, selector) {
        activeTags[selector['text']] = selector['inverted'] ? 'inverted' : 'normal';
    });
    return activeTags;
}

function createTag(tag, frequency, activeTags, tagFrequencySelector) {
    if (frequency < minTagFrequency) {
        return;
    }
    window.allTags.push(tag);
    var frequencyClass = "freq1";
    if (frequency >= 2) {
        frequencyClass = "freq2";
    }
    if (frequency >= 3) {
        frequencyClass = "freq3";
    }
    if (frequency >= 5) {
        frequencyClass = "freq5";
    }
    if (frequency >= 10) {
        frequencyClass = "freq10";
    }
    if (frequency >= 30) {
        frequencyClass = "freq30";
    }
    if (frequency >= 100) {
        frequencyClass = "freq100";
    }
    var tagDiv = $('<div>', {
        class: 'tag ' + frequencyClass,
        value: tag
    });
    $('<span>', {
        class: 'text',
        text: tag.substring(tag.indexOf(":") + 1)
    }).appendTo(tagDiv);
    var sparklineDiv = $('<div>', {
        class: 'sparkline'
    }).prependTo(tagDiv);
    appendSparkline(sparklineDiv, tagFrequencySelector[tag]);
    if (activeTags[tag]) {
        tagDiv.addClass("active");
        if (activeTags[tag] == 'inverted') {
            tagDiv.addClass('inverted');
        }
    }
    tagDiv.click(function (event) {
        toggleSelector('tag', tag, event);
    });
    if (authorizedTags[tag]) {
        tagDiv.addClass("authorized");
        tagDiv.attr("title", authorizedTags[tag]["description"]);
    }
    $("<span>", {
        class: "tag_frequency",
        text: frequency
    }).appendTo(tagDiv);
    return tagDiv;
}

function appendTagDivs(name, title, tagDivs, element) {
    tagDivs = tagDivs.sort(function (a, b) {
        var nA = a.attr("value").toLowerCase();
        var nB = b.attr("value").toLowerCase();
        if (nA < nB)
            return -1;
        else if (nA > nB)
            return 1;
        return 0;
    });
    var categoryDiv = $("<div>", {
        class: "tag_category"
    }).appendTo(element);
    $("<span>", {
        class: "label",
        title: title,
        text: name + ": "
    }).appendTo(categoryDiv);
    $.each(tagDivs, function (i, tag) {
        tag.appendTo(categoryDiv);
    });
}

function updateTagCloud(json) {
    window.allTags = [];
    var activeTags = getActiveTags();
    $("#tag_cloud").empty();
    var tagFrequency = {};
    var tagFrequencySelector = {};
    $.each(Object.keys(activeTags), function (i, tag) {
        tagFrequency[tag] = 0;
    });
    $.each(json, function (id, field) {
        var tags = parseTags(field["keywords"]);
        $.each(tags, function (j, tag) {
            if (tagFrequency[tag]) {
                tagFrequency[tag] += 1;
            } else {
                tagFrequency[tag] = 1;
            }
        });
    });
    $.each(json, function (id, field) {
        var tags = parseTags(field["keywords"]);
        $.each(tags, function (j, tag) {
            if (!tagFrequencySelector[tag]) {
                tagFrequencySelector[tag] = {};
            }
            $.each(selectors, function (i, selector) {
                if (selector && !selector['lock']) {
                    if (!tagFrequencySelector[tag][i]) {
                        tagFrequencySelector[tag][i] = 0;
                    }
                    tagFrequencySelector[tag][i] += window.entrySelectorSimilarities[id][i] / tagFrequency[tag];
                }
            });
        });
    });
    var usedCategoryTags = [];
    $.each(tagCategories, function (categoryName, category) {
        var tagDivsCategory = [];
        $.each(tagFrequency, function (tag, frequency) {
            if (tag.lastIndexOf((categoryName + ":"), 0) == 0) {
                var tagDiv = createTag(tag, frequency, activeTags, tagFrequencySelector);
                if (tagDiv) {
                    tagDivsCategory.push(tagDiv);
                }
                usedCategoryTags.push(tag);
            }
        });
        appendTagDivs(categoryName, category['description'], tagDivsCategory, '#tag_cloud');
    });
    var tagDivs = [];
    $.each(tagFrequency, function (tag, frequency) {
        if (usedCategoryTags.indexOf(tag) < 0) {
            var tagDiv = createTag(tag, frequency, activeTags, tagFrequencySelector);
            if (tagDiv) {
                tagDivs.push(tagDiv);
            }
        }
    });
    appendTagDivs('other', 'unclassified tags', tagDivs, '#tag_cloud');
}

function tagSort(a, b) {
    var categoryA = a.substring(0, a.indexOf(':')).toLowerCase();
    var categoryB = b.substring(0, b.indexOf(':')).toLowerCase();
    if (categoryA && categoryB) {
        if (categoryA != categoryB) {
            var indexA = Object.keys(tagCategories).indexOf(categoryA);
            var indexB = Object.keys(tagCategories).indexOf(categoryB);
            return ((indexA < indexB) ? -1 : ((indexA > indexB) ? 1 : 0));
        }
    } else if (categoryA) {
        return -1;
    } else if (categoryB) {
        return 1;
    }
    var aName = a.toLowerCase();
    var bName = b.toLowerCase();
    return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
}



