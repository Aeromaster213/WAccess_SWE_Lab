setTimeout(() => {
    Keyboard()
}, 10000);

function Keyboard() {
    $.fn.log = function () {
        console.log.apply(console, this);
        return this;
    };
    var allTags = document.querySelectorAll('*')
    for (var d = 0; d < allTags.length; d++) {
        if (allTags[d].getAttribute("onmouseout") != null && allTags[d].getAttribute("onmouseout") != undefined && allTags[d].getAttribute("onmouseout") != "") {

            if (allTags[d].getAttribute("onblur") == null || allTags[d].getAttribute("onblur") == undefined) {
                console.log("%cRule:%cWCAG 2.1.1 (2.0,A)",
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
                console.log("%cError:%cElement is keyboard inaccessible. Element's onmouseout is missing onblur function",
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
                $(allTags[d]).log()
                console.log("%cFix:%cElement's onblur function has to be added and it should functionally work the same way as onmouseout handler",
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
            } else if (allTags[d].getAttribute("onblur") == "") {
                console.log("%cRule:%cWCAG 2.1.1 (2.0,A)",
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
                console.log("%cError:%cElement is keyboard inaccessible. Element's onmouseout with undefined onblur function",
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
                $(allTags[d]).log()
                console.log("%cFix:%cElement's onblur function has to be defined and it should functionally work the same way as onmouseout handler",
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
        }
        if (allTags[d].getAttribute("onmouseover") != null && allTags[d].getAttribute("onmouseover") != undefined && allTags[d].getAttribute("onmouseover") != "") {
            if (allTags[d].getAttribute("onfocus") == null || allTags[d].getAttribute("onfocus") == undefined) {
                console.log("%cRule:%cWCAG 2.1.1 (2.0,A)",
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
                console.log("%cError:%cElement is keyboard inaccessible. Element has onmouseover defined but onfocus function is missing",
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
                $(allTags[d]).log()
                console.log("%cFix:%cElement's onfocus function has to be added and it should functionally work the same way as onmouseover handler",
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
            } else if (allTags[d].getAttribute("onfocus") == "") {
                console.log("%cRule:%cWCAG 2.1.1 (2.0,A)",
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
                console.log("%cError:%cElement is keyboard inaccessible. Element has onmouseover defined but onfocus function is missing",
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
                $(allTags[d]).log()
                console.log("%cFix:%cElement's onfocus function has to be added and it should functionally work the same way as onmouseover handler",
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
        }
        if (allTags[d].nodeName == "SCRIPT") {
            console.log("%cRule:%cWCAG 2.1.1 (2.0,A)",
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
            console.log("%cWarning:%cThe script element might be keyboard accessible",
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
            $(allTags[d]).log()
            console.log("%cFix:%cTry to make sure if script element is accessible via keyboard or avoid using script element.",
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
    }

}
