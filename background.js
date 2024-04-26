console.log("background.js loaded");

const scriptURLs = [
  "scripts/1_1_1_NonTextContent(A).js",
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

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  // Check if the tab has finished loading
  if (changeInfo.status === "complete" && tab.url) {
    // Execute scripts in the tab
    executeScriptsInTab(tabId);
  }
});

function executeScriptsInTab(tabId) {
  scriptURLs.forEach((scriptURL) => {
    console.log(`Executing script ${scriptURL}`);
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      files: [scriptURL],
    });
  });
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "results") {
    const errors = message.data.errors;
    const fixed = message.data.fixed;
    const script = message.script;
    const tabId = sender.tab.id;

    chrome.tabs.sendMessage(tabId, { type: "scriptResult", script: script, errors: errors, fixed: fixed })
  }
})
