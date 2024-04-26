console.log("background.js loaded");

// Listen for messages from the content script
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log("Received message:", request);
  if (request.message === "executeScript") {
    // Execute the script using chrome.scripting.executeScript
    chrome.scripting.executeScript({
      target: { tabId: sender.tab.id },
      files: [request.script],
    });
    // Return true to indicate that the response will be sent asynchronously
    return true;
  }
});

