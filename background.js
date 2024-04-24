// import "./errorTracker.js";
console.log("background.js loaded");

// Listen for messages from the content script
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log("Received message:", request);
  if (request.message === "executeScript") {
    // Execute the script using chrome.scripting.executeScript
    chrome.scripting.executeScript({
      target: { tabId: sender.tab.id },
      files: [request.script],
      // Pass the global variable's value as an argument to the executed script
    });
    // Return true to indicate that the response will be sent asynchronously
    return true;
  }
});

