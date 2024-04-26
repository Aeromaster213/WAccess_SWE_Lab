setTimeout(() => {
    Contrast_Minimum__1_4_3()
}, 7000);

function Contrast_Minimum__1_4_3() {
    let errors = 0;
    let fixed = 0;

    $.fn.log = function () {
        console.log.apply(console, this);
        return this;
    };
    $(document).ready(function () {
        $('*').each(function () {
            if ($(this).prop("nodeName") == "DIV" ||
                $(this).prop("nodeName") == "SPAN" ||
                $(this).prop("nodeName") == "A" ||
                $(this).prop("nodeName") == "P" ||
                $(this).prop("nodeName") == "H1" ||
                $(this).prop("nodeName") == "H2" ||
                $(this).prop("nodeName") == "H3" ||
                $(this).prop("nodeName") == "H4" ||
                $(this).prop("nodeName") == "H5" ||
                $(this).prop("nodeName") == "H6" ||
                $(this).prop("nodeName") == "INPUT" ||
                $(this).prop("nodeName") == "Q" ||
                $(this).prop("nodeName") == "BLACKQUOTE" ||
                $(this).prop("nodeName") == "CODE" ||
                $(this).prop("nodeName") == "PRE" ||
                $(this).prop("nodeName") == "OL" ||
                $(this).prop("nodeName") == "LI" ||
                $(this).prop("nodeName") == "DL" ||
                $(this).prop("nodeName") == "DT" ||
                $(this).prop("nodeName") == "DD" ||
                $(this).prop("nodeName") == "MARK" ||
                $(this).prop("nodeName") == "INS" ||
                $(this).prop("nodeName") == "DEL" ||
                $(this).prop("nodeName") == "SUP" ||
                $(this).prop("nodeName") == "SUB" ||
                $(this).prop("nodeName") == "SMALL" ||
                $(this).prop("nodeName") == "I" ||
                $(this).prop("nodeName") == "BOLD" ||
                $(this).prop("nodeName") == "B" ||
                $(this).prop("nodeName") == "FONT" ||
                $(this).prop("nodeName") == "EM" ||
                $(this).prop("nodeName") == "LEGEND" ||
                $(this).prop("nodeName") == "ABBR") {
                var textRoot = ""
                $(this).contents().filter(function () {
                    return this.nodeType == Node.TEXT_NODE && this.nodeValue.trim() != '';
                }).each(function () {
                    textRoot += $(this).text();
                });
                if ($.trim(textRoot)) {
                    var fontSize = $(this).css("font-size")
                    var fontWeight = $(this).css("font-weight")
                    var matches = fontWeight.match(/(\d+)/);
                    var fontWeightNumber = 0
                    if (matches) {
                        fontWeightNumber = parseInt(matches[0])
                    }
                    if (fontWeight == "normal" || fontWeightNumber < 700) {
                        // normal text
                        fS = parseInt(fontSize.replace("px", ""))
                        if (fS < 18) {
                            // Valid small scale text  
                            var color1 = returnColorArr($(this).css("background-color"))
                            var color2 = returnColorArr($(this).css("color"))
                            var icontrast = contrast(color1, color2)
                            if (icontrast < 4.5) {
                                errors++;
                                window.errorMessage("WCAG 1.4.3 (2.0,AA)", "Contrast ratio of the element text color and its background is lesser than 4.5", "For a standard text (which is determined as per WCAG 2.0 AA guidelines) set the color contrast ratio to atleast 4.5", $(this)[0]);

                                // Fix: Change the text color
                                $(this).css("color", "black");
                                fixed++;
                            }
                        }
                        else {
                            // Valid large scale text  
                            var e1color1 = returnColorArr($(this).css("background-color"))
                            var e1color2 = returnColorArr($(this).css("color"))
                            var e1contrast = contrast(e1color1, e1color2)
                            if (e1contrast > 3) {
                                errors++;
                                window.errorMessage("WCAG 1.4.3 (2.0,AA)", "Contrast ratio of the element text color and its background is greater than 3", "For a larger text (which is determined as per WCAG 2.0 AA guidelines) set the color contrast ratio to atmost 3", $(this)[0]);

                                // Fix: Change the text color
                                $(this).css("color", "black");
                                fixed++;
                            }
                        }
                    } else {
                        // bold text
                        e2fS = parseInt(fontSize.replace("px", ""))
                        if (e2fS < 14) {
                            // Valid small scale text  
                            var e2color1 = returnColorArr($(this).css("background-color"))
                            var e2color2 = returnColorArr($(this).css("color"))
                            var e2contrast = contrast(e2color1, e2color2)
                            if (e2contrast < 4.5) {
                                errors++;
                                window.errorMessage("WCAG 1.4.3 (2.0,AA)", "Contrast ratio of the bold element text color and its background is lesser than 4.5", "For a bold text (which is determined as per WCAG 2.0 AA guidelines) set the color contrast ratio to atleast 4.5", $(this)[0]);

                                // Fix: Change the text color
                                $(this).css("color", "black");
                                fixed++;
                            }
                        }
                        else {
                            // Valid large scale text  
                            var e3color1 = returnColorArr($(this).css("background-color"))
                            var e3color2 = returnColorArr($(this).css("color"))
                            var e3contrast = contrast(e3color1, e3color2)
                            if (e3contrast > 3) {
                                errors++;

                                window.errorMessage("WCAG 1.4.3 (2.0,AA)", "Contrast ratio of the bold element text color and its background is greater than 3", "For a larger bold text (which is determined as per WCAG 2.0 AA guidelines) set the color contrast ratio to a value lesser than 3", $(this)[0]);

                                // Fix: Change the text color
                                $(this).css("color", "black");
                                fixed++;
                            }
                        }
                    }
                }


            }
        })
    })

    chrome.runtime.sendMessage({ type: "results", script: "1_4_3_Contrast(Minimum)(AA).js", data: { errors, fixed } });

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