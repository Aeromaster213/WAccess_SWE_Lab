// Check and enforce consistent help mechanisms order

setTimeout(() => {
    enforceConsistentHelpOrder();
  }, 17000);
  
  
function enforceConsistentHelpOrder() {
    var helpMechanisms = document.querySelectorAll('.help-mechanism'); // Assuming each help mechanism has a class 'help-mechanism'
    var previousOrder = null;

    helpMechanisms.forEach(function(helpMechanism) {
        var currentOrder = getHelpMechanismOrder(helpMechanism);
        
        if (previousOrder !== null && currentOrder !== previousOrder) {
            
            window.errorMessage("WCAG 3.2.6 (A)", "Check and enforce consistent help mechanisms order", "Help mechanisms are not in a consistent order", helpMechanism);

        }
        
        previousOrder = currentOrder;
    });
}


function getHelpMechanismOrder(helpMechanism) {
    var order = 0;
    var sibling = helpMechanism.previousElementSibling;

    while (sibling) {
        order++;
        sibling = sibling.previousElementSibling;
    }

    return order;
}


enforceConsistentHelpOrder();
