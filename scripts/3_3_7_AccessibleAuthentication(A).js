setTimeout(() => {
    AccessibleAuthentication()
}, 21000);
function AutoComplete(elementArray) {
    for (var i = 0; i < elementArray.length; i++) {
        if (elementArray[i].type == "submit" || elementArray[i].type == "hidden") {
            continue
        } else {
            if (elementArray[i].autocomplete == "off" || elementArray[i].autocomplete == "" || elementArray[i].autocomplete == null) {
                return false
            }
        }
    }
    return true
}
function AccessibleAuthentication() {
    $.fn.log = function () {
        console.log.apply(console, this);
        return this;
    };
    var inputTags = document.querySelectorAll('input')
    for (var a = 0; a < inputTags.length; a++) {
        if(!inputTags[a].disabled){
            if (inputTags[a].type == "submit") {
                if (inputTags[a].form == null) {
                    if (element.oncontextmenu == null && element.onfocus == null) {
                        window.errorMessage("WCAG 3.3.7 (2.2,A)", "Misplaced submit button", "Submit button must be enclosed inside a form", inputTags[a]);
                        
                    }
                }
                var formLength = inputTags[a].form.length
                if (formLength > 0) {
                    var submitExists = false
                    var formArray = inputTags[a].form
                    for (var k = 0; k < formArray.length; k++) {
                        if (formArray[k].type == "submit") {
                            submitExists = true
                            break
                        }
                    }
                    if (submitExists) {
                        if (AutoComplete(formArray)) {
                        } else {
                            window.errorMessage("WCAG 3.3.7 (2.2,A)", "Autocomplete for some form elements is missing/off", "Allow autocomplete feature for input elements in the form", inputTags[a]);
                            
                        }
                    }
                    else {
                        window.errorMessage("WCAG 3.3.7 (2.2,A)", "Submit button does not exist", "Add submit button in the form to enable browser store a password", inputTags[a]);
                        
                    }
                } else {
                    if (inputTags[a].autocomplete == "") {
                        window.errorMessage("WCAG 3.3.7 (2.2,A)", "Autocomplete for the form is missing", "Allow autocomplete feature for input elements in the form", inputTags[a]);
                        
                    } else {
                        if (inputTags[a].autocomplete == "off") {
                            window.errorMessage("WCAG 3.3.7 (2.2,A)", "Autocomplete for the form is off", "Allow autocomplete feature for input elements in the form", inputTags[a]);
                            
                        }
                    }
                }
    
            }
        }
        
    }}