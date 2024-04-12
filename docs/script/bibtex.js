function downloadBibtex() {
    var blob = new Blob([createAllBibtex()]);
    window.saveAs(blob, 'reference.bib');
}

function createBibtex(id, field) {
    var bibtex = "@" + field["type"] + "{" + id;
    for (var fieldName in field) {
        if (fieldName == "type") {
            continue;
        }
        if (fieldName == 'year' && field[fieldName].length > 4) {
            console.error('Warning: year too long for ' +id+ ' ("'+field[fieldName]+'")');
        }
        if (field.hasOwnProperty(fieldName)) {
            bibtex += ",\n  " + fieldName + " = {" + field[fieldName] + "}";
        }
    }
    return bibtex + "\n}";
}

function createAllBibtex() {
    var bibtex = "";
    $.each(entries, function (id, entry) {
        var currentBibtex = "";
        if (entryDivs[id]) {
            entryDivs[id].find(".CodeMirror-code").children().each(function () {
                currentBibtex += $(this).text() + "\n";
            });
        }
        if (!currentBibtex) {
            currentBibtex = createBibtex(id, entry);
        }
        bibtex += currentBibtex;
        bibtex += "\n\n";
    });
    return bibtex;
}
