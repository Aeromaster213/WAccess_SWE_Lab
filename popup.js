// Array to store script results
let scriptResults = [];

// Listen for messages from the background script
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    // Check if the message type is "scriptResult"
    if (message.type === "scriptResult") {
        // Extract script name, errors, and fixed from the message
        const scriptName = message.script;
        const errors = message.errors;
        const fixed = message.fixed;

        // Push the result to the scriptResults array
        scriptResults.push({ scriptName, errors, fixed });

        // Update popup UI with script results
        updatePopupUI(scriptResults);
    }
});

// Function to update the popup UI with the script results
function updatePopupUI(scriptResults) {
    // Clear previous results
    const chartContainer = document.getElementById("chartContainer");
    chartContainer.innerHTML = "";

    // Create an array of objects for the chart data
    const chartData = scriptResults.map(result => ({
        scriptName: result.scriptName,
        errors: result.errors,
        fixed: result.fixed
    }));

    // Draw the chart using CanvasJS library
    drawChart(chartData, chartContainer);
}

// Function to draw the chart using CanvasJS library
function drawChart(data, container) {
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
        }]
    });

    chart.render();
}
