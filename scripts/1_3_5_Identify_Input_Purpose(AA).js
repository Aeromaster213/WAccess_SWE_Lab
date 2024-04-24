setTimeout(() => {
    IdentifyInputPurpose()
}, 3000);

function IdentifyInputPurpose() {
    $.fn.log = function () {
        console.log.apply(console, this);
        return this;
    };
    var inputTags = document.querySelectorAll('input')
    for (var a = 0; a < inputTags.length; a++) {
        if (inputTags[a].type != "hidden") {
            if (inputTags[a].autocomplete == undefined || inputTags[a].autocomplete == "") {
                console.log("%cRule:%cWCAG 1.3.5 (2.1,AA)",
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
                console.log("%cError:%cAutoComplete is missing in input tag",
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
                $(inputTags[a]).log()
                console.log("%cFix:%cAdd autocomplete='INPUT PURPOSE'",
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

            inputTags[a].setAttribute('autocomplete', 'off'); // Set a default value if missing
            console.log("%cFix Applied: %cAdded autocomplete='off' attribute to input tag",
                `color: #FFF; background-color: #333; border-radius: 5px 0px 0px 5px; padding: 5px 10px; font-size: 0.8rem; display: inline; box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
                `color: #FFF; display: inline; font-size: 0.8rem; background-color: #007075; border-radius: 0px 5px 5px 0px; padding: 5px 10px; box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`);
        
            }
        }

    }
}