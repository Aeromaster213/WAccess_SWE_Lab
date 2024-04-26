setTimeout(() => {
    NonTextContent_1_1_1();
}, 1000);

function NonTextContent_1_1_1() {
    $.fn.log = function () {
        console.log.apply(console, this);
        return this;
    };
    var videoTags = document.querySelectorAll("video")
    for (let index = 0; index < videoTags.length; index++) {
        if (videoTags.getAttribute("aria-label") == "" || videoTags.getAttribute("aria-label") == null) {
            window.errorMessage("WCAG 1.1.1 (2.0,A)", "Non-text content Video-only should have descriptive label", "Specify a descriptive label that denotes as the title of the video using `aria-label` attribute for the video tag", videoTags[index]);

            // Fix: Add aria-label attribute
            videoTags[index].setAttribute('aria-label', ' ');
        }
    }
    var audioTags = document.querySelectorAll("audio")
    for (let index = 0; index < audioTags.length; index++) {
        if (audioTags.getAttribute("aria-label") == "" || audioTags.getAttribute("aria-label") == null) {
            window.errorMessage("WCAG 1.1.1 (2.0,A)", "Non-text content Audio-only should have descriptive label", "Specify a descriptive label that denotes as the title of the audio using `aria-label` attribute for the audio tag", audioTags[index]);

            // Fix: Add aria-label attribute
            audioTags[index].setAttribute('aria-label', ' ');
        }
    }
    var trackTags = document.querySelectorAll("track")
    for (let index = 0; index < trackTags.length; index++) {
        if (trackTags.parentNode.nodeName == "VIDEO") {
            if (trackTags.getAttribute("kind") == "subtitles") {
                if (trackTags.getAttribute("label") == "" || trackTags.getAttribute("label") == null) {
                    window.errorMessage("WCAG 1.1.1 (2.0,A)", "Non-text content - audio/video descriptive track must have a descriptive label", "Specify a descriptive label that denotes some information of the track using `label` attribute for the track tag", trackTags[index]);

                    // Fix: Add label attribute
                    trackTags[index].setAttribute('label', ' ');
                    
                }
            }
        }
    }
    var sourceTags = document.querySelectorAll("source")
    for (let index = 0; index < sourceTags.length; index++) {
        if (sourceTags.parentNode.nodeName == "VIDEO") {
            if (sourceTags.getAttribute("kind") == "subtitles") {
                if (sourceTags.getAttribute("label") == "" || sourceTags.getAttribute("label") == null) {
                    window.errorMessage("WCAG 1.1.1 (2.0,A)", "Non-text content - audio descriptive source must have a descriptive label", "Specify a descriptive label that denotes some information of the source using `label` attribute for the source tag", sourceTags[index]);

                    // Fix: Add label attribute
                    sourceTags[index].setAttribute('label', ' ');
                    
                }
            }
        }

    }
    var inpTags = document.querySelectorAll("input")
    for (let index = 0; index < inpTags.length; index++) {
        if (inpTags[index].type == "image" && inpTags[index].parentNode.nodeName == "FORM") {
            if (inpTags[index].alt != null && inpTags[index].alt != "") {
                window.errorMessage("WCAG 1.1.1 (2.0,A)", "Form input element of type `image` is missing alt text", "Specify a short text alternative with the alt attribute for every input `type=image` inside a form", inpTags[index]);

                // Fix: Add alt attribute
                inpTags[index].setAttribute('alt', ' ');
                
            }
        }
    }
    var areaTags = document.querySelectorAll("area")
    for (let index = 0; index < areaTags.length; index++) {
        if (areaTags[index].parentNode.nodeName == "MAP") {
            var imgParentTags = document.querySelectorAll('img')
            for (let iter = 0; iter < imgParentTags.length; iter++) {
                var useMapName = "#" + areaTags[index].parentNode.name
                if (useMapName == imgParentTags[iter].useMap) {
                    if (areaTags[index].alt == null || areaTags.alt == "") {
                        window.errorMessage("WCAG 1.1.1 (2.0,A)", "Alt text for the client-side <area> element of an image map is missing alt text", "Specify a short text alternative with the alt attribute for every client-side <area> element of an image map", areaTags[index]);

                        // Fix: Add alt attribute
                        areaTags[index].setAttribute('alt', ' ');
                    }
                    if (imgParentTags[index].alt == null || imgParentTags.alt == "") {
                        window.errorMessage("WCAG 1.1.1 (2.0,A)", "Alt text for the client-side <img> element of an image map is missing alt text", "Specify a short text alternative with the alt attribute for every client-side <img> element of an image map", imgParentTags[index]);

                        // Fix: Add alt attribute
                        imgParentTags[index].setAttribute('alt', ' ');
                    }
                }
            }
        }
    }

    var imgTags = document.querySelectorAll('img')
    for (var a = 0; a < imgTags.length; a++) {
        if (imgTags[a].src == null || imgTags[a].src == undefined || imgTags[a].src == "") {
            window.errorMessage("WCAG 1.1.1 (2.0,A)", "Image Source is missing.", "Add src='<source>", imgTags[a]);

            // Fix: Add src attribute
            imgTags[a].setAttribute('src', ' ');

        }
        var par = imgTags[a].parentNode.nodeName
        if (par != null) {
            if (imgTags[a].parentNode.textContent == "" || imgTags[a].parentNode.textContent == null) {
                if (imgTags[a].alt != null && imgTags[a].alt != "") {
                    // no violation
                    if (imgTags[a].role == "presentation") {
                        window.errorMessage("WCAG 1.1.1 (2.0,A)", "Decorative image is enclosed in a parent node and alt text is present", "For a decorative image, do not specify a short text alternative with the alt attribute", imgTags[a]);
                        
                        // Fix: Remove the alt attribute
                        imgTags[a].removeAttribute('alt');
                    }
                } else {
                    if (imgTags[a].role != "presentation") {
                        window.errorMessage("WCAG 1.1.1 (2.0,A)", "The image is enclosed in a parent node and alt text is either null or empty", "When using the img element, specify a short text alternative with the alt attribute", imgTags[a]);

                        // Fix: Add alt attribute
                        imgTags[a].setAttribute('alt', ' ');
                    }

                }
            }
        }
        if (imgTags[a].alt == "" || imgTags[a].alt == null) {
            if (imgTags[a].title != "" && imgTags[a].title != null) {
                if (imgTags[a].role == "presentation") {
                    window.errorMessage("WCAG 1.1.1 (2.0,A)", "The image element seems to be a decorative one and it has a title attribute", "In case of a decorative image the title attribute should either be empty or null", imgTags[a]);

                    // Fix: Remove the title attribute
                    imgTags[a].removeAttribute('title');
                } else {
                    window.warningMessage("WCAG 1.1.1 (2.0,A)", "The image element might be a decorative and it has a title attribute", "In case of a decorative image the title attribute should either be empty or null", imgTags[a]);
                }
            }
        }
        if (imgTags[a].role != "presentation") {
            window.errorMessage("WCAG 1.1.1 (2.0,A)", "The image element is missing the alt attribute", "Add an alt attribute. If the image is for decorative purposes, define `role=presentation`", imgTags[a]);

            // Fix: Add alt attribute
            imgTags[a].setAttribute('alt', ' ');
        }
        if (imgTags[a].alt.split(" ").length <= 2) {
            if (imgTags[a].title != "" && imgTags[a].title != null) {
                if (imgTags[a].role == "presentation") {
                    window.errorMessage("WCAG 1.1.1 (2.0,A)", "The image element seems to be a decorative one and title attribute was found", "Remove the title attribute or make title empty for a decorative image", imgTags[a]);

                    // Fix: Remove the title attribute
                    imgTags[a].removeAttribute('title');
                }
            }
            window.warningMessage("WCAG 1.1.1 (2.0,A)", "The image element might be decorative and a non-empty alt text was found", "Remove the alt attribute or make alt text empty for a decorative image", imgTags[a]);

            // Fix: Remove the alt attribute
            imgTags[a].removeAttribute('alt');
        }
        else {
            window.warningMessage("WCAG 1.1.1 (2.0,A)", "The image element might be decorative and a non-empty alt text was found", "Remove the alt attribute or make alt text empty for a decorative image", imgTags[a]);

            // Fix: Remove the alt attribute
            imgTags[a].removeAttribute('alt');

        }
    }
}
