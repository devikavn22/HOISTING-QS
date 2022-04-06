
function a() {    
    var b = "I'm a variable";    
    function b() {
        return "I'm a function";    
    }    
    return b();      //TypeError:b is NOT a function
}
console.log(a());               

/*!!!!!!!! function hoisting in JavaScript is NOT the same as variable hoisting, 
it is unique in its own way.!!!!!!!*/
/*
Behind The scene:
>>This one’s tricky. Its FUNCTION HOISTING vs. VARIABLE HOISTING! Let’s 
break it down.
We know that when it comes to variable hoisting, 
only the declaration(with a value of “undefined”) is hoisted, 
not the definition!
>>In the case of function declarations, the definitions are hoisted as well!
Now, in such a case of multiple declarations(variable and function in 
the same scope) with the same identifier, the hoisting of variables 
is simply IGNORED. The the interpreter comes across the function 
declaration and hoists it.
Finally, the statement of variable assignment (which was not hoisted) 
is executed and “I’m a variable” is assigned to b, which is a 
simple string value and not a function. Hence the error!
*/