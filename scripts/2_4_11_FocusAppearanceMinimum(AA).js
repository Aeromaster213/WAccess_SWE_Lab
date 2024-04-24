function FocusAppearanceMinimum() {
    $.fn.log = function () {
        console.log.apply(console, this);
        return this;
    };
    $(document).ready(function () {
        $('*').each(function () {
            if ($(this).prop("tagName") != "HTML" &&
                $(this).prop("tagName") != "BODY" &&
                $(this).prop("tagName") != "LINK" &&
                $(this).prop("tagName") != "SCRIPT" &&
                $(this).prop("tagName") != "STYLE" &&
                $(this).prop("tagName") != "XML" &&
                $(this).prop("tagName") != "HEAD" &&
                $(this).prop("tagName") != "TITLE" &&
                $(this).prop("tagName") != "NOSCRIPT" &&
                $(this).prop("tagName") != "META") {
                var continueLoop = false
                if ($(this).prop("tagName") == "BUTTON" || $(this).prop("tagName") == "INPUT") {
                    if ($(this).prop("disabled")) {
                        continueLoop = true
                    }
                }
                if (!continueLoop) {
                    // Checking the background contrast
                    var backgroundOnFocus = $(this).focus().css("background-color")
                    var background = $(this).css("background-color")
                    var bgArr = returnColorArr(background)
                    var bgArrOnFocus = returnColorArr(backgroundOnFocus)
                    var contrastGainedBg = contrast(bgArrOnFocus, bgArr)
                    if (contrastGainedBg < 3) {
                        console.log("%cRule:%cWCAG 2.4.11 (2.2,AA)",
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
                        console.log("%cError:%cThe contrast ratio is less than 3:1 for colors in focused and unfocused states",
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
                        $(this).log()
                        console.log("%cFix:%cIncrease the contrast ratio to atleast 3:1 between colors in focused and unfocused states",
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

                    // Checking if outline on focus has 2px thickness, solid color, color contrasting with the background with a ratio more than 3
                    var thicknesspx = $(this).focus().css("outline-width")
                    if (thicknesspx == null || thicknesspx == "" || thicknesspx == undefined) {
                        console.log("%cRule:%cWCAG 2.4.11 (2.2,AA)",
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
                    console.log("%cError:%cElement's outline-width onfocus found null or empty or undefined",
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
                    $(this).log()
                    console.log("%cFix:%cSet the outline-width property of the element to alteast 2px onfocus",
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
                    else {
                        var thickness = parseInt(thicknesspx.split("px")[0])
                        if (thickness >= 2) {
                            var outlineStyle = $(this).focus().css("outline-style")
                            if (outlineStyle == "solid") {
                                var focusColor = $(this).focus().css("outline-color")
                                var nonfocusColor = $(this).parent().css("background-color")
                                var nonfocusArr = []
                                var focusArr = []
                                nonfocusArr = returnColorArr(nonfocusColor)
                                focusArr = returnColorArr(focusColor)

                                console.log(focusArr, nonfocusArr)
                                var contrastGained = contrast(focusArr, nonfocusArr)
                                if (contrastGained < 3) {
                                    console.log("%cRule:%cWCAG 2.4.11 (2.2,AA)",
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
                                console.log("%cError:%cThe contrast ratio is less than 3:1 for colors in focused and unfocused states",
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
                                $(this).log()
                                console.log("%cFix:%cIncrease the contrast ratio to atleast 3:1 between colors in focused and unfocused states",
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
                            else {
                                console.log("%cRule:%cWCAG 2.4.11 (2.2,AA)",
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
                            console.log("%cError:%cOutline-style of the element on focus is not solid",
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
                            $(this).log()
                            console.log("%cFix:%cSet the outline-style property of the element onfocus to 'solid'",
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
                        } else {
                            console.log("%cRule:%cWCAG 2.4.11 (2.2,AA)",
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
                        console.log("%cError:%cShape of the contrasting area is thinner than 2 pixels",
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
                        $(this).log()
                        console.log("%cFix:%cIncrease the shape of the contrasting area to a minimum of 2 pixels",
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

                // var outW1 = $(this).css("outlineWidth")
                // outW1 = parseInt(outW1.toString().split("px")[0])
                // var outW2 = $(this).focus().css("outlineWidth")
                // outW2 = parseInt(outW2.toString().split("px")[0])

                // var clientPerimeter = 2 * (this.clientHeight + this.clientWidth)
                // var offsetPerimeter = 2 * (this.offsetWidth + this.offsetHeight)
                // var color1 = $(this).focus().css("outline-color")
                // var color2 = $(this).css("outline-color")
                // var color3 = $(this).css("backgroundColor")
                // color1 = color1.toString().split(")")[0].split("(")[1].split(",")
                // color2 = color2.toString().split(")")[0].split("(")[1].split(",")
                // color3 = color3.toString().split(")")[0].split("(")[1].split(",")
                // var contrast1 = contrast(color1, color2)
                // var contrast2 = contrast(color1, color3)
                // var contrastGained = contrast1
                // if (contrastGained < contrast2) {
                //     contrastGained = contrast2
                // }
                // if (contrastGained < 3) {
                //     console.log("-----------------------------------------")
                //     console.log("Rule: WCAG 2.4.11 (2.2,AA)")
                //     console.log("Error: The contrast ratio is less than 3:1 for colors in focused and unfocused states")
                //     console.log("Code Snippet: ", $(this))
                //     console.log("Fix: Increase the contrast ratio to atleast 3:1 between colors in focused and unfocused states")
                // } else {
                //     if (offsetPerimeter * outW2 < clientPerimeter) {

                //         console.log("-----------------------------------------")
                //         console.log("Rule: WCAG 2.4.11 (2.2,AA)")
                //         console.log("Error: Minimum contrasting area is lesser than the area of a 1 CSS pixel thick perimeter of the unfocused component")
                //         console.log("Code Snippet: ", $(this))
                //         console.log("Fix: Increase the minimum contrasting area to atleast the area of a 1 CSS pixel thick perimeter of the unfocused component")

                //     } else {
                //         if (outW2 < 2) {
                //             console.log("-----------------------------------------")
                //             console.log("Rule: WCAG 2.4.11 (2.2,AA)")
                //             console.log("Error: Shape of the contrasting area is thinner than 2 pixels")
                //             console.log("Code Snippet: ", $(this))
                //             console.log("Fix: Increase the shape of the contrasting area to a minimum of 2 pixels")

                //         } else {
                //             if (this.clientWidth < this.clientHeight) {
                //                 if (outW2 * offsetPerimeter < (4 * this.clientWidth)) {

                //                     console.log("-----------------------------------------")
                //                     console.log("Rule: WCAG 2.4.11 (2.2,AA)")
                //                     console.log("Error: Focus area is lesser than the area of a 4 CSS pixel thick line along the shortest side of a minimum bounding box of the unfocused component")
                //                     console.log("Code Snippet: ", $(this))
                //                     console.log("Fix: Increase the focus area to alteast the area of a 4 CSS pixel thick line along the shortest side of a minimum bounding box of the unfocused component")

                //                 }
                //             } else {
                //                 if (outW2 * offsetPerimeter < (4 * this.clientHeight)) {
                //                     console.log("-----------------------------------------")
                //                     console.log("Rule: WCAG 2.4.11 (2.2,AA)")
                //                     console.log("Error: Focus area is lesser than the area of a 4 CSS pixel thick line along the shortest side of a minimum bounding box of the unfocused component")
                //                     console.log("Code Snippet: ", $(this))
                //                     console.log("Fix: Increase the focus area to alteast the area of a 4 CSS pixel thick line along the shortest side of a minimum bounding box of the unfocused component")

                //                 }
                //             }
                //         }
                //     }
                // }
            }
        })
    })

}

function luminance(r, g, b) {
    var a = [r, g, b].map(function (v) {
        v /= 255;
        return v <= 0.03928
            ? v / 12.92
            : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}
function contrast(rgb1, rgb2) {
    var lum1 = luminance(parseInt(rgb1[0]), parseInt(rgb1[1]), parseInt(rgb1[2]));
    var lum2 = luminance(parseInt(rgb2[0]), parseInt(rgb2[1]), parseInt(rgb2[2]));
    var brightest = Math.max(lum1, lum2);
    var darkest = Math.min(lum1, lum2);
    return (brightest + 0.05)
        / (darkest + 0.05);
}

function returnColorArr(color) {
    var returnArr = []
    if (color.includes("rgba")) {
        Arr = color.toString().split(")")[0].split("(")[1].split(",")
        var alpha, red, green, blue;
        red = parseInt(Arr[0])
        green = parseInt(Arr[1])
        blue = parseInt(Arr[2])
        alpha = parseInt(Arr[3])
        returnArr.push(Math.round((1 - alpha) * 255 + (alpha * red)))
        returnArr.push(Math.round((1 - alpha) * 255 + (alpha * green)))
        returnArr.push(Math.round((1 - alpha) * 255 + (alpha * blue)))
    } else {
        returnArr = color.toString().split(")")[0].split("(")[1].split(",")
    }
    return returnArr
}
setTimeout(() => {
    FocusAppearanceMinimum()
}, 14000);
