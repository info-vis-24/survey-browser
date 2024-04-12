function updateEntryList() {
    $('#entry_list').find('.entry').hide();
    var j = 0;
    $.each(window.sortedIDs, function (i, id) {
        if (Object.keys(window.filteredEntries).indexOf(id + '') >= 0 && (j < 20 || showAllEntries)) {
            var entryDiv = createEntryDiv(id);
            var sparklineDiv = entryDiv.find('.sparkline');
            sparklineDiv.empty();
            appendSparkline(sparklineDiv, entrySelectorSimilarities[id]);
            var greyValue = Math.round(-getTotalSimilarity(id) * 200 + 200);
            entryDiv.css('border-color', 'rgb(' + greyValue + ',' + greyValue + ',' + greyValue + ')');
            entryDiv.appendTo('#entry_list');
            entryDiv.show();
            j++;
        }
    });
    var resultDiv = $('#result');
    resultDiv.find('.active').removeClass('active');
    $.each(getActiveTags(), function (tag) {
        resultDiv.find('.tag[value="' + tag + '"]').addClass('active');
    });
    $.each(getSelectors('author'), function (i, selector) {
        var authorValue = selector['text'].replace(/\\/g, '\\\\');
        resultDiv.find('.author[value="' + authorValue + '"]').addClass('active');
    });
    $('#show_all_entries').remove();
    if (!showAllEntries) {
        var showAll = $('<div>', {
            id: 'show_all_entries',
            class: 'button',
            text: 'show all'
        }).appendTo('#entry_list');
        showAll.click(function () {
            updateShowAll();
        });
    }
}

function createEntryDiv(id) {
    if (!entryDivs[id]) {
        var entry = entries[id];
        var pdfFile = dataDir + 'papers_pdf/' + id + '.pdf';
        var entryDiv = $('<div>', {
            class: 'entry type_' + entry['type'],
            id: id
        });
        if (availableImg.indexOf(id) >= 0) {
            createImgDiv(id, pdfFile).appendTo(entryDiv);
        }
        var entryMainDiv = $('<div>', {
            class: 'entry_main'
        }).appendTo(entryDiv);
        createLinksDiv(id, entry, pdfFile).appendTo(entryMainDiv);
        createEntryHeaderDiv(id, entry).appendTo(entryMainDiv);
        createTitleDiv(id, entry, pdfFile).appendTo(entryMainDiv);
        createAuthors(entry['author']).appendTo(entryMainDiv);
        createAbstract(entry['abstract'], true).appendTo(entryMainDiv);
        createTags(entry).appendTo(entryMainDiv);
        if (entry['comment']) {
            createComment(entry['comment']).appendTo(entryMainDiv);
        }
        createFooter(id, entry).appendTo(entryMainDiv);
        createBibtexDiv(id, entry).appendTo(entryMainDiv);
        entryDivs[id] = entryDiv;
    }
    return entryDivs[id];
}
function createLinksDiv(id, entry, pdfFile) {
    var linksDiv = $('<div>', {
        class: 'links'
    });
    if (availablePdf.indexOf(id) >= 0) {
        $('<a>', {
            href: pdfFile,
            target: '_blank',
            text: 'PDF'
        }).appendTo(linksDiv);
    }
    if (entry['doi']) {
        $('<a>', {
            href: 'http://dx.doi.org/' + entry['doi'],
            target: '_blank',
            text: 'DOI'
        }).appendTo(linksDiv);
    }
    if (entry['url']) {
        $('<a>', {
            href: entry['url'],
            target: '_blank',
            text: 'URL'
        }).appendTo(linksDiv);
    }
    $('<a>', {
        href: 'http://scholar.google.de/scholar?hl=en&q=' + encodeURIComponent(entry['title']),
        target: '_blank',
        text: 'Google Scholar'
    }).appendTo(linksDiv);
    $('<a>', {
        href: 'https://www.google.de/search?q=' + encodeURIComponent(entry['title']),
        target: '_blank',
        text: 'Google'
    }).appendTo(linksDiv);
    if (entry['citeulike-article-id']) {
        $('<a>', {
            href: 'http://www.citeulike.org/user/fbeck/article/' + entry['citeulike-article-id'],
            target: '_blank',
            text: 'CiteULike'
        }).appendTo(linksDiv);
    }
    return linksDiv;
}

function createEntryHeaderDiv(id, entry) {
    var entryHeaderDiv = $('<div>', {
        class: 'entry_header'
    });
    $('<div>', {
        class: 'sparkline'
    }).appendTo(entryHeaderDiv);
    var idDiv = $('<div>', {
        class: 'id',
        text: id
    }).appendTo(entryHeaderDiv);
    idDiv.click(function () {
        selectElementText(this);
    });
    var series = entry['series'];
    if (!series) {
        if (entry['type'] == 'article') {
            series = entry['journal'];
        } else {
            series = '[' + entry['type'] + ']'
        }
    }
    $('<div>', {
        class: 'series',
        text: latexToHtml(series)
    }).appendTo(entryHeaderDiv);
    $('<div>', {
        class: 'year',
        text: '(' + entry['year'] + ')'
    }).appendTo(entryHeaderDiv);
    return entryHeaderDiv;
}

function createTitleDiv(id, entry, pdfFile) {
    if (availablePdf.indexOf(id) >= 0 || entry['doi'] || entry['url']) {
        return $("<a>", {
            class: "title",
            text: latexToHtml(entry["title"]),
            target: '_blank',
            href: availablePdf.indexOf(id) >= 0 ? pdfFile : (entry['doi'] ? 'http://dx.doi.org/' + entry['doi'] : entry['url'])
        });
    } else {
        return $("<div>", {
            class: "title",
            text: latexToHtml(entry["title"])
        });
    }
}

function createAuthors(authors) {
    if (!authors) {
        return $('<div>', {
            'text': '[unknown authors]',
            'class': 'author unknown'
        });
    }
    var authorsDiv = $("<div>", {
        class: "authors"
    });
    $.each(authors.split(" and "), function (i, author) {
        var authorSplit = author.split(",");
        if (authorSplit.length == 2) {
            var authorDiv = $("<div>", {
                class: "author",
                value: author
            }).appendTo(authorsDiv);
            authorDiv.click(function (event) {
                toggleSelector('author', author, event);
            });
            $("<span>", {
                class: "last_name",
                html: latexToHtml(authorSplit[0])
            }).appendTo(authorDiv);
            $("<span>", {
                class: "first_name",
                html: ", " + latexToHtml(authorSplit[1])
            }).appendTo(authorDiv);
        } else {
            $.each(authorSplit, function (j, author2) {
                authorDiv = $("<div>", {
                    class: "author",
                    value: author2
                }).appendTo(authorsDiv);
                authorDiv.click(function (event) {
                    toggleSelector('author', author2, event);
                });
                $("<span>", {
                    class: "name",
                    text: author2
                }).appendTo(authorDiv);
            });
        }
    });
    return authorsDiv;
}

function createAbstract(text, shorten) {
    if (text) {
        text = latexToHtml(text);
        var abstractDiv = $("<div>", {
            class: 'abstract' + ( shorten ? ' collapsed' : ''),
            text: ( shorten ? shortenText(text, maxAbstractLength) : text),
            value: text
        });
        if (shorten && text.length != abstractDiv.text().length) {
            $("<span>", {
                class: 'expand',
                text: " > "
            }).appendTo(abstractDiv);
        }
        $("<span>", {
            class: "label",
            text: "Abstract: "
        }).prependTo(abstractDiv);
        abstractDiv.click(function () {
            var value = $(this).attr('value');
            var collapsed = $(this).hasClass('collapsed');
            $(this).replaceWith(createAbstract(value, !collapsed));
        });
        return abstractDiv;
    }
    return $('');
}

function createTags(entry) {
    function createTagList(entry) {
        var tagListSpan = $("<span>", {
            class: "tag_list"
        });
        $.each(parseTags(entry['keywords']), function (i, tag) {
            var tagDiv = $("<div>", {
                class: "tag",
                text: tag,
                value: tag
            }).appendTo(tagListSpan);
            var colonIndex = tagDiv.text().indexOf(':');
            if (colonIndex >= 0 && tagListSpan.text().length - 1 > colonIndex) {
                var tagCategory = tagDiv.text().substring(0, colonIndex + 1);
                var tagCategorySpan = $('<span>', {
                    class: 'tag_category',
                    text: tagCategory
                });
                tagDiv.text(tagDiv.text().substring(colonIndex + 1));
                tagDiv.prepend(tagCategorySpan);
            }
            tagDiv.click(function (event) {
                toggleSelector('tag', tag, event);
            });
        });
        return tagListSpan;
    }

    var tagsDiv = $("<div>", {
        class: "tags"
    });
    var tagListSpan = createTagList(entry);
    tagListSpan.appendTo(tagsDiv);
    if (editable) {
        var addTagForm = $('<form>', {
            text: '+',
            class: 'add_tag button',
            title: 'add tag'
        }).appendTo(tagsDiv);
        var addTagInput = $('<input>', {
            class: 'tag_input'
        }).appendTo(addTagForm);
        addTagForm.click(function () {
            addTagInput.show();
            addTagInput.focus();
        });
        addTagInput.autocomplete({
            source: window.allTags,
            sortResults: false
        });
        addTagForm.submit(function (event) {
            var tagText = addTagInput.val();
            addTagInput.val('');
            var prevKeywords = entry['keywords'] ? entry['keywords'] + ', ' : '';
            entry['keywords'] = prevKeywords + tagText;
            $(this).parent('.tags').find('.tag_list').replaceWith(createTagList(entry));
            stopEvent(event);
        });
    }
    return tagsDiv;
}

function createComment(comment) {
    var commentDiv = $("<div>", {
        class: "comment",
        text: comment
    });
    $("<span>", {
        class: "label",
        text: "Comment: "
    }).prependTo(commentDiv);
    return commentDiv;
}

function createFooter(id, entry) {
    var selectSimilarDiv = $('<div>', {
        class: 'button select_similar',
        text: 'select similar',
        title: 'add a selector marking similar publications'
    });
    selectSimilarDiv.click(function (event) {
        toggleSelector('entity', id, event)
    });
    return selectSimilarDiv;
}

function createImgDiv(id, pdfFile) {
    var entryImgDiv = $('<div>', {
        class: "entry_img"
    });
    var imgDiv;
    var img = dataDir + "papers_img/" + id + ".png";
    imgDiv = $("<img>", {
        class: "thumb",
        src: img
    });
    if (availablePdf.indexOf(id) >= 0) {
        imgDiv = imgDiv.appendTo($("<a>", {
            href: pdfFile,
            target: '_blank'
        }));
    }
    imgDiv.appendTo(entryImgDiv);
    return entryImgDiv;
}

function createBibtexDiv(id, entry) {
    var bibtexEditor = null;
    var bibtexContainerDiv = $('<div>', {
        class: 'bibtex_container'
    });
    var bibtexControl = $("<div>", {
        class: "bibtex_control button",
        text: "BibTeX",
        title: 'show/hide BibTeX code'
    }).appendTo(bibtexContainerDiv);
    bibtexControl.click(function () {
        if (!bibtexEditor) {
            bibtexEditor = CodeMirror(bibtexContainerDiv.get(0), {value: createBibtex(id, entry), lineWrapping: true, readOnly: !editable});
        } else {
            bibtexContainerDiv.find('.CodeMirror').toggle();
        }
        bibtexEditor.focus();
        if (!editable) {
            bibtexEditor.setSelection({line: 0, ch: 0}, {line: bibtexEditor.lastLine(), ch: bibtexEditor.getLine(bibtexEditor.lastLine()).length});
        }
    });
    return bibtexContainerDiv;
}

function shortenText(s, length) {
    if (s.length > length * 1.5 && length > 3) {
        return s.substring(0, length - 3) + '...';
    }
    return s;
}

