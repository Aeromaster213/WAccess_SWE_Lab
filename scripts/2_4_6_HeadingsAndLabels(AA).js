setTimeout(() => {
    HeadingsAndLabels();
}, 13000);

function HeadingsAndLabels() {
    $.fn.log = function () {
        console.log.apply(console, this);
        return this;
    };

    var headerList = [];
    $('*').each(function () {
        if ($(this).prop("nodeName").match(/^H[1-6]$/)) {
            headerList.push($(this).prop("nodeName"));
        }
    });

    //fixed the header nesting issueok
    var covered = -1;
    $('*').each(function () {
        for (let index = covered; index < headerList.length - 1; index++) {
            if (headerList[index] == $(this).prop("nodeName")) {
                covered = index + 1;
                if (parseInt(headerList[index].replace("H", "")) - parseInt(headerList[index + 1].replace("H", "")) < -1) {
                    var currentLevel = parseInt(headerList[index].replace("H", ""));
                    var nextLevel = parseInt(headerList[index + 1].replace("H", ""));
                    var expectedNextLevel = currentLevel + 1;
                    window.errorMessage("WCAG 2.4.6 (2.0,AA)", "Header nesting is incorrect", "Modify the header nesting so that H" + expectedNextLevel + " follows the current " + headerList[index] + " tag", $(this));

                    break;
                }
            }
        }
    });
}
