// Function to update the popup UI with the tab data
function updatePopupUI(tabData) {
    const chartContainer = document.getElementById("chartContainer");
    chartContainer.innerHTML = "";

    // Create arrays for errors and fixed counts
    const scriptNames = Object.keys(tabData);
    const errorsCounts = scriptNames.map(script => tabData[script].errors);
    const fixedCounts = scriptNames.map(script => tabData[script].fixed);

    // Draw the chart using CanvasJS library
    drawChart(scriptNames, errorsCounts, fixedCounts, chartContainer);
}

// Function to draw the chart using CanvasJS library
function drawChart(scriptNames, errorsCounts, fixedCounts, container) {
    const data = scriptNames.map((scriptName, index) => ({
        scriptName,
        errors: errorsCounts[index],
        fixed: fixedCounts[index]
    }));

    const chart = new CanvasJS.Chart(container, {
        animationEnabled: true,
        title: {
            text: "Script Results"
        },
        axisY: {
            title: "Number"
        },
        axisX: {
            title: "Script",
            interval: 1
        },
        data: [{
                type: "column",
                name: "Errors",
                showInLegend: true,
                dataPoints: data.map(entry => ({
                    label: entry.scriptName,
                    y: entry.errors
                }))
            },
            {
                type: "column",
                name: "Fixed",
                showInLegend: true,
                dataPoints: data.map(entry => ({
                    label: entry.scriptName,
                    y: entry.fixed
                }))
            }
        ]
    });

    chart.render();
}

// Retrieve errors and fixed data from storage for the active tab
console.log("Popup script running");
chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    const tabId = tabs[0].id;
    chrome.storage.local.get([tabId.toString()], function(result) {
        const tabData = result[tabId.toString()] || {};
        console.log(tabData);
        // Update UI with errors and fixed data
        updatePopupUI(tabData);
    });
});

// Listen for changes in storage and update UI when data changes
chrome.storage.onChanged.addListener(function(changes, namespace) {
    // Check if changes are relevant to the active tab
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        const tabId = tabs[0].id;
        if (changes[tabId.toString()]) {
            const newData = changes[tabId.toString()].newValue || {};
            console.log(newData);
            // Update UI with new data
            updatePopupUI(newData);
        }
    });
});
