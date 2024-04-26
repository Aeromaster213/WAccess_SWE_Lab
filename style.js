// styles.js
window.ruleStyle = `color: #FFF; background-color: #333; border-radius: 5px 0px 0px 5px; padding: 5px 10px; font-size: 0.8rem; display: inline; box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`;
window.errorStyle = `color: #FFF; background-color: #EB5177; border-radius: 0px 5px 5px 0px; padding: 5px 10px; font-size: 0.8rem; display: inline; box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`;
window.infoStyle = `color: #FFF; background-color: #809FFF; border-radius: 0px 5px 5px 0px; padding: 5px 10px; font-size: 0.8rem; display: inline; box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`;
window.fixStyle = `color: #FFF; background-color: #007075; border-radius: 0px 5px 5px 0px; padding: 5px 10px; font-size: 0.8rem; display: inline; box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`;
window.codeSnippetStyle = `color: #FFF; background-color: #333; border-radius: 5px; padding: 5px 10px; font-size: 0.8rem; display: inline; box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`;
window.separatorStyle = `color: #FFF; background-color: #293543; font-weight: bolder; border-radius: 5px; padding: 5px 10px; font-size: 1rem; display: inline;`;
window.warningStyle = `color: #FFF; background-color: #F6976E; border-radius: 0px 5px 5px 0px; padding: 5px 10px; font-size: 0.8rem; display: inline; box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`;
window.suggestionStyle = `color: #FFF; background-color: #FFA500; border-radius: 0px 5px 5px 0px; padding: 5px 10px; font-size: 0.8rem; display: inline; box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`;

window.errorMessage = function(rule, message, fixMessage, element) {
    console.log(`%cRule:%c${rule}`, window.ruleStyle, window.infoStyle);
    console.log(`%cError:%c${message}`, window.ruleStyle, window.errorStyle);
    console.log(`%cCode Snippet:`, window.codeSnippetStyle);
    console.log(element.outerHTML);
    console.log(`%cFix:%c${fixMessage}`, window.ruleStyle, window.fixStyle);
    console.log(`%c-----------------------------------------------------------------------------`, window.separatorStyle);
};

window.warningMessage = function(rule, message, fixMessage, element) {
    console.log(`%cRule:%c${rule}`, window.ruleStyle, window.infoStyle);
    console.log(`%cWarning:%c${message}`, window.ruleStyle, window.warningStyle);
    console.log(`%cCode Snippet:`, window.codeSnippetStyle);
    console.log(element.outerHTML);
    console.log(`%cFix:%c${fixMessage}`, window.ruleStyle, window.fixStyle);
    console.log(`%c-----------------------------------------------------------------------------`, window.separatorStyle);
};
