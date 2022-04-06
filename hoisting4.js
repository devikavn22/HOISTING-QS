
var myVar = 'foo';

(function() {  
    console.log('Original value was: ' + myVar);    //Original value was: undefined
    var myVar = 'bar';  
    console.log('New value is: ' + myVar);         //New value is: bar
})();

//Original value was: undefined
//New value is: bar

/********An IIFE (Immediately Invoked Function Expression) is a JavaScript
 *  function that runs as soon as it is defined.******/

 /*In this one, again the global value of myVar (‘foo’) is 
 out of the picture. This is because variable myVar is being 
 declared and defined inside the local function scope and is 
 therefore hoisted to the top of the IIFE with a value of 
 ‘undefined’ which is logged first. The value ‘bar’ is then 
 assigned and logged subsequently.
.*/