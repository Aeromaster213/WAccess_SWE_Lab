import { ruleStyle, errorStyle, infoStyle, fixStyle, codeSnippetStyle, separatorStyle } from './styles.js';


setTimeout(() => {
  PointerTargetSpacing();
}, 17000);


// fix the code to make the target size at least 44 pixels 
function PointerTargetSpacing() {
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
              targetWidth >= 44 && targetHeight >= 44;

          if (!targetIsInsideBoundary) {
              // Resize the element if its size is less than 44x44 pixels
              if (targetWidth < 44) {
                  allTags[k].style.width = "44px";
              }
              if (targetHeight < 44) {
                  allTags[k].style.height = "44px";
              }

              // Enclose the element within a 44x44 boundary
              allTags[k].style.minWidth = "44px";
              allTags[k].style.minHeight = "44px";

              console.log("-----------------------------------------");
              console.log("Rule: WCAG 2.5.8 (2.2,AA)", ruleStyle);
              console.log(
                  "Error: Need the target size to be at least 44 pixels", errorStyle
              );
              console.log("Code Snippet: ", allTags[k].outerHTML);
              console.log(
                  "Fix: Resized the element or enclosed it within a 44x44 boundary" , fixStyle
              );
          }
      }
  }
}
