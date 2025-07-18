/* 🧭 Intermediate Level
First-Class Functions
Callback Functions
Immediately Invoked Function Expressions (IIFE)
Closures
Recursion
Rest Parameters (...args)
Spread Operator in Functions
Function Context (this)
Binding (bind, call, apply)

⚙️ Advanced Level
Higher-Order Functions
Pure Functions
Currying
Memoization
Debouncing & Throttling
Async Functions (async/await)
Promises & Functions
Generators & yield
Function Composition
Tail Call Optimization */
//======================================================================================================

//          First Class Function
/* In JavaScript, functions are first-class citizens.
This means:
Functions can be treated like any other value.

You can:
Assign functions to variables ✅
Store them in objects or arrays ✅
Pass them as arguments ✅
Return them from other functions ✅

If a language supports these, it has first-class functions.

 */
//EX.1
function greet(name) {
  return "Hello, " + name;
}
const sayHello = greet;
console.log(sayHello("Ali")); // Output: Hello, Ali
//Ex.2
function processUserInput(callback) {
    const name = "Zara";
    callback(name);
  }
  
  processUserInput(function(name) {
    console.log("Welcome, " + name);
  });
  // Output: Welcome, Zara
// Ex.3 
function multiplier(x) {
    return function(y) {
      return x * y;
    };
  }
  
  const double = multiplier(2);
  console.log(double(5)); // Output: 10
/*   With first-class functions, JavaScript enables:

  Functional programming (compose, map, reduce, etc.)
  Asynchronous patterns (callbacks, promises, async/await)
  Modular design (middleware, plugins)
  DSLs and custom APIs (e.g., Express, Redux)   */

  //           callback function 
  /* A callback function is a function that is passed as an argument to another function and is executed after the completion of some operations.
  This mechanism allows JavaScript to perform tasks like reading files, making HTTP requests, or waiting for user input without blocking the execution of the program. This helps ensure a smooth user experience.

Why Use Callback Functions?
JavaScript runs in a single-threaded environment, meaning it can only execute one command at a time. Callback functions help manage asynchronous operations, ensuring that the code continues to run smoothly without waiting for tasks to complete. This approach is crucial for maintaining a responsive and efficient program.

The Callback Hell Problem
As applications grow, using multiple nested callbacks can become complex and hard to manage, often referred to as "callback hell."*/

// Closures

/* a closures is the combination of a function bundled together (enclosed) with references to its surrounded state(the lexical environment). 
in other worlds, a closure gives a function access to its outer scope, in js closure is created every time a function is created, at function creation time.  

*/
  
// recursion
/* What is a Recursive Function?
A recursive function is a function that calls itself somewhere within the body of the function. Below is a basic example of a recursive function.
The Three Parts of a Recursive Function
Every time you write a recursive function, three elements must be present. They are:

The function definition.

The base condition.

The recursive call.
What is a base condition?
When using a recursive function, the base condition is what lets the function know when to stop calling itself. Once the base condition is met, the recursion ends.
The recursive call
The recursive call is what handles the function calling itself again. 
function doSomething(n) {
  if(n === 0) {
    console.log("TASK COMPLETED!")
    return
  }
  console.log("I'm doing something.")
  doSomething(n - 1)
}
doSomething(3) */


/* A Pure Function is a function (a block of code) that always returns the same result if the same arguments are passed.

Pure functions return consistent results for identical inputs.
They do not modify external states or depend on mutable data.
Often used with immutable data structures to ensure reliability.
Their independence from external states makes them highly reusable.
function add(a, b) {
    return a + b;
}
console.log(add(2, 3)); 
console.log(add(2, 3)); */