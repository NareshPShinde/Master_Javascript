/*  
what is array in Js. 
How to Create array in Js.
How to Get Elements from an Array in JS.
How to Add Elements to an Array in JS.
How to Remove Elements from an Array in JS.
How to Copy and Clone an Array in JS.
How to Determine if a Value is an Array in JS.

Array Destructuring in JavaScript
How to Assign a Default Value to a Variable
How to Skip a Value in an Array
Nested Array Destructuring in JS

How to Use the Spread Syntax and Rest Parameter in JavaScript
How to Use the Rest Parameter in JS
How to Use the Spread Operator in JS

Destructuring Use Cases in JavaScript
How to Swap Values with Destructuring
How to Merge Arrays

JavaScript Array Methods -> push(),unShift() ,pop (),shift(),slice(),Array.isArray(),lenght().
How to Create, Remove, Update, and Access Arrays in JavaScript -> concat ,join ,fill ,include,indexof ,reverse,sort ,splice,

Static Array method in  Js - > Array.isArray (),Array.from(),Arry.of().
Array Iterator Methods in JavaScript - > filter,map, reduce ,  some , find ,every , 
proposed Array method in js -> at () now is not available 

Why do you need to know about Array-like Objects? https://blog.greenroots.info/why-do-you-need-to-know-about-array-like-objects
5 useful tips about the JavaScript array sort method https://blog.greenroots.info/5-useful-tips-about-the-javascript-array-sort-method
Ways to Empty an Array in JavaScript and the Consequences
Build your JavaScript Muscles with map, reduce, filter and other array iterators
Why do you need to know about the JavaScript Array at() method?

*/

// Intro Array 
/* 
# Array - > a data structure in Js that allows you to  store multiple values  in the single variable , Each value in this array is called element, element can be accesed by index ,  the index is a numeric representation that indicates the position of an element in array. 
# A pair of square brackets [] represents an array in JavaScript. All the elements in the array are comma(,) separated.
#  arrays can be a collection of elements of any type. This means that you can create an array with elements of type String, Boolean, Number, Objects, and even other Arrays.
# The position of an element in the array is known as its index. In JavaScript, the array index starts with 0, and it increases by one with each element.
#  JavaScript arrays are not of fixed length.
   💠JS array Characteristics
   1.JavaScript arrays are resizable and can contain a mix of different data types. (When those characteristics are undesirable, use typed arrays instead.)
   2.JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.
   3.JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the value of the array's length property minus 1.
   4.JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).

   array elemnets can - > array element can be of any data type , and even mixed togetherin a single array.
                        primitive data types ex,null,undefined ,string and  so on or function, another array or object.
*/

// create array in js  1 ) Array Literal ->  Const Array_name = [item1,item2,...] , 2) Array Constructer const Array_name = new Array() 
const Student = ["dever","krishan" , "gaurav" , "vaibhav" , "shakshi" , "rohini"," pooja" ];// Array literals 
const teacher = new Array("kolas","giram","ugavkara")// Array Constructer / using new keyword 
const arr = new Array(4);
console.log("lenght of array : "+ arr.length);//4  with empty elements 
console.log(teacher.length);//3 
// Get elment of array 
const S0 = Student[0];
const S1 = Student[1];
const S2 = Student[2];
console.log(S0+"\n"+S1+"\n"+S2);
console.log(Student);

const len = Student.length;// backward to traverse array.

console.log(Student[len-1]);
console.log(Student.sort());

for (let i = 0; i < Student.length; i++) {
    const element = Student[i];
    console.log( `Element at index ${i} is ${Student[i]}`);
}

// Adding Elements = push()<- , -> unshift()
Student.unshift("kartik")
Student.push("gopal");
console.log(Student);

// Removing elements = <-shift(), pop()-> 
Student.shift()
Student.pop()
console.log(Student);
// how to determine if a value is array. 
console.log( Array.isArray([]));//true
console.log( Array.isArray(Student));//true
console.log( Array.isArray(teacher));//true
console.log( Array.isArray({"abc":23}));//false

//Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.
const salloCopy = Student.slice();// create sallo copy of array
console.log(salloCopy);
console.log(salloCopy===Student);
console.log(Student);

