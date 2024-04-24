export const ruleStyle = `color: #FFF;
                        background-color: #333;
                        border-radius: 5px 0px 0px 5px;
                        padding: 5px 10px;
                        font-size: 0.8rem;
                        display: inline;
                        box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`;

export const infoStyle = `color: #FFF;
                        display: inline;
                        font-size: 0.8rem;
                        background-color: #809FFF;
                        border-radius: 0px 5px 5px 0px;
                        padding: 5px 10px;
                        box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`;

export const errorStyle = `color: #FFF;
                        display: inline;
                        font-size: 0.8rem;
                        background-color: #EB5177;
                        border-radius: 0px 5px 5px 0px;
                        padding: 5px 10px;
                        box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`;

export const codeSnippetStyle = `color: #FFF;
                               background-color: #333;
                               border-radius: 5px;
                               padding: 5px 10px;
                               font-size: 0.8rem;
                               display: inline;
                               box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`;

export const fixStyle = `color: #FFF;
                       display: inline;
                       font-size: 0.8rem;
                       background-color: #007075;
                       border-radius: 0px 5px 5px 0px;
                       padding: 5px 10px;
                       box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`;

export const separatorStyle = `color: #FFF;
                             background-color: #293543;
                             font-weight: bolder;
                             border-radius: 5px;
                             padding: 5px 10px;
                             font-size: 1rem;
                             display: inline;`;

export const warningStyle = `color: #FFF;
                            display: inline;
                            font-size: 0.8rem;
                            background-color: #F6976E;
                            border-radius: 0px 5px 5px 0px;
                            padding: 5px 10px;
                            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`;

export function errorMessage(rule, message, fixMessage, element) {
    console.log(`%cRule:%c${rule}`, ruleStyle, infoStyle);
    console.log(`%c${message}`, ruleStyle, errorStyle);
    console.log(`%cCode Snippet:`, codeSnippetStyle);
    $(element).log();
    console.log(`%cFix:%c${fixMessage}`, ruleStyle, fixStyle);
    console.log(`%c-----------------------------------------------------------------------------`, separatorStyle);
}

export function warningMessage(rule, message, fixMessage, element) {
    console.log(`%cRule:%c${rule}`, ruleStyle, infoStyle);
    console.log(`%c${message}`, ruleStyle, errorStyle);
    console.log(`%cCode Snippet:`, codeSnippetStyle);
    $(element).log();
    console.log(`%cFix:%c${fixMessage}`, ruleStyle, fixStyle);
    console.log(`%c-----------------------------------------------------------------------------`, separatorStyle);
}