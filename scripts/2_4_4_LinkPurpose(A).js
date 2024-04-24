setTimeout(() => {
    LinkPurpose()
}, 12000);

function LinkPurpose() {
    $.fn.log = function () {
        console.log.apply(console, this);
        return this;
    };
    var anchorTags = document.querySelectorAll('a')
    for (var d = 0; d < anchorTags.length; d++) {
        if (anchorTags[d].innerText != null && anchorTags[d].innerText != "") {
            console.log("%cRule:%cWCAG 2.4.4 (2.0,A)",
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
            console.log("%cWarning:%cText in the anchor element might not be meaningful",
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
            $(anchorTags[d]).log()
            console.log("%cFix:%cProvide meaningful text inside the anchor element",
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
        if (anchorTags[d].href != null && anchorTags[d].href != "") {
            if (anchorTags[d].innerText == null || anchorTags[d].innerText == "") {
                console.log("%cRule:%cWCAG 2.4.4 (2.0,A)",
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
                console.log("%cError:%cThe anchor element with defined href is missing inner text which should describe the link",
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
                $(anchorTags[d]).log()
                console.log("%cFix:%cInner text has to be added. If an image is being enclosed in the anchor then you can instead add alt text to the inner image",
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
            if (anchorTags[d].innerText.toLowerCase() == "more" || anchorTags[d].innerText.toLowerCase() == "click here ") {
                console.log("%cRule:%cWCAG 2.4.4 (2.0,A)",
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
                console.log("%cWarning:%cFound suspicious link text in the anchor element",
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
                $(anchorTags[d]).log()
                console.log("%cFix:%cWrite clearer information in inside the anchor element and do not use suspicious texts like more, click here",
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
            if (anchorTags[d].getAttribute("aria-label") == null || anchorTags[d].getAttribute("aria-label") == "") {
                console.log("%cRule:%cWCAG 2.4.4 (2.0,A)",
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
                console.log("%cError:%cThe anchor element with defined href is missing Aria-label",
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
                $(anchorTags[d]).log()
                console.log("%cFix:%cAria-label has to be defined",
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
            if (anchorTags[d].title == null || anchorTags[d].title == "") {
                console.log("%cRule:%cWCAG 2.4.4 (2.0,A)",
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
                console.log("%cError:%cThe anchor element with defined href is missing title",
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
                $(anchorTags[d]).log()
                console.log("%cFix:%cTitle has to be added which clarifies the purpose of the link",
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

            var areaTags = document.querySelectorAll("area")
            for (let index = 0; index < areaTags.length; index++) {
                if (areaTags[index].parentNode.nodeName == "MAP") {
                    var imgParentTags = document.querySelectorAll('img')
                    for (let iter = 0; iter < imgParentTags.length; iter++) {
                        var useMapName = "#" + areaTags[index].parentNode.name
                        if (useMapName == imgParentTags[iter].useMap) {
                            if (areaTags[index].alt == null || areaTags.alt == "") {
                                console.log("%cRule:%cWCAG 2.4.4 (2.0,A)",
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
                                console.log("%cError:%cAlt text for the client-side <area> element of an image map is missing alt text",
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
                                $(areaTags[a]).log()
                                console.log("%cFix:%cSpecify a short text alternative with the alt attribute for every client-side <area> element of an image map",
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
                }
            }
        }
    }
}