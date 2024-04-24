//import { ruleStyle, errorStyle, infoStyle, fixStyle, codeSnippetStyle, separatorStyle } from './styles.js';

var ruleStyle = `color: #FFF; background-color: #333; border-radius: 5px 0px 0px 5px; padding: 5px 10px; font-size: 0.8rem; display: inline; box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`;
var errorStyle = `color: #FFF; background-color: #EB5177; border-radius: 0px 5px 5px 0px; padding: 5px 10px; font-size: 0.8rem; display: inline; box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`;
var infoStyle = `color: #FFF; background-color: #809FFF; border-radius: 0px 5px 5px 0px; padding: 5px 10px; font-size: 0.8rem; display: inline; box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`;
var fixStyle = `color: #FFF; background-color: #007075; border-radius: 0px 5px 5px 0px; padding: 5px 10px; font-size: 0.8rem; display: inline; box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`;
var codeSnippetStyle = `color: #FFF; background-color: #333; border-radius: 5px; padding: 5px 10px; font-size: 0.8rem; display: inline; box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`;
var separatorStyle = `color: #FFF; background-color: #293543; font-weight: bolder; border-radius: 5px; padding: 5px 10px; font-size: 1rem; display: inline;`;

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