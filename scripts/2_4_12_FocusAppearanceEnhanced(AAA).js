
setTimeout(() => {
    FocusAppearanceEnhanced()
}, 15000);

function FocusAppearanceEnhanced() {
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
                var outW1 = $(this).css("outlineWidth")
                outW1 = parseInt(outW1.toString().split("px")[0])
                var outW2 = $(this).focus().css("outlineWidth")
                outW2 = parseInt(outW1.toString().split("px")[0])

                var clientPerimeter = 2 * 2 * (this.clientHeight + this.clientWidth)
                var offsetPerimeter = 2 * (this.offsetWidth + this.offsetHeight)
                offsetPerimeter = offsetPerimeter * outW2

                var color1 = $(this).focus().css("outline-color")
                var color2 = $(this).css("outline-color")
                var color3 = $(this).css("backgroundColor")
                color1 = color1.toString().split(")")[0].split("(")[1].split(",")
                color2 = color2.toString().split(")")[0].split("(")[1].split(",")
                color3 = color3.toString().split(")")[0].split("(")[1].split(",")
                var contrast1 = contrast(color1, color2)
                var contrast2 = contrast(color1, color3)
                var contrastGained = contrast1
                if (contrastGained < contrast2) {
                    contrastGained = contrast2
                }
                if (contrastGained < 4.5) {
                    console.log("%cRule:%cWCAG 2.4.12 (2.2,AAA)",
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
                console.log("%cError:%cContrast ratio between colors in focused and unfocused states is less than 4.5",
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
                console.log("%cFix:%cIncrease contrast ratio atleast to 4.5:1 between colors in focused and unfocused states",
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
                if (offsetPerimeter < clientPerimeter) {
                    console.log("%cRule:%cWCAG 2.4.12 (2.2,AAA)",
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
                console.log("%cError:%cThe focus indication area should be greater than or equal to a 2 CSS pixel solid border around the control",
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
                console.log("%cFix:%cIncrease the focus indication area around the control to atleast a 2 CSS pixel border",
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

