// Import styles from styles.js
import { ruleStyle, errorStyle, infoStyle, fixStyle, codeSnippetStyle, separatorStyle } from './styles.js';

// here to avoid input label corresponding item empty, i have added a fix by adding input id with label tag 
// can be enhanched using LLM if i can add the tags using context.

setTimeout(() => {
    LabelsOrInstructions();
}, 20000);

function LabelsOrInstructions() {
    $.fn.log = function () {
        console.log.apply(console, this);
        return this;
    };

    var inputTags = document.querySelectorAll('input');

    for (var d = 0; d < inputTags.length; d++) {
        var inputElement = inputTags[d];
        var label = document.querySelector('label[for="' + inputElement.id + '"]');

        if (label && (!label.innerText || label.innerText.trim() === '')) {
            console.log("%cRule:%cWCAG 3.3.2 (2.0,A)", ruleStyle, infoStyle);
            console.log("%cError:%cInput element's corresponding label's text found empty", ruleStyle, errorStyle);
            console.log("%cCode Snippet:", codeSnippetStyle);
            $(inputElement).log();
            console.log("%cFix:%cInput element's corresponding label's text has to be added", ruleStyle, fixStyle);
            console.log("%c-----------------------------------------------------------------------------", separatorStyle);
            
            // Fix: Add text to the label
            label.innerText = "Label for " + inputElement.id;
        }
    }
}
