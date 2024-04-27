
setTimeout(() => {
    ResizeText()
}, 8000);

function ResizeText() {

    let errors = 0;
    let fixed = 0;

    $.fn.log = function () {
        console.log.apply(console, this);
        return this;
    };

    // Handle italic tags
    const italicTags = document.querySelectorAll('i');
    for (let d = 0; d < italicTags.length; d++) {
        errors++;
        window.errorMessage("WCAG 1.4.4 (2.0,AA)", "Found italic tag", "Instead use strong or em tag", italicTags[d]);
        replaceElement('em', italicTags[d]);
        fixed++;
    }

    // Handle bold tags
    const boldTags = document.querySelectorAll('bold');
    for (let d = 0; d < boldTags.length; d++) {
        errors++;
        window.errorMessage("WCAG 1.4.4 (2.0,AA)", "Found bold tag", "Instead use strong or em tag", boldTags[d]);
        replaceElement('strong', boldTags[d]);
        fixed++;
    }

    // Handle font tags
    const fontTags = document.querySelectorAll('font');
    for (let d = 0; d < fontTags.length; d++) {
        errors++;
        window.errorMessage("WCAG 1.4.4 (2.0,AA)", "Found font tag", "Remove it. Avoid using it.", fontTags[d]);
        replaceElement('p', fontTags[d]);
        fixed++;
    }

    // Handle other elements
    $(document).ready(function () {
        $('*').each(function () {
            if ($(this).prop("nodeName") == "DIV" ||
                $(this).prop("nodeName") == "SPAN" ||
                $(this).prop("nodeName") == "A" ||
                $(this).prop("nodeName") == "P" ||
                $(this).prop("nodeName") == "H1" ||
                $(this).prop("nodeName") == "H2" ||
                $(this).prop("nodeName") == "H3" ||
                $(this).prop("nodeName") == "H4" ||
                $(this).prop("nodeName") == "H5" ||
                $(this).prop("nodeName") == "H6" ||
                $(this).prop("nodeName") == "INPUT" ||
                $(this).prop("nodeName") == "Q" ||
                $(this).prop("nodeName") == "BLACKQUOTE" ||
                $(this).prop("nodeName") == "CODE" ||
                $(this).prop("nodeName") == "PRE" ||
                $(this).prop("nodeName") == "OL" ||
                $(this).prop("nodeName") == "LI" ||
                $(this).prop("nodeName") == "DL" ||
                $(this).prop("nodeName") == "DT" ||
                $(this).prop("nodeName") == "DD" ||
                $(this).prop("nodeName") == "MARK" ||
                $(this).prop("nodeName") == "INS" ||
                $(this).prop("nodeName") == "DEL" ||
                $(this).prop("nodeName") == "SUP" ||
                $(this).prop("nodeName") == "SUB" ||
                $(this).prop("nodeName") == "SMALL" ||
                $(this).prop("nodeName") == "I" ||
                $(this).prop("nodeName") == "BOLD" ||
                $(this).prop("nodeName") == "B" ||
                $(this).prop("nodeName") == "FONT" ||
                $(this).prop("nodeName") == "EM") {
                var textRoot = ""
                $(this).contents().filter(function () {
                    return this.nodeType == Node.TEXT_NODE && this.nodeValue.trim() != '';
                }).each(function () {
                    textRoot += $(this).text();
                });
                if ($.trim(textRoot)) {
                    console.log(`%cRule:%cWCAG 1.4.4 (2.0,AA)`, window.ruleStyle, window.infoStyle);
                    console.log(`%cSuggestion:%cPlease define width, height, and font-size for the elements that can contain text or take text input in 'em'. This helps in resizing text.`, window.ruleStyle, window.suggestionStyle);
                    console.log(`%cCode Snippet:`, window.codeSnippetStyle);
                    $(this).log();
                    console.log(`%c-----------------------------------------------------------------------------`, window.separatorStyle);
                }
            }
        })
    })

    chrome.runtime.sendMessage({ type: "results", script: "1_4_4_ResizeText(AA)", data: { errors, fixed } });
}
