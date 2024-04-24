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
                        console.log("%cRule:%cWCAG 3.3.7 (2.2,A)",
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
                        console.log("%cError:%cMisplaced submit button",
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
                        $(inputTags[a]).log()
                        console.log("%cFix:%cSubmit button must be enclosed inside a form",
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
                            console.log("%cRule:%cWCAG 3.3.7 (2.2,A)",
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
                        console.log("%cError:%cAutocomplete for some form elements is missing/off",
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
                        $(inputTags[a].parentNode).log()
                        console.log("%cFix:%cAllow autocomplete feature for input elements in the form",
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
                    else {
                        console.log("%cRule:%cWCAG 3.3.7 (2.2,A)",
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
                    console.log("%cError:%cSubmit button does not exist",
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
                    $(inputTags[a]).log()
                    console.log("%cFix:%cAdd submit button in the form to enable browser store a password",
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
                } else {
                    if (inputTags[a].autocomplete == "") {
                        console.log("%cRule:%cWCAG 3.3.7 (2.2,A)",
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
                    console.log("%cError:%cInput element should not have autocomplete attribute unset",
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
                    $(inputTags[a]).log()
                    console.log("%cFix:%cSet autocomplete property for the input to on",
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
                    } else {
                        if (inputTags[a].autocomplete == "off") {
                            console.log("%cRule:%cWCAG 3.3.7 (2.2,A)",
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
                        console.log("%cError:%cInput element should not have autocomplete attribute in off mode",
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
                        $(inputTags[a]).log()
                        console.log("%cFix:%cSet autocomplete property for the input to on",
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
                }
    
            }
        }
        
    }}