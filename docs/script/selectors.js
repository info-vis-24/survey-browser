tokenEntryCache = {};

var typeSymbols = {
    'search': 's',
    'tag': 'J',
    'year': '}',
    'author': 'f',
    'entity': 'K'
};

function updateSelectors() {
    var selectorsDiv = $('#selectors').empty();
    for (var i = 0; i < nSelectors; i++) {
        var selectorDiv = $('<div></div>', {
            class: 'selector selector' + i,
            id: 'selector' + i
        }).appendTo(selectorsDiv);
        var selector = selectors[i];
        if (selector) {
            var invertedClass = (selector['inverted'] ? ' inverted' : '');
            selectorDiv.addClass(invertedClass);
            var lockedClass = (selector['lock'] ? ' locked' : '');
            selectorDiv.addClass(lockedClass);
            $('<span>', {
                class: 'selector_type symbol',
                text: typeSymbols[selector['type']]
            }).appendTo(selectorDiv);
            var contentDiv = $('<div>', {
                class: 'selector_content'
            }).appendTo(selectorDiv);
            $('<div>', {
                class: 'text',
                html: latexToHtml(selector['text'])
            }).appendTo(contentDiv);
            $('<div>', {
                class: 'invert' + invertedClass,
                title: 'invert'
            }).appendTo(contentDiv);
            $('<div>', {
                class: 'lock' + lockedClass,
                title: 'lock'
            }).appendTo(contentDiv);
            $('<div>', {
                class: 'remove',
                title: 'remove'
            }).appendTo(contentDiv);
        } else {
            $('<div>', {
                class: 'selector_type'
            }).appendTo(selectorDiv);
        }
    }
    $('.selector .invert').click(function () {
        var i = parseInt($(this).parent().parent().attr('id').substring(8));
        selectors[i]['inverted'] = !selectors[i]['inverted'];
        $(this).toggleClass('inverted');
        updateShowPart();
    });
    $('.selector .lock').click(function () {
        var i = parseInt($(this).parent().parent().attr('id').substring(8));
        selectors[i]['lock'] = !selectors[i]['lock'];
        $(this).toggleClass('locked');
        updateShowPart();
    });
    $('.selector .remove').click(function () {
        var i = parseInt($(this).parent().parent().attr('id').substring(8));
        selectors[i] = null;
        updateShowPart();
    });
    computeEntrySelectorSimilarities();
    applyFilter();
}

function nextFreeSelector() {
    for (var i = 0; i < nSelectors; i++) {
        if (!selectors[i]) {
            selectors[i] = {};
            return selectors[i];
        }
    }
    return null;
}

function toggleSelector(type, text, event) {
    for (var i = 0; i < nSelectors; i++) {
        if (selectors[i] && selectors[i]['type'] == type && selectors[i]['text'] == text) {
            selectors[i] = null;
            updateShowPart();
            return;
        }
    }
    var selector = nextFreeSelector();
    selector['type'] = type;
    selector['text'] = text;
    selector['inverted'] = false;
    selector['lock'] = event && event.ctrlKey;
    selector['count'] = 0;
    updateShowPart();
}

function getSelectors(type) {
    var filteredSelectors = [];
    for (var i = 0; i < nSelectors; i++) {
        if (selectors[i] && selectors[i]['type'] == type) {
            filteredSelectors.push(selectors[i]);
        }
    }
    return filteredSelectors;
}

function getNActiveSelectors() {
    var count = 0;
    for (var i = 0; i < nSelectors; i++) {
        if (selectors[i] && !selectors[i]['lock']) {
            count++;
        }
    }
    return count;
}

function computeEntrySelectorSimilarities() {
    window.entrySelectorSimilarities = {};
    $.each(entries, function (id, entry) {
        entrySelectorSimilarities[id] = {};
        $.each(selectors, function (i, selector) {
            if (selector) {
                var similarity = 0;
                if (selector['type'] == 'search') {
                    if (!selector['tokenized_text']) {
                        selector['tokenized_text'] = tokenizeSearchString(selector['text']);
                    }
                    similarity = computeSearchSimilarity(id, entry, selector['tokenized_text']);
                } else if (selector['type'] == 'tag') {
                    similarity = computeTagSimilarity(entry, selector['text']);
                } else if (selector['type'] == 'year') {
                    similarity = computeYearSimilarity(entry, selector['text']);
                } else if (selector['type'] == 'author') {
                    similarity = computeAuthorSimilarity(entry, selector['text']);
                } else if (selector['type'] == 'entity') {
                    if (!selector['tokenized_text']) {
                        var searchEntry = entries[selector['text']];
                        var searchText = searchEntry['title'];
                        searchText += searchEntry['abstract'] ? searchEntry['abstract'] : '';
                        searchText += searchEntry['keywords'] ? searchEntry['keywords'] : '';
                        selector['tokenized_text'] = tokenizeSearchString(searchText);
                    }
                    similarity = computeSearchSimilarity(id, entry, selector['tokenized_text']);
                }
                if (selector['inverted']) {
                    similarity = 1 - similarity;
                }
                entrySelectorSimilarities[id][i] = similarity;
            }
        });
    });
    window.sortedIDs = Object.keys(entries).sort(function (a, b) {
        var lowerA = a.toLowerCase();
        var lowerB = b.toLowerCase();
        var similarityA = getTotalSimilarity(a);
        var similarityB = getTotalSimilarity(b);
        if (similarityA > similarityB)
            return -1;
        if (similarityA < similarityB)
            return 1;
        if (lowerA < lowerB)
            return -1;
        if (lowerA > lowerB)
            return 1;
        return 0;
    });
    return sortedIDs;
}

function tokenizeSearchString(text) {
    text = text.toLowerCase();
    var re = /\W+/;
    var words = text.split(re);
    words = $.grep(words, function (word) {
        return word.length > 1 && !($.inArray(word, stopwords) >= 0);
    });
    return words;
}

function computeSearchSimilarity(id, entry, tokens) {
    if (!tokenEntryCache[id]) {
        tokenEntryCache[id] = {};
    }
    var matchCount = 0;
    $.each(tokens, function (i, token) {
        var containedInValues = false;
        if (tokenEntryCache[id][token] != undefined) {
            containedInValues = tokenEntryCache[id][token];
        } else {
            $.each(entry, function (key, value) {
                if (value.toLowerCase().indexOf(token) >= 0) {
                    containedInValues = true;
                }
            });
            containedInValues = id.toLowerCase().indexOf(token) >= 0 || containedInValues;
            tokenEntryCache[id][token] = containedInValues;
        }
        matchCount += containedInValues ? 1 : 0;
    });
    return matchCount / tokens.length;
}

function computeTagSimilarity(entry, text) {
    var tags = parseTags(entry["keywords"]);
    if (tags.indexOf(text) >= 0) {
        return 1.0;
    }
    return 0.0;
}

function computeYearSimilarity(entry, text) {
    if (entry["year"] == text) {
        return 1.0;
    }
    return 0.0;
}

function computeAuthorSimilarity(entry, text) {
    if (!entry['author']) {
        return 0.0;
    }
    text = text.toLowerCase();
    if (entry['author'].toLowerCase().indexOf(text) >= 0) {
        return 1.0;
    }
    return 0.0;
}

function computeEntitySimilarity(id, entry, text) {
    var searchEntry = entries[text];
    var searchText = searchEntry['title'];
    searchText += searchEntry['abstract'] ? searchEntry['abstract'] : '';
    searchText += searchEntry['keywords'] ? searchEntry['keywords'] : '';
    return computeSearchSimilarity(id, entry, searchText);
}

function getTotalSimilarity(id) {
    var similaritySum = 0.0;
    var count = 0.0;
    $.each(selectors, function (i, selector) {
        if (selector && !selector['lock']) {
            similaritySum += entrySelectorSimilarities[id][i];
            count++;
        }
    });
    if (count > 0) {
        return similaritySum / count;
    }
    return 0;
}

function applyFilter() {
    window.filteredEntries = {};
    $.each(window.sortedIDs, function (i, id) {
        if (!filteredOut(id)) {
            window.filteredEntries[id] = entries[id];
        }
    });
}

function filteredOut(id) {
    var filteredOut = false;
    $.each(selectors, function (i, selector) {
        if (selector) {
            if (selector['lock'] && window.entrySelectorSimilarities[id][i] <= 0) {
                filteredOut = true;
            }
        }
    });
    return filteredOut;
}
