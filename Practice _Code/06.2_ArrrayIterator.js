                                   /* 
foreach()
map()
flatMap()
filter()
reduce()
reduceRight()
every()
some()
from()
keys()
entires()
with()
Speard(...)
rest(...)
                                 */


// Ways of iterating over an Array in javaScript

// 1. for Loop

array = [ "one","two","three",4,5,"six"]
for (let i = 0; i < array.length; i++) {
    const element = array[i];
  console.log(element);
}
console.log("COMPLETED... :-"+ array);
// while loop
idx = 0;
while (idx<array.length) {
    console.log(array[idx]);
    idx++;
}
console.log("COMPLETED...:-"+array);

// forEach()
/* 
executing a provided function once for each array element in asending order. this functin refer  as callback function. 
parameters : 
        current value(required): the value of the curretly selected array element.
        index(optional)        : the index of curent selected element.
        Array(optinal)         : the array object that this element is part of.
always return undefined.if we try return value foreach ignore it.
forEach is not chainable.
//  Using Arrow function
 forEach((val,idx,array)=>{statement(s);}) 

 // Using Callback function 
 forEach(callback_Function , this_Arg)

 // Using Inline callback Function
 forEach(function(val,idx,array){statement(s)})
*/
const num =[1,2,3,4,5,,6,7,8,9,10];
num.forEach(val => {
  console.log(val*17);// table of 17 
});
console.log(num);
function sparce(val,idx,arr){
  console.log(`[${idx}]->${val}`);
}
num.forEach(sparce);
console.log(num);
/* automatically skipes empty slots in sparse array 
don't use if need to return new array | break or exit early | await async code | don't use for transaction code.

*/

//Array.prototype.map

/*Calls a defined callback function on each element of an array, and returns an array that contains the results. 
map(callback(element,index,array),thisArg); thisArg is optional.
return : a new array with each element being the reult of the callback function.
he map() method creates a new array by performing a function on each array element.
The map() method does not execute the function for array elements without values.
The map() method does not change the original array. 
does not change lenght of arrray and empty slots in sparce array.*/
function double(val){
  return val*2;
}
console.log(num.map(double));
console.log(num);

// filter 
/* 
filter(callback(element,index,array),thisArg); thisArg is optional.
return : a shallow copy of the given array containig just the elements that pass the test.if no element pass the test ,empty array is returned.
does not invoke empty solt in sparce array.
*/
function greaterthan4(val){
  return val>4;
}
console.log(num.filter(greaterthan4));

// reduce 
/* array.reduce(callback(accumulator, currentValue, index, array), initialValue)

accumulator: Result from the previous callback execution.
currentValue: Current element in the array.
index (optional): Index of the current element.
array (optional): The array reduce() was called on.
initialValue (optional but recommended): Initial value of the accumulator.
accumulator : The value resulting from the previous call to callbackFn. On the first call, its value is initialValue if the latter is specified; otherwise its value is array[0].

currentValue : The value of the current element. On the first call, its value is array[0] if initialValue is specified; otherwise its value is array[1].

currentIndex : The index position of currentValue in the array. On the first call, its value is 0 if initialValue is specified, otherwise 1.
index
return : The value that results from running the "reducer" callback function to completion over the entire array.
ecception :Thrown if the array contains no elements and initialValue is not provided.
*/
const sum = num.reduce((acc, curr) => acc + curr, 0);
console.log(sum);
/* ✅ Use Cases:
Summing values
Flattening arrays
Counting occurrences
Grouping objects
Building objects from arrays 

❗ Notes & Best Practices:
1. always provide initialValue to avoid error
2.output type can number,object,string etc.
3.it return single value so it is not chainable.
4. don't mutate accumulator direcly use push or spread safly.
*/
// reduceRight() same like reduce() but work from right-left.

// every
/* 
every(callback(element,index,array),thisArg); thisArg is optional.
return : true if all elements pass the test, false otherwise.

every() will not run its predicate on empty slots
return : true unless callbackFn returns a falsy value for an array element, in which case false is immediately returned.
*/
function lessthan11(val) {
  return val < 11;
}
console.log(num.every(lessthan11));//true

// some()
/* some() is an Array method that checks whether at least one element in the array passes a test provided by a callback function.

✅ Syntax 
array.some(callback(element, index, array), thisArg)
🧠 Key Points
Returns true if any element passes the test.
Stops iterating once it finds a match.
Returns false if none pass.
Does not modify the original array.
*/
const ages = [15, 22, 30];

const hasAdult = ages.some(age => age >= 18);   // true
const allAdults = ages.every(age => age >= 18); // false
console.log(hasAdult, allAdults);

//keys()
/* 
The keys() method of Array instances returns a new array iterator object that contains the keys for each index in the array.
It returns an array of an object's own enumerable(can be counted or listed,) property names (keys). This is useful when you want to:
# Loop through object properties
# Count keys
# Filter or transform data */ 
const fruits = ["apple", "banana", "mango"];
console.log(Object.keys(fruits)); // Output: ['0', '1', '2']
const user = { name: "Amit", age: 30, city: "Pune" };
Object.keys(user).forEach(key => {
  console.log(`${key}: ${user[key]}`);
});

//from()
/* The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.
Array.from(arrayLike, mapFunction(element,index), thisArg)
arrayLike: The array-like object to convert to an array.
mapFunction(optinal): The function to call on every element of the 'array-like object.'
thisArg(optional): The value to use as this when executing the mapFunction.
return : A new Array instance.
*/
const str = "hello";
const arr = Array.from(str);
console.log(arr); // ['h', 'e', 'l', 'l', 'o']

// entries()
/* The entries() method of Array instances returns a new array iterator object that contains the key/value pairs for each index in the array. 
no parameter
return : A new iterable iterator object. 
*/
const a = ["a", "b", "c"];

for (const [index, element] of a.entries()) {
  console.log(index, element);
}
// 0 'a'
// 1 'b'
// 2 'c'

// with
/* 
arrayInstance.with(index, value) 
allow negative index.
create hols in sparce array.
return :. A new array with the element at index replaced with value. */
const arr4 = [1, 2, 3, 4, 5];
console.log(arr4.with(2, 6)); // [1, 2, 6, 4, 5]
console.log(arr4); // [1, 2, 3, 4, 5]

// spread..
//rest...





