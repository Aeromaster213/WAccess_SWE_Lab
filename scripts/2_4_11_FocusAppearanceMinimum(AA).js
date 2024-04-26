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
                        window.errorMessage("WCAG 2.4.11 (2.2,AA)", "The contrast ratio is less than 3:1 for colors in focused and unfocused states", "Increase the contrast ratio to atleast 3:1 between colors in focused and unfocused states", $(this));

                        // Fix: Change the background color
                        $(this).focus().css("background-color", "white");
                        
                    }

                    // Checking if outline on focus has 2px thickness, solid color, color contrasting with the background with a ratio more than 3
                    var thicknesspx = $(this).focus().css("outline-width")
                    if (thicknesspx == null || thicknesspx == "" || thicknesspx == undefined) {
                        window.errorMessage("WCAG 2.4.11 (2.2,AA)", "Element's outline-width onfocus found null or empty or undefined", "Set the outline-width property of the element to alteast 2px onfocus", $(this));

                        // Fix: Add outline-width property
                        $(this).focus().css("outline-width", "2px");
                        
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
                                    window.errorMessage("WCAG 2.4.11 (2.2,AA)", "The contrast ratio is less than 3:1 for colors in focused and unfocused states", "Increase the contrast ratio to atleast 3:1 between colors in focused and unfocused states", $(this));

                                    // Fix: Change the outline color
                                    $(this).focus().css("outline-color", "black");
                                                                    }
                            }
                            else {
                                window.errorMessage("WCAG 2.4.11 (2.2,AA)", "Outline-style of the element on focus is not solid", "Set the outline-style property of the element onfocus to 'solid'", $(this));

                                // Fix: Change the outline style
                                $(this).focus().css("outline-style", "solid");
                                
                            }
                        } else {
                            window.errorMessage("WCAG 2.4.11 (2.2,AA)", "Outline-width of the element on focus is lesser than 2px", "Set the outline-width property of the element to alteast 2px onfocus", $(this));

                            // Fix: Change the outline width
                            $(this).focus().css("outline-width", "2px");
                            
                        }
                    }



                }

                
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
