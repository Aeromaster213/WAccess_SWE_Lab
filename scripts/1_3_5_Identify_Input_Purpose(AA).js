setTimeout(() => {
    IdentifyInputPurpose()
}, 3000);

function IdentifyInputPurpose() {
    let errors = 0;
    let fixed = 0;
    $.fn.log = function () {
        console.log.apply(console, this);
        return this;
    };
    var inputTags = document.querySelectorAll('input')
    for (var a = 0; a < inputTags.length; a++) {
        if (inputTags[a].type != "hidden") {
            if (inputTags[a].autocomplete == undefined || inputTags[a].autocomplete == "") {
                errors++;
                window.errorMessage("WCAG 1.3.5 (2.1,AA)", "AutoComplete is missing in input tag", "Add autocomplete='INPUT PURPOSE'", inputTags[a]);

                inputTags[a].setAttribute('autocomplete', 'off'); // Set a default value if missing
                console.log("%cFix Applied: %cAdded autocomplete='off' attribute to input tag", window.ruleStyle, window.fixStyle);
                fixed += 1;
            }
        }

    }

    chrome.runtime.sendMessage({ type: "results", script: "1_3_5_Identify_Input_Purpose(AA).js", data: { errors, fixed } });
}