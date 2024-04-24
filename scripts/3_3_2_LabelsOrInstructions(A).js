// Import styles from styles.js
//import { ruleStyle, errorStyle, infoStyle, fixStyle, codeSnippetStyle, separatorStyle } from './styles.js';
var ruleStyle = `color: #FFF; background-color: #333; border-radius: 5px 0px 0px 5px; padding: 5px 10px; font-size: 0.8rem; display: inline; box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`;
var errorStyle = `color: #FFF; background-color: #EB5177; border-radius: 0px 5px 5px 0px; padding: 5px 10px; font-size: 0.8rem; display: inline; box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`;
var infoStyle = `color: #FFF; background-color: #809FFF; border-radius: 0px 5px 5px 0px; padding: 5px 10px; font-size: 0.8rem; display: inline; box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`;
var fixStyle = `color: #FFF; background-color: #007075; border-radius: 0px 5px 5px 0px; padding: 5px 10px; font-size: 0.8rem; display: inline; box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`;
var codeSnippetStyle = `color: #FFF; background-color: #333; border-radius: 5px; padding: 5px 10px; font-size: 0.8rem; display: inline; box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`;
var separatorStyle = `color: #FFF; background-color: #293543; font-weight: bolder; border-radius: 5px; padding: 5px 10px; font-size: 1rem; display: inline;`;
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
