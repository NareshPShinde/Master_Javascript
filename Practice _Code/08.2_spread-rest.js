/* 
  -The spread (...) syntax allows an iterable, such as an array or string,
 to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected. 
 - Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element. 
 Spread syntax can be used when all elements from an object or array need to be included in a new array or object, or should be applied one-by-one in a function call's arguments list. There are three distinct places that accept the spread syntax:

Function arguments list (myFunction(a, ...iterableObj, b))
Array literals ([1, ...iterableObj, '4', 'five', 6])
Object literals ({ ...obj, key: 'value' })*/

// ...spread in function
function sum(x, y, z) {
  return x + y + z;
}
const number = [11, 22, 33];
console.log(sum(...number));

console.log(Math.max(...number));
console.log(Math.min(...number));

// spread in array literals
// copying array
const originslArr = [1, 2, 3, 4, 5];
const copyOfOriginal = [...originslArr, 6, 7, 8];
console.log(copyOfOriginal);
originslArr.push(11);
console.log(originslArr);
console.log(copyOfOriginal);

//combmig array
const fruits = ["apple", "graphs", "orange"];
const fruits1 = ["papaya", "watermelan"];
const combinedArray = [...fruits, ...fruits1];
console.log(combinedArray);

// adding element to array
const newFruits = [...fruits, "banana", "strawberry"];
console.log(newFruits);

// Conditionally adding values to an array
const isSummer = false;
const fruits_2 = ["apple", "banana", ...(isSummer ? ["watermelon"] : [])];
// ['apple', 'banana']

// spread in object literals

const obj = { a: 1, b: 2, c: 3 };
// clone
const cloneObj = { ...obj };
console.log(cloneObj);

// combing object
const obj_2 = { d: 4, f: 5 };
const combinedObj = { ...obj, ...obj_2 };
console.log(combinedObj);

// overrding properties
const obj_3 = { a: 1, b: 22, c: 33 };
const mergeObj = { x: 11, ...obj, ...obj_3 };
console.log(mergeObj);

// ==========================================================================

// ...rest
/* 
Rest syntax looks very similar to spread syntax. Essentially, it is the opposite of spread syntax. The spread syntax allows you to "expand" an array into its elements, while the rest syntax permits you to "condense" those elements into a single element.
*/

function sum(a, b, ...theRest) {
  console.log(a); // First argument
  console.log(b); // Second argument
  console.log(theRest); // Array containing all subsequent arguments
}

sum(1, 2, 3, 4, 5);
// Output:
// 1
// 2
// [3, 4, 5]

// destruncting
const [first, second, ...remaining] = [10, 20, 30, 40, 50];
console.log(first); // 10
console.log(second); // 20
console.log(remaining); // [30, 40, 50]

const { name, age, ...details } = {
  name: "Alice",
  age: 30,
  city: "NY",
  occupation: "Engineer",
};
console.log(name); // 'Alice'
console.log(age); // 30
console.log(details); // { city: 'NY', occupation: 'Engineer' }
