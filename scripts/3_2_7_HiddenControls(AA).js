// The controls should be either visible or persistent onhover 

setTimeout(() => {
    HiddenControls()
}, 19000);

function HiddenControls() {
    let errors = 0;
    let fixed = 0;
    $.fn.log = function () {
        console.log.apply(console, this);
        return this;
    };
    var allTags = document.querySelectorAll("*")
    for (var k = 0; k < allTags.length; k++) {
        var element = allTags[k]
        var rect = $(element).position();
        var rectOnChange
        if (element.hidden == true || element.style.visibility == "hidden" || element.style.display == "none") {
            rectOnChange = $(element).focus().position();
            if (parseInt(rect.top) != parseInt(rectOnChange.top) || parseInt(rect.left) != parseInt(rectOnChange.left)) {
                errors++;
                window.errorMessage("WCAG 3.2.7 (2.2,AA)", "Found the hidden Element on focus non-persistent", "Make the hidden element on focus persistent - position should not be changed", element);

                // Fix: Make the hidden element on focus persistent
                element.style.display = "block";
                fixed++;

                
            }
            rectOnChange = $(element).hover().position();
            if (parseInt(rect.top) != parseInt(rectOnChange.top) || parseInt(rect.left) != parseInt(rectOnChange.left)) {
                errors++;
                window.errorMessage("WCAG 3.2.7 (2.2,AA)", "Found the hidden Element on hover non-persistent", "Make the hidden element on focus persistent - position should not be changed", element);

                // Fix: Make the hidden element on hover persistent
                element.style.display = "block";
                fixed++;

                
            }
            rectOnChange = $(element).mouseover().position();
            if (parseInt(rect.top) != parseInt(rectOnChange.top) || parseInt(rect.left) != parseInt(rectOnChange.left)) {
                errors++;
                window.errorMessage("WCAG 3.2.7 (2.2,AA)", "Found the hidden Element on mouseover non-persistent", "Make the hidden element on mouseover persistent - position should not be changed", element);

                // Fix: Make the hidden element on mouseover persistent
                element.style.display = "block";
                fixed++;
            }
            rectOnChange = $(element).mouseup().position();
            if (parseInt(rect.top) != parseInt(rectOnChange.top) || parseInt(rect.left) != parseInt(rectOnChange.left)) {
                errors++;
                window.errorMessage("WCAG 3.2.7 (2.2,AA)", "Found the hidden Element on mouseup non-persistent", "Make the hidden element on mouseup persistent - position should not be changed", element);

                // Fix: Make the hidden element on mouseup persistent
                element.style.display = "block";
                fixed++;

                
            }
            rectOnChange = $(element).mousemove().position();
            if (parseInt(rect.top) != parseInt(rectOnChange.top) || parseInt(rect.left) != parseInt(rectOnChange.left)) {
                errors++;
                window.errorMessage("WCAG 3.2.7 (2.2,AA)", "Found the hidden Element on mousemove non-persistent", "Make the hidden element on mousemove persistent - position should not be changed", element);

                // Fix: Make the hidden element on mousemove persistent
                element.style.display = "block";
                fixed++;

                
            }
            rectOnChange = $(element).mouseenter().position();
            if (parseInt(rect.top) != parseInt(rectOnChange.top) || parseInt(rect.left) != parseInt(rectOnChange.left)) {
                errors++;
                window.errorMessage("WCAG 3.2.7 (2.2,AA)", "Found the hidden Element on mouseenter non-persistent", "Make the hidden element on mouseenter persistent - position should not be changed", element);

                // Fix: Make the hidden element on mouseenter persistent
                element.style.display = "block";

                fixed++;
                
                
            }
        }
    }

    chrome.runtime.sendMessage({ type: "results", script: "3_2_7_HiddenControls(AA)", data: { errors, fixed } });  

}