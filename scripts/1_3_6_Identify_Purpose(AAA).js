setTimeout(() => {
    IdentifyPurpose()
}, 4000);

function IdentifyPurpose() {
    $.fn.log = function () {
        console.log.apply(console, this);
        return this;
    };
    $(document).ready(function () {
        $('*').each(function () {
            if ($(this).prop("nodeName") == "SECTION" ||
                $(this).prop("nodeName") == "FORM" ||
                $(this).prop("nodeName") == "NAV" ||
                $(this).prop("nodeName") == "MAIN") {
                var checkRoleAttr = $(this).attr('role');
                if (checkRoleAttr == undefined || checkRoleAttr == false || checkRoleAttr == null) {
                    console.log("%cRule:%cWCAG 1.3.6 (2.1,AAA)",
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
                    console.log("%cError:%cUsing ARIA landmarks to identify regions of a page is Missing.",
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
                    $(this).log()
                    console.log("%cFix:%cAdd role='PURPOSE'",
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
        })
    })

}