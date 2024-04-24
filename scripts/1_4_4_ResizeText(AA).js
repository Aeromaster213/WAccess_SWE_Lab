setTimeout(() => {
    ResizeText()
}, 8000);

function ResizeText() {
    $.fn.log = function () {
        console.log.apply(console, this);
        return this;
    };
    var italicTags = document.querySelectorAll('i')
    for (var d = 0; d < italicTags.length; d++) {
        console.log("%cRule:%cWCAG 1.4.4 (2.0,AA)",
            `color: #FFF;
                            background-color: #333;
                            border-radius: 5px 0px 0px 5px;
                            padding: 5px 10px;
                            font-size: 0.8rem;
                            display: inline;
                            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
            `color: #FFF;
                            display: inline;
                            font-size: 0.8rem;
                            background-color: #809FFF;
                            border-radius: 0px 5px 5px 0px;
                            padding: 5px 10px;
                            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
        console.log("%cError:%cFound italic tag",
            `color: #FFF;
                            background-color: #333;
                            border-radius: 5px 0px 0px 5px;
                            padding: 5px 10px;
                            font-size: 0.8rem;
                            display: inline;
                            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
            `color: #FFF;
                            display: inline;
                            font-size: 0.8rem;
                            background-color: #EB5177;
                            border-radius: 0px 5px 5px 0px;
                            padding: 5px 10px;
                            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
        console.log("%cCode Snippet:",
            `color: #FFF;
                            background-color: #333;
                            border-radius: 5px;
                            padding: 5px 10px;
                            font-size: 0.8rem;
                            display: inline;
                            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
        $(italicTags[d]).log()
        var newTag = document.createElement("em");
        newTag.innerHTML = italicTags[d].innerHTML;
        italicTags[d].replaceWith(newTag);
        console.log("%cFix:%cInstead use strong or em tag",
            `color: #FFF;
                            background-color: #333;
                            border-radius: 5px 0px 0px 5px;
                            padding: 5px 10px;
                            font-size: 0.8rem;
                            display: inline;
                            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
            `color: #FFF;
                            display: inline;
                            font-size: 0.8rem;
                            background-color: #007075;
                            border-radius: 0px 5px 5px 0px;
                            padding: 5px 10px;
                            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
        console.log("%c-----------------------------------------------------------------------------",
            `color: #FFF;
                            background-color: #293543;
                            font-weight: bolder;
                            border-radius: 5px;
                            padding: 5px 10px;
                            font-size: 1rem;
                            display: inline;`)
    }
    var boldTags = document.querySelectorAll('bold')
    for (var d = 0; d < boldTags.length; d++) {
        console.log("%cRule:%cWCAG 1.4.4 (2.0,AA)",
            `color: #FFF;
            background-color: #333;
            border-radius: 5px 0px 0px 5px;
            padding: 5px 10px;
            font-size: 0.8rem;
            display: inline;
            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
            `color: #FFF;
            display: inline;
            font-size: 0.8rem;
            background-color: #809FFF;
            border-radius: 0px 5px 5px 0px;
            padding: 5px 10px;
            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
        console.log("%cError:%cFound bold tag",
            `color: #FFF;
            background-color: #333;
            border-radius: 5px 0px 0px 5px;
            padding: 5px 10px;
            font-size: 0.8rem;
            display: inline;
            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
            `color: #FFF;
            display: inline;
            font-size: 0.8rem;
            background-color: #EB5177;
            border-radius: 0px 5px 5px 0px;
            padding: 5px 10px;
            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
        console.log("%cCode Snippet:",
            `color: #FFF;
            background-color: #333;
            border-radius: 5px;
            padding: 5px 10px;
            font-size: 0.8rem;
            display: inline;
            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
        $(boldTags[d]).log()
        var newTag = document.createElement("strong");
        newTag.innerHTML = boldTags[d].innerHTML;
        boldTags[d].replaceWith(newTag);
        console.log("%cFix:%cInstead use strong or em tag",
            `color: #FFF;
            background-color: #333;
            border-radius: 5px 0px 0px 5px;
            padding: 5px 10px;
            font-size: 0.8rem;
            display: inline;
            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
            `color: #FFF;
            display: inline;
            font-size: 0.8rem;
            background-color: #007075;
            border-radius: 0px 5px 5px 0px;
            padding: 5px 10px;
            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
        console.log("%c-----------------------------------------------------------------------------",
            `color: #FFF;
            background-color: #293543;
            font-weight: bolder;
            border-radius: 5px;
            padding: 5px 10px;
            font-size: 1rem;
            display: inline;`)

    }

    var fontTags = document.querySelectorAll('font')
    for (var d = 0; d < fontTags.length; d++) {
        console.log("%cRule:%cWCAG 1.4.4 (2.0,AA)",
            `color: #FFF;
             background-color: #333;
             border-radius: 5px 0px 0px 5px;
             padding: 5px 10px;
             font-size: 0.8rem;
             display: inline;
             box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
            `color: #FFF;
             display: inline;
             font-size: 0.8rem;
             background-color: #809FFF;
             border-radius: 0px 5px 5px 0px;
             padding: 5px 10px;
             box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
        console.log("%cError:%cFound font tag",
            `color: #FFF;
             background-color: #333;
             border-radius: 5px 0px 0px 5px;
             padding: 5px 10px;
             font-size: 0.8rem;
             display: inline;
             box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
            `color: #FFF;
             display: inline;
             font-size: 0.8rem;
             background-color: #EB5177;
             border-radius: 0px 5px 5px 0px;
             padding: 5px 10px;
             box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
        console.log("%cCode Snippet:",
            `color: #FFF;
             background-color: #333;
             border-radius: 5px;
             padding: 5px 10px;
             font-size: 0.8rem;
             display: inline;
             box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
        $(fontTags[d]).log()
        var newTag = document.createElement("p");
        newTag.innerHTML = fontTags[d].innerHTML;
        fontTags[d].replaceWith(newTag);
        console.log("%cFix:%cRemove it. Avoid using it.",
            `color: #FFF;
             background-color: #333;
             border-radius: 5px 0px 0px 5px;
             padding: 5px 10px;
             font-size: 0.8rem;
             display: inline;
             box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
            `color: #FFF;
             display: inline;
             font-size: 0.8rem;
             background-color: #007075;
             border-radius: 0px 5px 5px 0px;
             padding: 5px 10px;
             box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
        console.log("%c-----------------------------------------------------------------------------",
            `color: #FFF;
             background-color: #293543;
             font-weight: bolder;
             border-radius: 5px;
             padding: 5px 10px;
             font-size: 1rem;
             display: inline;`)

    }

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
                    console.log("%cRule:%cWCAG 1.4.4 (2.0,AA)",
                        `color: #FFF;
                         background-color: #333;
                         border-radius: 5px 0px 0px 5px;
                         padding: 5px 10px;
                         font-size: 0.8rem;
                         display: inline;
                         box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
                        `color: #FFF;
                         display: inline;
                         font-size: 0.8rem;
                         background-color: #809FFF;
                         border-radius: 0px 5px 5px 0px;
                         padding: 5px 10px;
                         box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
                    console.log("%cSuggestion:%cPlease define width, height, and font-size for the elements that can contain text or take text input in `em`. This helps in resizing text.",
                        `color: #FFF;
                         background-color: #333;
                         border-radius: 5px 0px 0px 5px;
                         padding: 5px 10px;
                         font-size: 0.8rem;
                         display: inline;
                         box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
                        `color: #FFF;
                         display: inline;
                         font-size: 0.8rem;
                         background-color: #007075;
                         border-radius: 0px 5px 5px 0px;
                         padding: 5px 10px;
                         box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
                    console.log("%cCode Snippet:",
                        `color: #FFF;
                         background-color: #333;
                         border-radius: 5px;
                         padding: 5px 10px;
                         font-size: 0.8rem;
                         display: inline;
                         box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
                    $(this).log()
                    console.log("%c-----------------------------------------------------------------------------",
                        `color: #FFF;
                         background-color: #293543;
                         font-weight: bolder;
                         border-radius: 5px;
                         padding: 5px 10px;
                         font-size: 1rem;
                         display: inline;`)
                }
            }
        })
    })
}