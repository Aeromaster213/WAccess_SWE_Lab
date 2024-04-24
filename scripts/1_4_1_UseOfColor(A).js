setTimeout(() => {
    UseOfColor()
}, 6000);

function UseOfColor() {
    // var checkIf = false
    // if (document.body.style.color != null || document.body.style.color != "") {
    //     if (document.body.style.backgroundColor != null || document.body.style.backgroundColor != "") {
    //         checkIf = true
    //     }
    // }
    // if (!checkIf) {
    //     console.log("-----------------------------------------")
    //     console.log("Rule: WCAG 1.4.1 (2.0,A)")
    //     console.log("Error: Either color or background color of the body tag is empty/null")
    //     console.log("Code Snippet: ", document.body.outerHTML)
    //     console.log("Fix: Both the above attributes have to be either set or unset")
    // }
    $.fn.log = function () {
        console.log.apply(console, this);
        return this;
    };
    var imgTags = document.getElementsByTagName("img");
    for (let index = 0; index < imgTags.length; index++) {
        var warningT = false;
        if (parseInt(imgTags[index].naturalWidth) > 100 && parseInt(imgTags[index].naturalHeight) > 100) {
            warningT = true;
        } else {
            var imgStyle = window.getComputedStyle(imgTags[index]);
            var width = parseInt(imgStyle.getPropertyValue("width").replace("px", ""));
            var height = parseInt(imgStyle.getPropertyValue("height").replace("px", ""));

            if (width > 100 && height > 100) {
                warningT = true;
            }
        }

        if (warningT) {
            console.log("%cRule:%cWCAG 1.4.1 (2.0,A)",
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
            console.log("%cWarning:%cImage might be using color alone",
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
            $(imgTags[index]).log()
            console.log("%cFix:%cSet the text relating to the image in a way that text refers to the image not by color alone",
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

            // Check if the image tag has an 'alt' attribute  if not add missing 

            // The suggested fix implies that when adding an alt attribute, it's crucial to describe the image content accurately and comprehensively, avoiding descriptions that rely solely on color. Instead, the alternative text should convey the essential information or purpose of the image, ensuring that users with disabilities can understand the content conveyed by the image, even if they can't see it.
            if (!imgTags[index].hasAttribute('alt')) {
                imgTags[index].setAttribute('alt', 'Image');
                console.log("%cFix Applied: %cAdded 'alt' attribute to image tag",
                    `color: #FFF; background-color: #333; border-radius: 5px 0px 0px 5px; padding: 5px 10px; font-size: 0.8rem; display: inline; box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
                    `color: #FFF; display: inline; font-size: 0.8rem; background-color: #007075; border-radius: 0px 5px 5px 0px; padding: 5px 10px; box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`);
            }
        }
    }
}
