console.log("errorTracker.js loaded");

const scriptURLs = [
  "./scripts/1_1_1_NonTextContent(A).js",
  "scripts/1_3_1_InfoAndRelationships(A).js",
  "scripts/1_3_5_Identify_Input_Purpose(AA).js",
  "scripts/1_3_6_Identify_Purpose(AAA).js",
  "scripts/1_4_1_UseOfColor(A).js",
  "scripts/1_4_3_Contrast(Minimum)(AA).js",
  "scripts/1_4_4_ResizeText(AA).js",
  "scripts/1_4_6_Contrast(Enhanced)(AAA).js",
  "scripts/2_1_1_Keyboard(A).js",
  "scripts/2_2_2_Pause,Stop,Hide(A).js",
  "scripts/2_4_4_LinkPurpose(A).js",
  "scripts/2_4_6_HeadingsAndLabels(AA).js",
  "scripts/2_4_11_FocusAppearanceMinimum(AA).js",
  "scripts/2_4_12_FocusAppearanceEnhanced(AAA).js",
  "scripts/2_5_7_Dragging(AA).js",
  "scripts/2_5_8_Target Size_(Minimum)(AA).js",
  "scripts/3_1_1_LanguageOfPage(A).js",
  "scripts/3_2_7_HiddenControls(AA).js",
  "scripts/3_3_2_LabelsOrInstructions(A).js",
  "scripts/3_3_7_AccessibleAuthentication(A).js",
  "scripts/4_1_1_Parsing(A).js",
];

const errors = [];

function addError(error) {
  errors.push(error);
}

function getNextError() {
  return errors.shift();
}


// Define the global variable
let globalVariable = 0;

// Define a function to execute scripts sequentially
function executeScriptsSequentially(scriptURLs) {
  // Start by executing the first script
  scriptURLs.forEach((scriptURL, index) => {
    chrome.runtime.sendMessage({
      message: "executeScript",
      script: scriptURL,
    })
  })
}

executeScriptsSequentially(scriptURLs);