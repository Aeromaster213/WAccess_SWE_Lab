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
    let errors = 0;
    let fixed = 0;
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
                        errors++;
                        window.errorMessage("WCAG 3.3.7 (2.2,A)", "Misplaced submit button", "Submit button must be enclosed inside a form", inputTags[a]);

                        // Fix: Enclose submit button inside a form
                        var newForm = document.createElement("form");
                        inputTags[a].parentNode.insertBefore(newForm, inputTags[a]);
                        newForm.appendChild(inputTags[a]);

                        fixed++;

                        
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
                            errors++;
                            window.errorMessage("WCAG 3.3.7 (2.2,A)", "Autocomplete for some form elements is missing/off", "Allow autocomplete feature for input elements in the form", inputTags[a]);

                            // Fix: Add autocomplete attribute
                            for (var i = 0; i < formArray.length; i++) {
                                if (formArray[i].type == "submit" || formArray[i].type == "hidden") {
                                    continue
                                } else {
                                    formArray[i].autocomplete = "on"
                                }
                            }
                            fixed++;
                            
                        }
                    }
                    else {
                        errors++;
                        window.errorMessage("WCAG 3.3.7 (2.2,A)", "Submit button does not exist", "Add submit button in the form to enable browser store a password", inputTags[a]);

                        // Fix: Add submit button
                        var newSubmit = document.createElement("input");
                        newSubmit.type = "submit";
                        inputTags[a].form.appendChild(newSubmit);
                        fixed++;

                        
                    }
                } else {
                    if (inputTags[a].autocomplete == "") {
                        errors++;
                        window.errorMessage("WCAG 3.3.7 (2.2,A)", "Autocomplete for the form is missing", "Allow autocomplete feature for input elements in the form", inputTags[a]);

                        // Fix: Add autocomplete attribute
                        inputTags[a].autocomplete = "on"
                        fixed++;

                        
                    } else {
                        if (inputTags[a].autocomplete == "off") {
                            errors++;
                            window.errorMessage("WCAG 3.3.7 (2.2,A)", "Autocomplete for the form is off", "Allow autocomplete feature for input elements in the form", inputTags[a]);

                            // Fix: Add autocomplete attribute
                            inputTags[a].autocomplete = "on"

                            fixed++;
                            
                            
                        }
                    }
                }
    
            }
        }
        
    }
    chrome.runtime.sendMessage({ type: "results", script: "3_3_7_AccessibleAuthentication(A).js", data: { errors, fixed } });  
}