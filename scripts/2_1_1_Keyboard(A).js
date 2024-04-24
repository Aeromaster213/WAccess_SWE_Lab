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
                window.errorMessage("WCAG 2.1.1 (2.0,A)", "Element is keyboard inaccessible. Element's onmouseout is missing onblur function", "Element's onblur function has to be added and it should functionally work the same way as onmouseout handler", allTags[d]);
                
            } else if (allTags[d].getAttribute("onblur") == "") {
                window.errorMessage("WCAG 2.1.1 (2.0,A)", "Element is keyboard inaccessible. Element's onmouseout with undefined onblur function", "Element's onblur function has to be defined and it should functionally work the same way as onmouseout handler", allTags[d]);

            }
        }
        if (allTags[d].getAttribute("onmouseover") != null && allTags[d].getAttribute("onmouseover") != undefined && allTags[d].getAttribute("onmouseover") != "") {
            if (allTags[d].getAttribute("onfocus") == null || allTags[d].getAttribute("onfocus") == undefined) {
                window.errorMessage("WCAG 2.1.1 (2.0,A)", "Element is keyboard inaccessible. Element has onmouseover defined but onfocus function is missing", "Element's onfocus function has to be added and it should functionally work the same way as onmouseover handler", allTags[d]);
                
            } else if (allTags[d].getAttribute("onfocus") == "") {
                window.errorMessage("WCAG 2.1.1 (2.0,A)", "Element is keyboard inaccessible. Element has onmouseover defined but onfocus function is empty", "Element's onfocus function has to be defined and it should functionally work the same way as onmouseover handler", allTags[d]);
                
            }
        }
        if (allTags[d].nodeName == "SCRIPT") {
                window.warningMessage("WCAG 2.1.1 (2.0,A)", "The script element might be keyboard accessible", "Try to make sure if script element is accessible via keyboard or avoid using script element.", allTags[d]);
        }
    }

}
