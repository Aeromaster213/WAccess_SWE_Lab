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
        window.errorMessage("WCAG 2.2.2 (2.0,A)", "Marquee tag found in the html page", "Provide users enough time to read and use content. Use strong or em tag instead of marquee.", marqueeTags[d]);

        // Replace marquee tag with strong or em tag
        // var parentElement = marqueeTags[d].parentNode;
        // var textContent = marqueeTags[d].textContent;
        // var replacementTag = document.createElement('strong'); // or 'em' depending on the semantics
        // replacementTag.textContent = textContent;
        // parentElement.replaceChild(replacementTag, marqueeTags[d]);

        var newTag = document.createElement("strong");
        newTag.innerHTML = marqueeTags[d].innerHTML;
        marqueeTags[d].replaceWith(newTag);
    }
}
