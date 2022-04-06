var a = 1;
function b() {  
    a = 10;  
    return;
    function a(){}
}
b();
console.log(a);        //1

/*
This is because the function a() {} statement has now 
created a local a that has a functional/local scope. 
This new a now gets hoisted to the top of its enclosing 
function b() with it’s declaration and definition.

Therefore, the statement a = 10; is no longer changing the 
value of the global a which remains to be 1, but rather it 
is changing the local a from a function to an integer 
value of 10. Since we are logging the global a, the output is 1.

Had the statement function a() {} not been there, the output would have been 10.
*/