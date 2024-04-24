import { logMessage, ruleStyle, infoStyle, errorStyle, codeSnippetStyle, fixStyle, separatorStyle } from './consoleStyles.js';

setTimeout(() => {
    InfoAndRelationships()
}, 2000);

function InfoAndRelationships() {
    $.fn.log = function () {
        console.log.apply(console, this);
        return this;
    };
    var inputTags = document.querySelectorAll('input')
    for (var d = 0; d < inputTags.length; d++) {
        if (!inputTags[d].disabled) {
            var testCasePass = false
            if (inputTags[d].type == "text") {
                var labelTags = document.querySelectorAll("label")
                for (var x = 0; x < labelTags.length; x++) {
                    if (labelTags[x].htmlFor == inputTags[d].id) {
                        if (labelTags[x].innerText != null && labelTags[x].innerText != "") {
                            testCasePass = true
                            break
                        }
                    }
                }
                if (testCasePass == false) {
                    logMessage("WCAG 1.3.1 (2.0,A)", "Error: Input element (of type text) is missing text in the label", "A text to the label corresponding to this input element has to be added in order to describe the function or purpose of the control", inputTags[d]);
                }

                if (inputTags[d].title == null || inputTags[d].title == "") {
                    logMessage("WCAG 1.3.1 (2.0,A)", "Error: Input element (of type text) is missing a title", "A title has to be added to this input element in order to describe the function or purpose of the control", inputTags[d]);
                }

                var etestCasePass = false
                var e1labelTags = document.querySelectorAll("label")
                for (var x = 0; x < e1labelTags.length; x++) {
                    if (inputTags[d].contains(e1labelTags[x])) {
                        if (e1labelTags[x].innerText != null && e1labelTags[x].innerHTML != "") {
                            etestCasePass = true
                            break
                        }
                    }
                }
                if (etestCasePass == false) {
                    logMessage("WCAG 1.3.1 (2.0,A)", "Error: Input element (of type text) is missing a label", "A label corresponding to this input element has to be added in order to describe the function or purpose of the control", inputTags[d]);
                }
            }
        }


    }
    $(document).ready(function () {
        $('*').each(function () {
            if ($(this).prop("nodeName") == "P") {
                var textRoot = ""
                $(this).contents().filter(function () {
                    return this.nodeType == Node.TEXT_NODE && this.nodeValue.trim() != '';
                }).each(function () {
                    textRoot += $(this).text();
                });
                if (!$.trim(textRoot)) {
                    var pTags = $(this).children()
                    for (var d = 0; d < pTags.length; d++) {
                        if ([d].nodeName == "FONT" ||
                            pTags[d].nodeName == "I" ||
                            pTags[d].nodeName == "B" ||
                            pTags[d].nodeName == "BOLD" ||
                            pTags[d].nodeName == "EM" ||
                            pTags[d].nodeName == "U" ||
                            pTags[d].nodeName == "STRONG") {
                            console.log("%cRule:%cWCAG 1.3.1 (2.0,A)",
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
                            console.log("%cWarning:%c<p> might be misused as a header, its content should not be marked by any of font, i, b, u, em, strong tags",
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
                                background-color: #F6976E;
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
                            console.log("%cFix:%cUse a header tag instead",
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
                            break
                        }
                    }
                }
            }
        }

        )
    })
}

