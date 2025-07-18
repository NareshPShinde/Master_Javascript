/*   refernce - scaler academy and so on , freecodecamp articals ,namaste Javascript.
 Learn about function 
# function basics 
# function hoisting 
# function expression , function statement , function declaration .
# return keyword in function
# annonymous function :  Ref.* Scaler with Diff. Example.
# arrow function
# function expression -> passed by value and passed by references. 
# highter oder function 
# closure ( more recursion and lexical scoping.)
# IIFE immediaty invoked function expression
# Default parameter
# rest parameter
# callback , call back hell
# pure function
*/
/* 
lexical scoping 
enviromental variable 
memory , code component,
call stack,event loop
how function work behind secne?
*/
//=======================================================================================================================
// Function
/*  
 Similar to procedure- a set of statements that perform a task or calculate area .it may take input an d return output. where there is some obvious realation between input and output .
 reusable block of code that perform specific task .define once and use whenever we want .by calling this function.


 * notable point in function
 1 .Functions are considered as one of the fundamental building blocks in Javascript.
 2. To use a function, it must be defined somewhere in the scope from which it will be called.
 3. A javascript function is composed of a sequence of statements called the function body.
 4. JavaScript function can take one or more inputs and can return output also. However, both taking input and returning an output are optional.
 5.Every function in JavaScript is a function object.

 #JavaScript Functions are called first-class objects because they can have properties and methods just like any other object also called function object .
  
 */
//------------------------------------------------------------------------------------------------------------------------------------
// Defining function
// function declaration - >A function declaration (also known as a function definition or function statement)

/*
 function functionName(parameter1,parameter2,... paramerter_n){
 // body of function
}
1.The function name
2.The parameter list(enclosed in parentheses)
3.The javascript statements that defines the function (enclosed in curly braces{})
 */
function helloWorld() {
    console.log(" Hello world!");
  }
  helloWorld(); // function calling/ invoking
  
  function add(a, b) {
    return a + b; // The return statement is the last line of any function and ends function execution
  }
  console.log(add(10, 15));
  let addition = add(3);
  
  /*  in this example add(a,b) here a,b is parameter.   -> (a variable we pass to functio when we declare it.),
      add(10,15) here 10,15 is argument          ->(the value equvalent to thr parameter that you pass when you call it.)
   */
  //---------------------------------------------------------------------------------------------------------------------
  // pass by Value  Vs pass  by reference
  /* Functions in Pass by Value are called by directly passing the value of the variable as an argument. Thus, any changes made inside the function do not affect the original value. In simple words, the changes made to the arguments in pass-by-value are not reflected globally or in the calling function. In the above example, we passed a & b by value. They are also called primitive parameters.
  
  In Pass by Reference, Functions are called bypassing the reference/address of the variable as an argument. So, altering the value of the parameters inside the function also changes the value globally(in the calling function). Passing objects as a parameter follows this property (here, object referred to as a non-primitive value, such as Array or a user-defined object).
   */
  //----------------------------------------------------------------------------------------------------------------------------
  // function Expression
  //The main difference between a function expression and a function declaration is the function name, which can be omitted(not mandatory though) in function expressions to create an anonymous function.
  
  const addi = function (a, b) {
    //function expression
    return a + b;
  };
  console.log(addi(3, 4));
  // expected output: 7
  
  // # function statemnt Vs function declaration vs  function expression
  
  /* Here are some key characteristics of Function Declarations:
  
  * Hoisting: Function Declarations are "hoisted" to the top of their scope, meaning they can be called before they are defined.
  * Function Name: The function name is required.
  * Scope: Function Declarations are scoped to the current execution context (global or local).
  
  Function Expression :
  A function expression is a statement that defines a function as a part of a larger expression, often assigned to a variable.
  Key differences :
  
  # Here are the key differences between function declarations and function expressions:
  
  * Hoisting: Function declarations are hoisted, while function expressions are not.
  * Scope: Function declarations are scoped to the entire script, while function expressions are scoped to the block they're defined in.
  * Readability: Function declarations are often considered more readable, as they clearly define a function with a name. Function expressions can be less readable, especially when used as callbacks or in complex expressions.
  When to use each
  *Expressed function can not be used before initialiaztion.(ReferenceError : cannot access'sum'before initialization.)
  *Expressed function need to be assigned to used later.
  
  
  # Use function declarations when:
  You want to define a reusable function that can be called from anywhere in the script.
  You want to take advantage of hoisting to simplify your code.
  
  # Use function expressions when:
  You need to define a function as a part of a larger expression, such as a callback or an event handler.
  You want to scope a function to a specific block or module.
  
  */
  //====================================================================================================
  
  /* # Anonymous Function
    Anomymous function in jS are the function tha tdo not have any name or identy.
    an Anomyous function is not accessible after its initial creation.therefor we need to assign it a variable.
    the returned value from that function is stored in that variable . so we can use later that function as value.
   */
  
  /* function (){
    console.log("invalid Anonymous Function");
  } */
  // SyntaxError: Function statements require a function name
  //Ex.1
  let varName = function () {
    console.log("varName is called ");
  };
  varName();
  //Ex.2,
  let calculateArea = function (length, breadth) {
    return length * breadth;
  };
  console.log(calculateArea(2, 4));
  let x = calculateArea(2, 4);
  console.log("Area of rectangle is " + x);
  
  // # Use Anonymous Function as argument of other function.
  
  function greet(wish) {
    // here wish is parameter
    console.log(wish() + " Everyone...");
  }
  greet(function () {
    // here greet is called and anonymous function passed as argument.
    return "Good Morning";
  });
  /////////////////////////////////////////////////////////////////////////////////////
  
  // # how is shorthand for Anonymous function.
  
  // normal Anomymous Function Ex.1
  let y = function () {
    console.log("x is called ");
  };
  y();
  
  // Shorthand Ex.1
  let z = () => console.log("x is called ");
  
  //////////////////////////////////////////////////////////////////////////////////////////
  // arrow function expression -
  //  reference : mdn , fcc article and code with harry video
  
  /*  
   essentialy an anonymous function with a shorter syntax. and also known as lamda function.
   how convert regular/Tranditional function into an arrow function.
    step 1 : remove function keyword and replace to const/let .
    step 2 : add = after function name.
    step 3 : add => after Parentheses().
    optional : remove  parentheses if single parameter , otherwise mandatory.
               remove curly braces or return keyword if single line body but if body is multi-line  use  that is mandatory.
              if carly braces is used , return is mandatory.
  
   limitaion in usage :
   1. arrow function don't have their own bindings to this ,arguments , or super and should not be used as methods.
   2.arrow function can used as constructer.
     calling them with 'new' throws TypeError. they also don't have access to the 'new.targate' .
   3.arrow function can not 'yeild'  within their body and can not be created as generator functions.
   4.line breake before arrow is not allowed : SyntaxError
   5.no Prototype Property.
   */
  /* const func = ()
   =>  {};
   func();   // SyntaxError: Unexpected token '=>'
    rest parameter , default parameters and destructing within param are supported and always required parentheses.
   */
  /* Advantages - Concise Syntax , Lexical 'this'binding ,improved readability
   Disadvantages - no prototype property , can not use dwith new , can not be generatorsd, hard to debug becaue of having anonymous., No own this,arguments,super or new.target
   When to Use - especially for short callback or this should lexically bind to the surround scope (lexical contex).  */
  
  const greeting = () => {
    console.log(` Good Morning `);
  };
  // const greeting = () => console.log(` Good Morning `);
  greeting();
  const greeting2 = (name) => {
    console.log(`Good Morning ${name}`);
  };
  greeting2("sandip");
  //const greeting2 = name => {console.log(`Good Morning ${name}`);}
  
  /* const multiply = (a,b)=>a*b; //Imlipcit return 
  console.log(multiply(5,6));  // 30 
  */
  const multiply = (a, b) => {
    return a * b;
  }; //explicit return
  console.log(multiply(5, 6)); // undefined if return is not used in curly braces.
  
  ///==================================================================================
  
  // return keyword in Js
  /* the return keyword ends the function execuation and specifies the value  to be returned to the function caller
  it is last line of any function. any code written after return statement is "unreachable". and thrwos the warning 
  : unreachable code after return statement.
     syntax : return ;
               return expression ;
               expression is optional , the expression who value to be returned.if omitted undefined is returned . 
  */
  const m = (a, b) => {
    return a + b;
  };
  console.log(m(11, 22));
  
  //================================================================================================
  // calling function
  /* notable point in function calling :
  1. All argument in jS function are optinal / loosly typed.
  2.Js function can be invoked with number of argument ,irrespective of number og argument expected in functio definition.
  3.since a function is loosly typed, we can not declare the type of arguments it expect, hence we can pass numb e rof argumens to it .
  4.whena function is invoked with fewer arguments that are declared, the addional arguments have the defalt  value undefined.  
  */
  
  function myfunc(a,b,c,d=10){
    console.log("the value are :");
    console.log("a = "+ a);
    console.log("b = "+ b);
    console.log("c = "+ c);
    console.log("d = " + d);
  }
  myfunc();// undefined ,undefined,undefined,10
  // myfunc(1,1,1,undefined) // 1,1,1,10
  // myfunc(1,1,2,3,4,4,4)
  // myfunc(undefined,12,13);
  // myfunc(1,2);
  //==================================================================
  
  // default function parameter.
  /* it allow named parametrs to be initalized with default value if no value or undefined is passed. */
  function digit(first = 11,last){
    console.log("first : "+ first);
    console.log("last : "+ last);
  return first +  last; 
  }
  console.log(digit(12,13));25
  console.log(digit(12)); // NaN
  console.log(digit(undefined,11));
  // =======================================================================================================
  //   rest parameter(...)