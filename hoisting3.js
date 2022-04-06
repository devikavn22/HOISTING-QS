
console.log(foo());         //3
function foo() {  
    var bar = function() {
        return 3;  
    };  
    return bar();  
    var bar = function() {    
        return 8;  
    };
}

/*
This one’s easy. The function foo() itself will be hoisted in 
the global scope as its a function declaration. As for inside foo(),
its a clear case of function expression for both the bar()functions.

The second bar() will not be read by the interpreter ahead of time 
(no hoisting). The first one will be executed and returned. */