// Datatypes
/* 
Primitive Datatype(7) - ss nn bb u 
                     1. String 2.Symbol 3.Number 4. Null 5.Boolean 6. Bigint() 7. Undefined.
Non-Primitive Datatype - 1 . Object 2. Array .     

*/
// nn bb ss u
let a = null;  // null
let b = 2323;     // number
let c = true;     //boolean
let d = BigInt("323624"); // Bigint
let e = "naresh";      // string
let f =Symbol("i am nice  symbol"); // symbol
let g = undefined;   // undefined

console.log(a,b,c,d,f,g);
console.log(typeof g);


// when you declare a primitive data types in js . it is stored on a stack. a stack is a simple data structure that computer use to store and  retrive data quiickly.
// non-primitive data types/reference data types > are dynamic in nature , that is ,they do not have a fixed size.(ex. array , function, collection , and other types of object.computer does not directly store that data types in that variable.you have assigned to that variable is pointer that points to the location of the data type in memory. we have two datastructure heap and stack .
/* ex. the object itself is stored on a heap. and its pointer is stored on a stack.   */ 

// Non-Primitive datatypes 
// object in JS 
const item = {
    "narseh": true ,  // to seperate key value ' : 'colon is used and to seperate multile properties' , ' comma is used.
     "sandeep": 23,
     "raje": undefined,
     name :"bumiputra" // both same.
}
console.log(item["sandeep"]);
console.log(item.raje);// both same.

item['friend'] = " prem";
console.log(item);

// tip : 
console.log(typeof null === "object");// true , is a bug, but has existed since the early days of JS.

console.log(typeof NaN);

console.log(true+false);