// Code to disable motion actuation to prevent accidental actuation

//This code presntly require more study as its highly contest specific and may not be applicable to all the cases.
//so to deternmine the applicability of this code, we need to study the context of the application and the use of motion actuation in the application.

function disableMotionActuation() {
  
    let errors = 0;
    let fixed = 0;
    window.addEventListener("deviceorientation", handleMotionEvent, true);
    window.addEventListener("devicemotion", handleMotionEvent, true);

    chrome.runtime.sendMessage({ type: "results", script: "2_5_4_MotionScreen(A)", data: { errors, fixed } });  
}


function handleMotionEvent(event) {
    // Check if motion actuation needs to be disabled
    if (shouldDisableMotionActuation(event)) {
    
        event.preventDefault();

        errors++;
     
        window.errorMessage("WCAG 2.5.4 (A)", "Disable motion actuation to prevent accidental actuation", "Motion actuation disabled", event.target);

        // Fix: Disable motion actuation
        event.stopPropagation();

        fixed++;
        
    }
}

function shouldDisableMotionActuation(event) {
    // Check if motion actuation is not essential or not through an accessibility supported interface
    var isMotionActuationDisabled = true; // Assume motion actuation should be disabled by default
    
    //code fot it is
    var isMotionEssential = null;
    
    //code fot it
    var isMotionSupportedInterface = null;

    if (isMotionEssential || isMotionSupportedInterface) {
        isMotionActuationDisabled = false;
    }
    
    return isMotionActuationDisabled;
}


disableMotionActuation();
