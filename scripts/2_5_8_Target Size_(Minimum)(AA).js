setTimeout(() => {
  PointerTargetSpacing();
}, 17000);


// fix the code to make the target size at least 24 pixels 
function PointerTargetSpacing() {
    let errors = 0;
    let fixed = 0;
  var allTags = document.querySelectorAll("*");
  for (var k = 0; k < allTags.length; k++) {
      if (
          allTags[k].nodeName !== "HTML" &&
          allTags[k].nodeName !== "BODY" &&
          allTags[k].nodeName !== "LINK" &&
          allTags[k].nodeName !== "SCRIPT" &&
          allTags[k].nodeName !== "STYLE" &&
          allTags[k].nodeName !== "XML" &&
          allTags[k].nodeName !== "HEAD" &&
          allTags[k].nodeName !== "META"
      ) {
          var targetWidth = allTags[k].clientWidth;
          var targetHeight = allTags[k].clientHeight;
          var targetIsInsideBoundary =
              targetWidth < 24 && targetHeight < 24;

          if (targetIsInsideBoundary) {
              // Resize the element if its size is less than 24x24 pixels
              if (targetWidth < 24) {
                  allTags[k].style.minWidth = "24px";
              }
              if (targetHeight < 24) {
                  allTags[k].style.minHeight = "24px";
              }

              errors++;

            window.errorMessage("WCAG 2.5.8 (2.2,AA)", "Need the target size to be at least 24 pixels", "Resized the element or enclosed it within a 24x24 boundary", allTags[k]);

            fixed++;
            

          }
      }
  }

  chrome.runtime.sendMessage({ type: "results", script: "2_5_8_Target Size_(Minimum)(AA)", data: { errors, fixed } });  
}
