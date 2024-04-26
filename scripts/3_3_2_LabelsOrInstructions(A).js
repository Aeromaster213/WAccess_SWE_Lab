
setTimeout(() => {
    LabelsOrInstructions();
}, 20000);

function LabelsOrInstructions() {
    let errors = 0;
    let fixed = 0;
    $.fn.log = function () {
        console.log.apply(console, this);
        return this;
    };

    var inputTags = document.querySelectorAll('input');

    for (var d = 0; d < inputTags.length; d++) {
        var inputElement = inputTags[d];
        var label = document.querySelector('label[for="' + inputElement.id + '"]');

        if (label && (!label.innerText || label.innerText.trim() === '')) {
            errors++;
            window.errorMessage("WCAG 3.3.2 (2.0,A)", "Input element's corresponding label's text found empty", "Input element's corresponding label's text has to be added", inputElement);

            
            // Fix: Add text to the label
            label.innerText = "Label for " + inputElement.id;
            fixed++;
        }
    }
    chrome.runtime.sendMessage({ type: "results", script: "3_3_2_LabelsOrInstructions(A)", data: { errors, fixed } });  
}
