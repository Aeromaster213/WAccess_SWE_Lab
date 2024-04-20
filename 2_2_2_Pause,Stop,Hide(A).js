setTimeout(() => {
    Pause_Stop_Hide();
}, 11000);

function Pause_Stop_Hide() {
    $.fn.log = function () {
        console.log.apply(console, this);
        return this;
    };

    var marqueeTags = document.querySelectorAll('marquee');
    for (var d = 0; d < marqueeTags.length; d++) {
        // Log the violation
        console.log("%cRule:%cWCAG 2.2.2 (2.0,A)", ruleStyle, infoStyle);
        console.log("%cError:%cMarquee tag found in the html page", ruleStyle, errorStyle);
        console.log("%cCode Snippet:", codeSnippetStyle);
        $(marqueeTags[d]).log();
        console.log("%cFix:%cProvide users enough time to read and use content. Use strong or em tag instead of marquee.", ruleStyle, fixStyle);
        console.log("%c-----------------------------------------------------------------------------", separatorStyle);

        // Replace marquee tag with strong or em tag
        var parentElement = marqueeTags[d].parentNode;
        var textContent = marqueeTags[d].textContent;
        var replacementTag = document.createElement('strong'); // or 'em' depending on the semantics
        replacementTag.textContent = textContent;
        parentElement.replaceChild(replacementTag, marqueeTags[d]);
    }
}
