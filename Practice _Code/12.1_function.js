
// getting arguments with the argument object.
/* JS function have a build in object called the arguments object.(array like object)



*/
function myfunc(){
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    console.log(arguments[8]);//undefined 
}
myfunc("one","two",3,5)

// return statement 

/* 
the return statement end the execution , and specifies a value to be returned to the calling function. 
it is the last line of any function.
any code written after return statement is "unreachable" and throws a warning : inreachable code after return statement.

notable point :
# a function immediatly stops at the point where return is called .
# a function can return another function.the function returned by the any function,preserves (or remember)the value of elements 
presents in it's parent function , and form a clouser.
# the return statemnt is not mandatory. 
*/
function add(params1 ,params2) {
    return params1 + params2;
}
add(12,11);
console.log(add(12,11));

// function hoisting
/* #1 function declaration are with both their name and the function body. this means function canm be called before it defination in the code. 
#2 function expression are trated like variable declaration. the variable itself is hoisted ,but the function expression not assigned until the line of execution . this means calling the function before its assingment will result in an error.
#3 variable declared let and const inside the are hoisted to the top of the function scope, but they are reain int the TDZ . this prevent access to them before they are initialized.
*/
greet();
function greet() {
    console.log('hellofriend');
}

hello();//TypeError: hello is not a function
var hello = function () {
 console.log('hello');   
}

function wish() {
    console.log(friend);//ReferenceError: Cannot access 'friend' before initialization
    let friend = 'vaibhav';
}
wish();
//===============================================================================================================
/*  
  Immediately Invoked Function Expressions

Immediately Invoked Function Expressions (IIFE) are JavaScript functions that are executed immediately after they are defined. 
They are typically used to create a local scope for variables to prevent them from polluting the global scope.
# Use Cases Of IIFE
Avoid polluting the global namespace.
To create closures in JavaScript.
IIFE is used to create private and  public variables and methods.
It is used to execute the async and await function.
It is used to work with require function. */
(function() {
    var localVariable = "I'm local!";
    console.log(localVariable); // Output: I'm local!
})();
console.log(localVariable); // ReferenceError: localVariable is not defined
//==========================================================================================================================