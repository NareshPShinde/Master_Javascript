/* 
       ********* Event in Javascript ************
       # Event Foundation
         i . event types(user event , browser event , custom event.)
         ii. event handling method (HTML Attribute Handler , DOM property Handler , AddEventListerner() method )
       # Event Object Properties , Mouse event properties ,keyboard event properties . 
       # Event propagation -> 1.capture phase 2. targate phase 3.Bubble phase 
         i. event control method -> preventDefault() , stopPropagation() ,stopImmediatePropagation() 
       # event delagation 
       # custom event
       # performance optimization -> Debouncing , throttling , passive event listener    
       so on 


*/

/* 
an event represent something that happens in the brower. - a user click , page load ,network request completion,etc
Event are object that contain information about what occurred and provide methods to contorl their behavior.

# ** Event types **
1. User Event 
 Mouse events -> click, dblclick ,mousedown ,mouseup ,mouseover ,mouseout ,mousemove
 Keyboard events -> keydown, keyup,keypress.
 Form Evens -> submit, change, input, focus, blur.
 Touch event -> touchstart , touchend , touchmove.
2. Browser event 
 Windows event -> load ,resize , scroll,beforeunload.
 Document events -> DOMContentLoaded
 Network events -> online ,offline.
3.Custom event 
-> developer defined event using CustomEvent constructor.

# ** Event Handling Methods **
1.HTML atrribute Handler 

 -> (inline event handler - not recommended ) 
 <button type="button" onclick="handleClick()">Click me</button>
 
2.Dom Property Handler

 -> element.onclick() = function(event){
 console.log("Butoon Clicked")
 }; 
 ->Arrow function
  element.onclick() =>(event){
 console.log("Butoon Clicked")
 }; 
 
3.addEventListener() method (recommended)
 
const element = document.getElementById("btn");
 element.addEventListener("click",function(event) {
     console.log("Button clicked");
 })
     // with options 
element.addEventListener('click',handler,{
once:true,// Excute only once
passive:true,// never calls preventDefault()
capture:true// Capture phase intead of bubble
})


*/
const element = document.getElementById("btn");
element.addEventListener("click",function handler(event) {
    console.log("Button clicked");
    // Event Object properties
    console.log(event);
    console.log(event.type);//Returns the type of event, e.g. "click", "hashchange", or "submit".
    console.log(event.target);//Returns the object to which event is dispatched (its target)
    console.log(event.currentTarget);//Returns the object whose event listener's callback is currently being invoked.
    console.log(event.timeStamp);//Returns the event's timestamp as the number of milliseconds measured relative to the time origin.
    console.log(event.bubbles);// whether event bubbles 
    console.log(event.cancelable);// Whether event can be cancelled
     // Mouse Event Propeties 
    console.log(event.clientX ,event.clientY);
    console.log(event.pageX ,event.pageY);
    console.log(event.button);
    console.log(event.ctrlKey , event.shiftKey);
    //keyboard Event properties
    console.log(event.key);
    console.log(event.code);
    console.log(event.keyCode);
    console.log(event.altKey);
})

// Event Listners
 // Basic syntax -> elment.addEventListner(eventType,Handler,Options);
 // adding event listners 
 // removing event listner
 // event listener options

 /*  
 event capturing, event bubbling 
 -> event flow phase (Capture phase ,Targate phase ,Bubble phase)
  - stop event propagation
  - preventing default behaviour 
 -> event delegation
   - basic event delegation 
   - advanced event delegation 
   - event delegation helper function
-> crating custom events
 - listnig to custom events
-> advanced event pattern (event trottling ,event debouncing ,event queue management ,event madiator pattern ) 
 */


