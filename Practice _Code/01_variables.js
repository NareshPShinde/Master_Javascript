// references -- fcc article , 
// variable , var let const , undefined VS not defined , scope of variables .
// jargons - declaration , assignment , initialization , value/(Literals), naming convention , hoisting , tempral dead zone.syntaxError , TypeError , ReferenceError
  

// Variable
/* 
 variable is 'named storage' for data.
 naming convention / rules:
 1 . must start with a letter , underscore _  or doller sign $ .
 2 . variable names can only contain letters , numbers , underscores , dollersigns .
 3. variable names is case sensetive. e.g. Naresh , NARERSH , naresh is are different variable.
 4. name can not any reserved keywords in javascript.
  var_type  variableName = value;

 tip : if name of variable more than one word the use camelCase covention .
        e.g. totalPrice , userName .
       when declare constant use uppercase and unserscore _
        e.g.  COLOR_RED = "#F00"; 

*/

// tip : VScode short key for toggle block comment -> shift + alt + a.  and for single-line comment -> ctr + /

/* let messege ; // Declaring
messege = "i am naresh "; // assigning
let msg = "hey i am javascript developer "; //initialization 

alert(msg); */

/* // Multiple Varible declration 

// 1
let name = " naresh" , roll_no = 78 , parsuing = true;

// 2
let name = "umesh";
let roll_no = 36;
let parsuing =  false;

// 3 (comma first style)
let a1 = 12
  , a2 = 32
  , a3 = "sd,nskjdskjnd"; */
//============================================================


 /*
 hoisting - when  we declare variable and function in our app, the interpreter moves these declaratoion  to top of their scope and allcoate place in memory before excecution is starts. (memory creation phase) .this process is called hoisting. 
  */

 //var
/*
# scope of var - > var decalration are globally scoped or functional/locally scoped .
when scope of var is global - > variable is declare outside of function.
                                is available for use in whole windows. 
when scope of var is function - > it is available and can be accessed in only within that function.                                
                                   
# var can be re-decalred and updated.

 */
console.log(greeter);//undefined
var greeter = 'hi';
var greeter= 'hi bro';// we can do this within same scope
console.log(greeter);

function varScopeCheck(){
    var innnerfunc = ' i am inside function';
    console.log(innnerfunc);
}
// console.log(innerfunc);  //  ReferenceError : innerfunc is not defined

console.log(sayHello);// undefined
var sayHello = "hello"
console.log(sayHello);//hello   
/* so var variable are hoisted to the the top of the their scope & initialized with value 'undefined' */
//-------------------------------------
/*  when you declare a variable with let and const , it is also hoisted but it's allocated in the memory as uninitialized in' Temporal Dead Zone' you can not access variable in the temporal dead zone before you're declared them.So if  we try to acces this variable before declarating it , the program throws a  ReferenceError    */

// let
/* 
# let is block scoped {}.
# let can update but not re-decalred.
# just like var , let also hoisted to top of thier scope.
# unlike var  which is  initialized  as undefined.let keyword not initialized.  
if we try to this use before initialization , we will get ReferenceError. 
# after declaration  of let  variable defalt is undefined.   
*/
// console.log(user); // referenceERROR : can not acces  'user' before initialization.
let user = "naresh";
// console.log(user2);// same error like user
let user2 ;
console.log(user2);// with let variable if value is not initialized , the defalt value undefined

//--------------------------------------
// const
/* 
# const declaration are block scoped.
# const can not be updated and re-declared.
# this behavior is sometimes deffirent when it comes to the object declared with const.
 while a const object is not updated ,the properties of this objects can be updated.   
*/

//  const pay ;      //SyntaxError: Missing initializer in const declaration
const accountId = 2343;
accountId = 2323;
console.log(accountId);
// accountId = 324324; // TypeError : Assignment to constant variable.







// single line comment ctr + /.
/* toggle block block comment ctr + alt + a */

/*  Recommendetion
 const doesn't make things fully constant. It protects the variable, not the value.
Use 'const' as the default.
Use 'let' if the variable will change in the future.
Don't use var if no perticular use case     
*/



