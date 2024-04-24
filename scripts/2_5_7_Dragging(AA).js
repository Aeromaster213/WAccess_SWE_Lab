setTimeout(() => {
    Dragging();
}, 16000);

// the user can try to drag the element and see the console for the logs . I have added the logs for the drag events 

function Dragging() {
    $.fn.log = function () {
        console.log.apply(console, this);
        return this;
    };

    var draggableElements = document.querySelectorAll('[draggable="true"]');
    
    for (var i = 0; i < draggableElements.length; i++) {
        var element = draggableElements[i];

        // Check if the element has drag events attached 
        // no need to all the tags to have drag events 
        // only the tags that are draggable should have drag events
        var hasDragEvents = element.ondragstart || element.ondrag || element.ondragend;

        if (!hasDragEvents) {
            console.log("%cRule:%cWCAG 2.5.7 (2.2,AA)",
                `color: #FFF; background-color: #333; border-radius: 5px 0px 0px 5px; padding: 5px 10px; font-size: 0.8rem; display: inline; box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
                `color: #FFF; display: inline; font-size: 0.8rem; background-color: #809FFF; border-radius: 0px 5px 5px 0px; padding: 5px 10px; box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`);
            console.log("%cError:%cOther non-pointer options for this draggable element are missing",
                `color: #FFF; background-color: #333; border-radius: 5px 0px 0px 5px; padding: 5px 10px; font-size: 0.8rem; display: inline; box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
                `color: #FFF; display: inline; font-size: 0.8rem; background-color: #EB5177; border-radius: 0px 5px 5px 0px; padding: 5px 10px; box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`);
            console.log("%cCode Snippet:",
                `color: #FFF; background-color: #333; border-radius: 5px; padding: 5px 10px; font-size: 0.8rem; display: inline; box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`);
            $(element).log();
            console.log("%cFix:%cAdd drag events (dragstart, drag, dragend) to handle the draggable element",
                `color: #FFF; background-color: #333; border-radius: 5px 0px 0px 5px; padding: 5px 10px; font-size: 0.8rem; display: inline; box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
                `color: #FFF; display: inline; font-size: 0.8rem; background-color: #007075; border-radius: 0px 5px 5px 0px; padding: 5px 10px; box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`);
            console.log("%c-----------------------------------------------------------------------------",
                `color: #FFF; background-color: #293543; font-weight: bolder; border-radius: 5px; padding: 5px 10px; font-size: 1rem; display: inline;`);

            // Add drag events to handle the draggable element
            element.ondragstart = function(event) {
                // Prevent default behavior
                event.preventDefault();
                // Custom logic for drag start
                console.log("Drag Start: ", this);
                // Sample custom logic: Change element color on drag start
            // this.style.backgroundColor = 'lightblue';
            };

            element.ondrag = function(event) {
                // Prevent default behavior
                event.preventDefault();
                // Custom logic for drag
                console.log("Dragging: ", this);
                // Sample custom logic: Change element opacity on dragging
            //this.style.opacity = '0.5';
            };

            element.ondragend = function(event) {
                // Prevent default behavior
                event.preventDefault();
                // Custom logic for drag end
                console.log("Drag End: ", this);
                // Sample custom logic: Reset element styles on drag end
            //this.style.backgroundColor = '';
            //this.style.opacity = '1';
            };

            //this function baiscally remove the drag option from question 
            // Add other non-pointer options to draggable element
            element.oncontextmenu = function() { return false; }; // Disable context menu
            element.onfocus = function() { this.blur(); }; // Remove focus
        }
    }
}
