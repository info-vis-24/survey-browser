var nEntries;

var nSelectors = 6;
var selectors = {};

var entryDivs = {};
var showAllEntries = false;
var maxAbstractLength = 300;

window.entrySelectorSimilarities = {};
window.sortedIDs = [];
window.filteredEntries = {};

window.allTags = [];

cssList = ["jquery-ui-1.10.3/themes/survis-theme/jquery-ui-1.10.4.custom.min.css",
    "styles/style.css",
    "styles/selector.css",
    "styles/sparkline.css" ,
    "styles/timeline.css",
    "styles/entries.css",
    "codemirror/codemirror.css"
];

loadAllCss();

function loadAllCss() {
    $.each(cssList, function (i, css) {loadCSS(css)});
    if (customStyle) {
        loadCSS(customStyle);
    }
}

function loadCSS(href) {
    $('head').append($('<link>', {
        rel: 'stylesheet',
        type: 'text/css',
        href: href
    }));
};


$(document).ready(function () {

    init();

    $(document).keyup(function (e) {
        // esc
        if (e.keyCode == 27) {
            selectors = {};
            updateShowPart();
        }
    });

    $('#clear_selectors').click(function () {
        selectors = {};
        updateShowPart();
    });

    $('#search').submit(function () {
        submitSearch();
        return false;
    });

    $('#search_button').click(function () {
        submitSearch();
    });

    $('#export_bibtex').click(function () {
        downloadBibtex();
    });

    $('#open_about').click(function () {
        openAbout();
    });

    var layout = $('body').layout({
        applyDefaultStyles: true,
        north: {
            closable: false,
            resizable: false
        },
        south: {
            closable: false,
            resizable: false
        },
        west: {
            onresize: function () {
                update(false);
            }
        }
    });
    layout.allowOverflow('north');
    layout.sizePane('west', $(window).width() * 0.44);

    update(true);

});

function init() {
    document.title = title;
    initHeader();
    initFooter();
}

function initHeader() {
    var header = $('#header');
    var titleDiv = $('<div>', {
        id: 'title'
    });
    titleDiv.append($('<h1/>', {text: title}));
    if (paper) {
        var paperDiv = $('<div id="paper">' + paper.html + '</div>');
        if (paper.id) {
            var showPaperButton = $('<div>', {
                class: 'button',
                text: 'select'
            });
            showPaperButton.click(function (event) {
                toggleSelector('search', paper.id, event);
                if (showPaperButton.text() == 'select') {
                    showPaperButton.text('deselect');
                } else {
                    showPaperButton.text('select');
                }
            });
            paperDiv.append(showPaperButton)
        }
        titleDiv.append(paperDiv);
    }
    titleDiv.append($('<a href="https://github.com/fabian-beck/survis"><img src="img/survis_small.png"/></a>'));
    header.append(titleDiv);
    header.append($('<div id="selectors_container"><div class="label">Selectors</div><div id="selectors"></div><div id="clear_selectors" class="button" title="clear selectors [Esc]">clear</div></div>'));
}

function initFooter() {
    var footer = $('#footer');
    var menuDiv = ($('<div id="menu"/>'));
    menuDiv.append($('<div id="export_bibtex" class="button"><span class="symbol">D</span>download BibTeX</div>'));
    if (about) {
        menuDiv.append($('<div id="open_about" class="button"><span class="symbol">=</span>about</div>'));
        footer.append($('<div id="about" title="About"></div>'));
    }
    footer.append(menuDiv);
}

function update(scrollToTop) {
    updateSelectors();
    nEntries = Object.keys(window.filteredEntries).length;
    updateStats(window.filteredEntries);
    updateTimeline(window.filteredEntries);
    updateTagCloud(window.filteredEntries);
    updateEntryList(window.filteredEntries);
    if (scrollToTop) {
        $('#result').scrollTop(0);
    }
}

function updateShowAll() {
    showAllEntries = true;
    update(false);
}

function updateShowPart() {
    showAllEntries = false;
    update(true);
}

function updateStats() {
    var statsDiv = $('#stats');
    statsDiv.empty();
//    var seriesStats = {};
    var s = nEntries + " publications";
    if (nEntries == 0) {
        s = "no publications";
    } else if (nEntries == 1) {
        s = "1 publication";
    }
    var similarities = new Array(nSelectors);
    $.each(window.filteredEntries, function (id) {
        $.each(window.entrySelectorSimilarities[id], function (i, similarity) {
            if (!similarities[i]) {
                similarities[i] = 0;
            }
            similarities[i] += similarity;
        });
//        var series = entries[id]['series'];
//        var series = series ? series : entries[id]['journal'];
//        if (series) {
//            if (!seriesStats[series]) {
//                seriesStats[series] = 0;
//            }
//            seriesStats[series]++;
//        }
    });
//    console.log(seriesStats);
//    console.log(Object.keys(seriesStats).length)
    $.each(similarities, function (i, similarity) {
        if (similarity) {
            similarities[i] = similarity / nEntries;
        }
    });
    var sparklineDiv = $("<div>", {
        class: "sparkline"
    }).appendTo(statsDiv);
    appendSparkline(sparklineDiv, similarities);
    statsDiv.append($('<span>', {
        text: s
    }));
}

function submitSearch() {
    var searchInput = $('#search').find('input');
    var searchString = searchInput.val();
    if (searchString) {
        toggleSelector('search', searchString);
        searchInput.val('');
    }
}

function openAbout() {
    $('#about').empty();
    $('#about').append($('<iframe width="800" height="600"/>').attr('src', about)).dialog({ minWidth: 832 });
}

function latexToHtml(latex) {
    if (!latex) {
        return '';
    }
    latex = latex.replace(/{|}/g, '');
    var encoding = {
        "'": "acute",
        "`": "grave",
        "^": "circ",
        "\"": "uml",
        "s": "zlig"
    };
    var html = "";
    for (var i = 0; i < latex.length; i++) {
        var c = latex[i];
        if (c == "\\") {
            if (i + 1 < latex.length && latex[i + 1] == '&') {
                c = '&';
                i++;
            } else if (i + 1 < latex.length && latex[i + 1] == '_') {
                c = '_';
                i++;
            } else if (i + 2 < latex.length && encoding[latex[i + 1]]) {
                c = "&" + latex[i + 2] + encoding[latex[i + 1]] + ";";
                i += 2;
            }
        }
        html += c;
    }
    return html;
}
