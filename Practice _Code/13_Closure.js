//https://www.scaler.com/topics/javascript/closure-in-javascript/
// Closures

/* a closures is the combination of a function bundled together (enclosed) with references to its surrounded state(the lexical environment). 
in other worlds, a closure gives a function access to its outer scope, in js closure is created every time a function is created, at function creation time.  

*/
function outerFunction() {
    let outerVariable = 'I am from the outer function';
  
    function innerFunction() {
      console.log(outerVariable); // Accessing outerVariable from the outer function's scope
    }
  
    return innerFunction;
  }
  
  let innerFunc = outerFunction(); // Assigning the inner function returned by outerFunction to a variable
  innerFunc(); // Calling the inner function 

  //Closure in JavaScript is a powerful concept which allows the functions to retain access to the variables from their lexical scope even after the outer function has finished executing