setTimeout(() => {
    Parsing()   
}, 22000);

function Parsing() {
    $.fn.log = function () {
        console.log.apply(console, this);
        return this;
    };
    if (document.doctype === null){
        console.log("%cRule:%cWCAG 4.1.1 (2.0,A)",
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
    console.log("%cError:%cDoctype is missing.",
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
    console.log("%cFix:%cAdd <!DOCTYPE html>",
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
    var allTags = document.querySelectorAll('*')
    var id_map = {}
    for (var d = 0; d < allTags.length; d++) {
        if (allTags[d].nodeName != "HTML" &&
            allTags[d].nodeName != "BASE" &&
            allTags[d].nodeName != "TITLE" &&
            allTags[d].nodeName != "SCRIPT" &&
            allTags[d].nodeName != "STYLE"  &&
            allTags[d].nodeName != "HEAD" &&
            allTags[d].nodeName != "META") {
            if (allTags[d].id != null && allTags[d].id != "") {
                if (allTags[d].id in id_map) {
                    id_map[allTags[d].id].push(d)
                } else {
                    var new_arr = []
                    new_arr.push(d)
                    id_map[allTags[d].id] = new_arr
                }
            }
        }
    }
    for (id in id_map) {
        if (id_map[id].length > 1) {
            console.log("%cRule:%cWCAG 4.1.1 (2.0,A)",
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
            console.log("%cError:%cFound two or more elements using same id",
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
            console.log("%cFollowing Code Snippets:",
                `color: #FFF;
                        background-color: #333;
                        border-radius: 5px;
                        padding: 5px 10px;
                        font-size: 0.8rem;
                        display: inline;
                        box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
            for (var i = 0; i < id_map[id].length; i++) {
                $(allTags[id_map[id][i]]).log()
            }
            console.log("%cFix:%cUse a distinct id value",
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