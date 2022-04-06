function foo(){
    function bar(){
        return 3;
    }
    return bar();
    function bar(){
        return 8;
    }
}
console.log(foo());       //8

/*Both the bar() functions are function declarations and 
will therefore be hoisted to the top of foo() local scope. 
However, the bar() returning 8 will be hoisted after the one 
returning 3.Therefore, the one returning 8 will be executed */

