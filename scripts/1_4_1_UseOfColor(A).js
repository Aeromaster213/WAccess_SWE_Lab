setTimeout(() => {
    UseOfColor()
}, 6000);

function UseOfColor() {

    let errors = 0;
    let fixed = 0;

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
            window.warningMessage("WCAG 1.4.1 (2.0,A)", "Image might be using color alone", "Set the text relating to the image in a way that text refers to the image not by color alone", imgTags[index]);
            
            // Check if the image tag has an 'alt' attribute  if not add missing 

            // The suggested fix implies that when adding an alt attribute, it's crucial to describe the image content accurately and comprehensively, avoiding descriptions that rely solely on color. Instead, the alternative text should convey the essential information or purpose of the image, ensuring that users with disabilities can understand the content conveyed by the image, even if they can't see it.
            if (!imgTags[index].hasAttribute('alt')) {
                imgTags[index].setAttribute('alt', 'Image');
                console.log("%cFix Applied: %cAdded 'alt' attribute to image tag", window.ruleStyle, window.fixStyle);


            }
        }
    }

    chrome.runtime.sendMessage({ type: "results", script: "1_4_1_UseOfColor(A)", data: { errors, fixed } });
}
