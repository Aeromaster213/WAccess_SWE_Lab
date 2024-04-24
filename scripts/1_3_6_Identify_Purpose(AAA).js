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
                    window.errorMessage("WCAG 1.3.6 (2.1,AAA)", "Using ARIA landmarks to identify regions of a page is Missing", "Add role='PURPOSE'", $(this));
                }
            }
        })
    })

}