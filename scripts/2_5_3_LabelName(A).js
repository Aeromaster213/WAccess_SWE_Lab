// Ensure the label text is included in the accessible name
function ensureLabelInName() {
    var allComponents = document.querySelectorAll("[aria-labelledby]");
    for (var i = 0; i < allComponents.length; i++) {
        var component = allComponents[i];
        var labelIds = component.getAttribute("aria-labelledby").split(" ");
        var labelText = "";

        // Retrieve text from labels
        for (var j = 0; j < labelIds.length; j++) {
            var labelElement = document.getElementById(labelIds[j]);
            if (labelElement) {
                var textContent = labelElement.textContent.trim();
                if (textContent) {
                    labelText += textContent + " ";
                }
            }
        }

        // Checks
        if (labelText.trim() !== "") {
            var accessibleName = component.textContent.trim();
            if (!accessibleName.includes(labelText.trim())) {
            
                component.textContent = labelText + accessibleName;
                window.errorMessage("WCAG 2.5.3 (A)", "Ensure label text is included in the accessible name", "Updated the accessible name", component);

                // Fix: Update accessible name
                component.textContent = labelText + accessibleName;
            }
        }
    }
}

// Call the function after a timeout
setTimeout(ensureLabelInName, 17000);
