// http://stackoverflow.com/questions/985272/jquery-selecting-text-in-an-element-akin-to-highlighting-with-your-mouse
function selectElementText(el, win) {
    win = win || window;
    var doc = win.document, sel, range;
    if (win.getSelection && doc.createRange) {
        sel = win.getSelection();
        range = doc.createRange();
        range.selectNodeContents(el);
        sel.removeAllRanges();
        sel.addRange(range);
    } else if (doc.body.createTextRange) {
        range = doc.body.createTextRange();
        range.moveToElementText(el);
        range.select();
    }
}

//http://stackoverflow.com/questions/2118560/jquery-form-submission-stopping-page-refresh-only-works-in-newest-browsers
function stopEvent(event) {
    event.preventDefault();
    event.stopPropagation();
//    if ($.browser.msie) {
//        event.originalEvent.keyCode = 0;
//        event.originalEvent.cancelBubble = true;
//        event.originalEvent.returnValue = false;
//    }
}
