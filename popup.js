// Function to update the popup UI with the tab data
// Function to update the popup UI with the tab data
function updatePopupUI(tabData) {
    const tableContainer = document.getElementById("tableContainer");
    tableContainer.innerHTML = ""; // Clear previous content

    // Create a table element
    const table = document.createElement("table");
    table.classList.add("results-table");

    // Create a header row
    const headerRow = table.insertRow();
    headerRow.classList.add("header-row");
    const scriptHeader = document.createElement("th");
    scriptHeader.textContent = "Rule";
    headerRow.appendChild(scriptHeader);
    const errorsHeader = document.createElement("th");
    errorsHeader.textContent = "Errors";
    headerRow.appendChild(errorsHeader);
    const fixedHeader = document.createElement("th");
    fixedHeader.textContent = "Fixed";
    headerRow.appendChild(fixedHeader);

    // Iterate over each script in the tab data
    Object.keys(tabData).forEach(scriptName => {
        const rowData = tabData[scriptName];
        const row = table.insertRow();
        const scriptCell = row.insertCell();
        scriptCell.textContent = scriptName;
        const errorsCell = row.insertCell();
        errorsCell.textContent = rowData.errors;
        const fixedCell = row.insertCell();
        fixedCell.textContent = rowData.fixed;
    });

    // Append the table to the container
    tableContainer.appendChild(table);
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
