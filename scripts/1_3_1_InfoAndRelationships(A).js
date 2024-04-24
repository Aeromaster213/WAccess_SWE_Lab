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
                    window.errorMessage("WCAG 1.3.1 (2.0,A)", "Input element (of type text) is missing text in the label", "A text to the label corresponding to this input element has to be added in order to describe the function or purpose of the control", inputTags[d]);
                }

                if (inputTags[d].title == null || inputTags[d].title == "") {
                    window.errorMessage("WCAG 1.3.1 (2.0,A)", "Input element (of type text) is missing a title", "A title has to be added to this input element in order to describe the function or purpose of the control", inputTags[d]);
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
                    window.errorMessage("WCAG 1.3.1 (2.0,A)", "Input element (of type text) is missing a label", "A label corresponding to this input element has to be added in order to describe the function or purpose of the control", inputTags[d]);
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
                            window.warningMessage("WCAG 1.3.1 (2.0,A)", "<p> might be misused as a header, its content should not be marked by any of font, i, b, u, em, strong tags", "Use a header tag instead", pTags[d]);
                            break
                        }
                    }
                }
            }
        }

        )
    })
}