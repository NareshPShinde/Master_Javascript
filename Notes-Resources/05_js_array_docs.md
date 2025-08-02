# JavaScript Arrays - Complete Documentation

> **Documentation Version**: v1.0

## Table of Contents
1. [Introduction](#introduction)
2. [Creating Arrays](#creating-arrays)
3. [Array Properties](#array-properties)
4. [Accessing Elements](#accessing-elements)
5. [Mutating Methods](#mutating-methods)
6. [Non-Mutating Methods](#non-mutating-methods)
7. [Iteration Methods](#iteration-methods)
8. [Search Methods](#search-methods)
9. [Transformation Methods](#transformation-methods)
10. [Utility Methods](#utility-methods)
11. [Advanced Concepts](#advanced-concepts)
12. [Best Practices](#best-practices)
13. [Quick Reference Chart](#quick-reference-chart)

## Introduction

Arrays in JavaScript are ordered collections of elements that can hold any data type. They are zero-indexed, meaning the first element is at index 0. Arrays are dynamic and can grow or shrink in size.

```javascript
// Basic array
const fruits = ['apple', 'banana', 'orange'];
const numbers = [1, 2, 3, 4, 5];
const mixed = [1, 'hello', true, null, {name: 'John'}];
```

## Creating Arrays

### Array Literal (Recommended)
```javascript
const arr1 = [];              // Empty array
const arr2 = [1, 2, 3];       // Array with elements
const arr3 = ['a', 'b', 'c']; // String array
```

### Array Constructor
**MDN Reference**: [Array() constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Array)

**Syntax**: 
```javascript
new Array()
new Array(element0)
new Array(element0, element1, /* … ,*/ elementN)
new Array(arrayLength)
```

```javascript
const arr1 = new Array();        // Empty array
const arr2 = new Array(5);       // Array with 5 empty slots
const arr3 = new Array(1, 2, 3); // Array with elements [1, 2, 3]
```

### Array.from()
**MDN Reference**: [Array.from()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)

**Syntax**: 
```javascript
Array.from(arrayLike)
Array.from(arrayLike, mapFn)
Array.from(arrayLike, mapFn, thisArg)
```

```javascript
const arr1 = Array.from('hello');           // ['h', 'e', 'l', 'l', 'o']
const arr2 = Array.from([1, 2, 3], x => x * 2); // [2, 4, 6]
const arr3 = Array.from({length: 3}, (_, i) => i); // [0, 1, 2]
```

### Array.of()
**MDN Reference**: [Array.of()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of)

**Syntax**: 
```javascript
Array.of()
Array.of(element0)
Array.of(element0, element1, /* … ,*/ elementN)
```

```javascript
const arr1 = Array.of(7);       // [7]
const arr2 = Array.of(1, 2, 3); // [1, 2, 3]
```

## Array Properties

### length
**MDN Reference**: [Array.prototype.length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length)

**Syntax**: 
```javascript
arr.length
```

Returns or sets the number of elements in an array.

```javascript
const arr = [1, 2, 3, 4, 5];
console.log(arr.length); // 5

arr.length = 3; // Truncates array to [1, 2, 3]
arr.length = 5; // Extends array to [1, 2, 3, undefined, undefined]
```

## Accessing Elements

### at()
**MDN Reference**: [Array.prototype.at()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at)

**Syntax**: 
```javascript
arr.at(index)
```

```javascript
const fruits = ['apple', 'banana', 'orange'];

// Accessing by index
console.log(fruits[0]);  // 'apple'
console.log(fruits[1]);  // 'banana'
console.log(fruits[-1]); // undefined (negative indices don't work)

// Using at() method (ES2022)
console.log(fruits.at(0));  // 'apple'
console.log(fruits.at(-1)); // 'orange' (last element)
console.log(fruits.at(-2)); // 'banana' (second to last)
```

## Mutating Methods

These methods modify the original array.

### push()
**MDN Reference**: [Array.prototype.push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)

**Syntax**: 
```javascript
arr.push()
arr.push(element0)
arr.push(element0, element1, /* … ,*/ elementN)
```

Adds elements to the end of an array.

```javascript
const arr = [1, 2, 3];
arr.push(4);        // Returns new length: 4
arr.push(5, 6, 7);  // Returns new length: 7
console.log(arr);   // [1, 2, 3, 4, 5, 6, 7]
```

### pop()
**MDN Reference**: [Array.prototype.pop()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)

**Syntax**: 
```javascript
arr.pop()
```

Removes and returns the last element.

```javascript
const arr = [1, 2, 3, 4];
const last = arr.pop(); // Returns 4
console.log(arr);       // [1, 2, 3]
```

### unshift()
**MDN Reference**: [Array.prototype.unshift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)

**Syntax**: 
```javascript
arr.unshift()
arr.unshift(element0)
arr.unshift(element0, element1, /* … ,*/ elementN)
```

Adds elements to the beginning of an array.

```javascript
const arr = [3, 4, 5];
arr.unshift(1, 2); // Returns new length: 5
console.log(arr);  // [1, 2, 3, 4, 5]
```

### shift()
**MDN Reference**: [Array.prototype.shift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)

**Syntax**: 
```javascript
arr.shift()
```

Removes and returns the first element.

```javascript
const arr = [1, 2, 3, 4];
const first = arr.shift(); // Returns 1
console.log(arr);          // [2, 3, 4]
```

### splice()
**MDN Reference**: [Array.prototype.splice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

**Syntax**: 
```javascript
arr.splice(start)
arr.splice(start, deleteCount)
arr.splice(start, deleteCount, item1)
arr.splice(start, deleteCount, item1, item2, /* …, */ itemN)
```

Changes array by removing/replacing existing elements and/or adding new elements.

```javascript
const arr = [1, 2, 3, 4, 5];

// Remove elements
arr.splice(1, 2);        // Removes 2 elements starting at index 1
console.log(arr);        // [1, 4, 5]

// Replace elements
arr.splice(1, 1, 'a');   // Replace 1 element at index 1 with 'a'
console.log(arr);        // [1, 'a', 5]

// Insert elements
arr.splice(2, 0, 'b', 'c'); // Insert 'b', 'c' at index 2
console.log(arr);           // [1, 'a', 'b', 'c', 5]
```

### reverse()
**MDN Reference**: [Array.prototype.reverse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)

**Syntax**: 
```javascript
arr.reverse()
```

Reverses an array in place.

```javascript
const arr = [1, 2, 3, 4, 5];
arr.reverse();
console.log(arr); // [5, 4, 3, 2, 1]
```

### sort()
**MDN Reference**: [Array.prototype.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

**Syntax**: 
```javascript
arr.sort()
arr.sort(compareFn)
```

Sorts elements in place.

```javascript
const arr1 = ['banana', 'apple', 'cherry'];
arr1.sort();
console.log(arr1); // ['apple', 'banana', 'cherry']

const arr2 = [10, 5, 40, 25, 1000, 1];
arr2.sort((a, b) => a - b); // Numeric sort
console.log(arr2); // [1, 5, 10, 25, 40, 1000]

// Descending order
arr2.sort((a, b) => b - a);
console.log(arr2); // [1000, 40, 25, 10, 5, 1]
```

### fill()
**MDN Reference**: [Array.prototype.fill()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill)

**Syntax**: 
```javascript
arr.fill(value)
arr.fill(value, start)
arr.fill(value, start, end)
```

Fills all or part of an array with a static value.

```javascript
const arr = [1, 2, 3, 4, 5];
arr.fill(0);           // [0, 0, 0, 0, 0]
arr.fill(9, 2, 4);     // [0, 0, 9, 9, 0]
```

### copyWithin()
**MDN Reference**: [Array.prototype.copyWithin()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin)

**Syntax**: 
```javascript
arr.copyWithin(target)
arr.copyWithin(target, start)
arr.copyWithin(target, start, end)
```

Copies part of an array to another location in the same array.

```javascript
const arr = [1, 2, 3, 4, 5];
arr.copyWithin(0, 3, 4); // Copy element at index 3 to index 0
console.log(arr);        // [4, 2, 3, 4, 5]
```

## Non-Mutating Methods

These methods return new arrays or values without modifying the original.

### concat()
**MDN Reference**: [Array.prototype.concat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)

**Syntax**: 
```javascript
arr.concat()
arr.concat(value0)
arr.concat(value0, value1, /* … ,*/ valueN)
```

Merges arrays and returns a new array.

```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Combine arrays
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]

// Copy array
const copy = [...arr1];

// Add elements
const extended = [...arr1, 4, 5, 6];

// Function arguments
function sum(a, b, c) {
    return a + b + c;
}
console.log(sum(...arr1)); // 6
```

### Multi-dimensional Arrays

```javascript
// 2D Array
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix[1][2]); // 6

// Initialize 2D array
const rows = 3, cols = 4;
const grid = Array(rows).fill(null).map(() => Array(cols).fill(0));

// Iterate through 2D array
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]);
    }
}
```

## Best Practices

### Performance Considerations

```javascript
// Prefer push() over unshift() for better performance
// push() is O(1), unshift() is O(n)

// Use appropriate method for the task
const numbers = [1, 2, 3, 4, 5];

// For simple iterations without return value
numbers.forEach(num => console.log(num));

// For transformations
const doubled = numbers.map(num => num * 2);

// For filtering
const evens = numbers.filter(num => num % 2 === 0);

// For finding single element
const found = numbers.find(num => num > 3);
```

### Avoiding Common Pitfalls

```javascript
// 1. Modifying array during iteration
const arr = [1, 2, 3, 4, 5];

// Bad: can skip elements
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        arr.splice(i, 1);
        i--; // Need to adjust index
    }
}

// Good: iterate backwards or use filter
const filtered = arr.filter(x => x % 2 !== 0);

// 2. Array equality comparison
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
console.log(arr1 === arr2); // false (different references)

// Use JSON.stringify for simple arrays (not recommended for complex cases)
console.log(JSON.stringify(arr1) === JSON.stringify(arr2)); // true

// Or use a utility function
function arraysEqual(a, b) {
    return a.length === b.length && a.every((val, i) => val === b[i]);
}

// 3. Sorting numbers
const numbers = [10, 5, 40, 25, 1000, 1];
console.log(numbers.sort()); // ['1', '10', '1000', '25', '40', '5'] - Wrong!
console.log(numbers.sort((a, b) => a - b)); // [1, 5, 10, 25, 40, 1000] - Correct!
```

### Functional Programming Patterns

```javascript
// Method chaining
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = numbers
    .filter(x => x % 2 === 0)     // Get even numbers
    .map(x => x * 2)              // Double them
    .reduce((sum, x) => sum + x, 0); // Sum them up

console.log(result); // 60

// Immutable operations
const originalArray = [1, 2, 3];

// Instead of push (mutating)
const newArray = [...originalArray, 4];

// Instead of splice (mutating)
const removed = originalArray.slice(0, 1).concat(originalArray.slice(2));

// Instead of sort (mutating)
const sorted = [...originalArray].sort();
```

### Memory Management

```javascript
// Clear references to large arrays when done
let largeArray = new Array(1000000).fill(0);
// ... use largeArray
largeArray = null; // Help garbage collector

// Be careful with closures capturing arrays
function createHandler(arr) {
    return function() {
        // This closure keeps reference to entire array
        console.log(arr[0]);
    };
}

// Better: extract only what you need
function createHandler(firstElement) {
    return function() {
        console.log(firstElement);
    };
}
```

## Quick Reference Chart

### Method Categories Overview

| Category | Methods | Purpose | Returns | Mutates |
|----------|---------|---------|---------|---------|
| **Adding/Removing** | `push()`, `pop()`, `unshift()`, `shift()`, `splice()` | Add or remove elements | Length or removed elements | ✅ Yes |
| **Searching** | `find()`, `findIndex()`, `indexOf()`, `includes()` | Find elements or indices | Element, index, or boolean | ❌ No |
| **Iteration** | `forEach()`, `map()`, `filter()`, `reduce()` | Process each element | Varies by method | ❌ No |
| **Transformation** | `slice()`, `concat()`, `flat()`, `flatMap()` | Create new arrays | New array | ❌ No |
| **Testing** | `every()`, `some()` | Test array conditions | Boolean | ❌ No |
| **Sorting** | `sort()`, `reverse()` | Reorder elements | Same array | ✅ Yes |

### Common Use Cases Quick Reference

| Task | Method | Example |
|------|--------|---------|
| Add to end | `push()` | `arr.push(item)` |
| Add to beginning | `unshift()` | `arr.unshift(item)` |
| Remove from end | `pop()` | `const last = arr.pop()` |
| Remove from beginning | `shift()` | `const first = arr.shift()` |
| Copy array | `slice()` or `[...arr]` | `const copy = arr.slice()` |
| Transform all elements | `map()` | `arr.map(x => x * 2)` |
| Filter elements | `filter()` | `arr.filter(x => x > 0)` |
| Find single element | `find()` | `arr.find(x => x.id === 5)` |
| Check if element exists | `includes()` | `arr.includes('apple')` |
| Sum/aggregate | `reduce()` | `arr.reduce((sum, x) => sum + x, 0)` |
| Sort numbers | `sort()` | `arr.sort((a, b) => a - b)` |
| Check all elements | `every()` | `arr.every(x => x > 0)` |
| Check any element | `some()` | `arr.some(x => x > 10)` |

### Performance Chart

| Operation | Time Complexity | Best Method | Notes |
|-----------|----------------|-------------|-------|
| Add to end | O(1) | `push()` | Fastest insertion |
| Add to beginning | O(n) | `unshift()` | Slower, shifts all elements |
| Remove from end | O(1) | `pop()` | Fastest removal |
| Remove from beginning | O(n) | `shift()` | Slower, shifts all elements |
| Search by value | O(n) | `find()`, `includes()` | Linear search |
| Search by index | O(1) | `arr[index]` | Direct access |
| Sort | O(n log n) | `sort()` | Built-in Timsort |
| Copy | O(n) | `slice()`, `[...arr]` | Must copy all elements |

### Method Return Values

| Method | Returns | Example Return |
|--------|---------|----------------|
| `push()` | New length | `5` |
| `pop()` | Removed element | `'apple'` |
| `shift()` | Removed element | `1` |
| `unshift()` | New length | `6` |
| `splice()` | Array of removed elements | `[2, 3]` |
| `slice()` | New array | `[1, 2, 3]` |
| `concat()` | New array | `[1, 2, 3, 4]` |
| `join()` | String | `'a,b,c'` |
| `map()` | New array | `[2, 4, 6]` |
| `filter()` | New array | `[2, 4]` |
| `find()` | Element or undefined | `{id: 1}` |
| `findIndex()` | Index or -1 | `2` |
| `indexOf()` | Index or -1 | `1` |
| `includes()` | Boolean | `true` |
| `every()` | Boolean | `false` |
| `some()` | Boolean | `true` |
| `reduce()` | Accumulated value | `15` |
| `sort()` | Same array (sorted) | `[1, 2, 3]` |
| `reverse()` | Same array (reversed) | `[3, 2, 1]` |

### Memory Impact

| Category | Memory Usage | Best Practices |
|----------|-------------|----------------|
| **Mutating Methods** | Low (modify in place) | Use when you don't need original |
| **Non-mutating Methods** | Higher (create copies) | Use for immutable programming |
| **Large Arrays** | High memory usage | Consider streaming or chunking |
| **Nested Arrays** | Shallow vs Deep copy | Use `JSON.parse(JSON.stringify())` for deep copy |

## Conclusion

JavaScript arrays are powerful and flexible data structures with a rich set of methods for manipulation, transformation, and querying. Understanding when to use each method and their performance characteristics will help you write more efficient and maintainable code.

**Key takeaways:**
- Use array literals `[]` for creating arrays
- Understand the difference between mutating and non-mutating methods
- Choose the right iteration method for your use case
- Be aware of performance implications
- Practice functional programming patterns for cleaner code
- Always consider edge cases like empty arrays and sparse arrays
- Use the reference chart above for quick method lookup during development = [4, 5, 6];
const arr3 = [7, 8, 9];

const merged = arr1.concat(arr2, arr3);
console.log(merged); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### slice()
**MDN Reference**: [Array.prototype.slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

**Syntax**: 
```javascript
arr.slice()
arr.slice(start)
arr.slice(start, end)
```

Returns a shallow copy of a portion of an array.

```javascript
const arr = [1, 2, 3, 4, 5];
const sliced1 = arr.slice(1, 4);    // [2, 3, 4]
const sliced2 = arr.slice(2);       // [3, 4, 5]
const sliced3 = arr.slice(-2);      // [4, 5]
const sliced4 = arr.slice(-3, -1);  // [3, 4]
```

### join()
**MDN Reference**: [Array.prototype.join()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

**Syntax**: 
```javascript
arr.join()
arr.join(separator)
```

Joins all elements into a string.

```javascript
const arr = ['apple', 'banana', 'cherry'];
const str1 = arr.join();      // 'apple,banana,cherry'
const str2 = arr.join(' - '); // 'apple - banana - cherry'
const str3 = arr.join('');    // 'applebananacherry'
```

### toString()
**MDN Reference**: [Array.prototype.toString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toString)

**Syntax**: 
```javascript
arr.toString()
```

Returns a string representation of the array.

```javascript
const arr = [1, 2, 3, 4, 5];
console.log(arr.toString()); // '1,2,3,4,5'
```

### toLocaleString()
**MDN Reference**: [Array.prototype.toLocaleString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toLocaleString)

**Syntax**: 
```javascript
arr.toLocaleString()
arr.toLocaleString(locales)
arr.toLocaleString(locales, options)
```

Returns a localized string representation.

```javascript
const arr = [1234.5, new Date(), 'hello'];
console.log(arr.toLocaleString()); // Localized format
```

## Iteration Methods

### forEach()
**MDN Reference**: [Array.prototype.forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

**Syntax**: 
```javascript
arr.forEach(callbackFn)
arr.forEach(callbackFn, thisArg)

// callbackFn: (element, index, array) => { /* … */ }
```

Executes a function for each array element.

```javascript
const arr = [1, 2, 3, 4, 5];
arr.forEach((element, index, array) => {
    console.log(`Index ${index}: ${element}`);
});
```

### map()
**MDN Reference**: [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

**Syntax**: 
```javascript
arr.map(callbackFn)
arr.map(callbackFn, thisArg)

// callbackFn: (element, index, array) => { /* … */ }
```

Creates a new array with results of calling a function for every element.

```javascript
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(x => x * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

const objects = numbers.map((num, index) => ({
    value: num,
    index: index
}));
```

### filter()
**MDN Reference**: [Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

**Syntax**: 
```javascript
arr.filter(callbackFn)
arr.filter(callbackFn, thisArg)

// callbackFn: (element, index, array) => { /* … */ }
```

Creates a new array with elements that pass a test.

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evens = numbers.filter(x => x % 2 === 0);
console.log(evens); // [2, 4, 6, 8, 10]

const longWords = ['cat', 'elephant', 'dog', 'hippopotamus']
    .filter(word => word.length > 3);
console.log(longWords); // ['elephant', 'hippopotamus']
```

### reduce()
**MDN Reference**: [Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

**Syntax**: 
```javascript
arr.reduce(callbackFn)
arr.reduce(callbackFn, initialValue)

// callbackFn: (accumulator, currentValue, currentIndex, array) => { /* … */ }
```

Executes a reducer function on each element, resulting in a single value.

```javascript
const numbers = [1, 2, 3, 4, 5];

// Sum
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 15

// Product
const product = numbers.reduce((acc, curr) => acc * curr, 1);
console.log(product); // 120

// Find maximum
const max = numbers.reduce((acc, curr) => Math.max(acc, curr));
console.log(max); // 5

// Group by property
const people = [
    {name: 'John', age: 25},
    {name: 'Jane', age: 30},
    {name: 'Bob', age: 25}
];

const groupedByAge = people.reduce((acc, person) => {
    const age = person.age;
    if (!acc[age]) acc[age] = [];
    acc[age].push(person);
    return acc;
}, {});
```

### reduceRight()
**MDN Reference**: [Array.prototype.reduceRight()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight)

**Syntax**: 
```javascript
arr.reduceRight(callbackFn)
arr.reduceRight(callbackFn, initialValue)

// callbackFn: (accumulator, currentValue, currentIndex, array) => { /* … */ }
```

Like reduce(), but starts from the right.

```javascript
const arr = ['a', 'b', 'c', 'd'];
const result = arr.reduceRight((acc, curr) => acc + curr);
console.log(result); // 'dcba'
```

## Search Methods

### find()
**MDN Reference**: [Array.prototype.find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

**Syntax**: 
```javascript
arr.find(callbackFn)
arr.find(callbackFn, thisArg)

// callbackFn: (element, index, array) => { /* … */ }
```

Returns the first element that satisfies a testing function.

```javascript
const numbers = [1, 2, 3, 4, 5];
const found = numbers.find(x => x > 3);
console.log(found); // 4

const people = [
    {name: 'John', age: 25},
    {name: 'Jane', age: 30}
];
const person = people.find(p => p.name === 'Jane');
console.log(person); // {name: 'Jane', age: 30}
```

### findIndex()
**MDN Reference**: [Array.prototype.findIndex()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)

**Syntax**: 
```javascript
arr.findIndex(callbackFn)
arr.findIndex(callbackFn, thisArg)

// callbackFn: (element, index, array) => { /* … */ }
```

Returns the index of the first element that satisfies a testing function.

```javascript
const numbers = [1, 2, 3, 4, 5];
const index = numbers.findIndex(x => x > 3);
console.log(index); // 3
```

### findLast() and findLastIndex()
**MDN Reference**: [Array.prototype.findLast()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLast) | [Array.prototype.findLastIndex()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLastIndex)

**Syntax**: 
```javascript
arr.findLast(callbackFn)
arr.findLast(callbackFn, thisArg)

arr.findLastIndex(callbackFn)
arr.findLastIndex(callbackFn, thisArg)

// callbackFn: (element, index, array) => { /* … */ }
```

Like find() and findIndex(), but search from the end.

```javascript
const numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
const lastFound = numbers.findLast(x => x > 3);
console.log(lastFound); // 4

const lastIndex = numbers.findLastIndex(x => x > 3);
console.log(lastIndex); // 5
```

### indexOf()
**MDN Reference**: [Array.prototype.indexOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)

**Syntax**: 
```javascript
arr.indexOf(searchElement)
arr.indexOf(searchElement, fromIndex)
```

Returns the first index of a specified element.

```javascript
const arr = ['apple', 'banana', 'apple', 'cherry'];
console.log(arr.indexOf('apple'));        // 0
console.log(arr.indexOf('apple', 1));     // 2 (search from index 1)
console.log(arr.indexOf('grape'));        // -1 (not found)
```

### lastIndexOf()
**MDN Reference**: [Array.prototype.lastIndexOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf)

**Syntax**: 
```javascript
arr.lastIndexOf(searchElement)
arr.lastIndexOf(searchElement, fromIndex)
```

Returns the last index of a specified element.

```javascript
const arr = ['apple', 'banana', 'apple', 'cherry'];
console.log(arr.lastIndexOf('apple')); // 2
```

### includes()
**MDN Reference**: [Array.prototype.includes()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)

**Syntax**: 
```javascript
arr.includes(searchElement)
arr.includes(searchElement, fromIndex)
```

Checks if an array contains a specified element.

```javascript
const arr = [1, 2, 3, 4, 5];
console.log(arr.includes(3));    // true
console.log(arr.includes(6));    // false
console.log(arr.includes(3, 3)); // false (search from index 3)
```

## Transformation Methods

### flat()
**MDN Reference**: [Array.prototype.flat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)

**Syntax**: 
```javascript
arr.flat()
arr.flat(depth)
```

Creates a new array with sub-array elements concatenated.

```javascript
const arr1 = [1, 2, [3, 4]];
console.log(arr1.flat()); // [1, 2, 3, 4]

const arr2 = [1, 2, [3, 4, [5, 6]]];
console.log(arr2.flat());    // [1, 2, 3, 4, [5, 6]]
console.log(arr2.flat(2));   // [1, 2, 3, 4, 5, 6]

const arr3 = [1, [2, [3, [4, [5]]]]];
console.log(arr3.flat(Infinity)); // [1, 2, 3, 4, 5]
```

### flatMap()
**MDN Reference**: [Array.prototype.flatMap()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap)

**Syntax**: 
```javascript
arr.flatMap(callbackFn)
arr.flatMap(callbackFn, thisArg)

// callbackFn: (element, index, array) => { /* … */ }
```

Maps each element using a function, then flattens the result.

```javascript
const arr = [1, 2, 3, 4];
const result = arr.flatMap(x => [x, x * 2]);
console.log(result); // [1, 2, 2, 4, 3, 6, 4, 8]

const sentences = ['Hello world', 'How are you'];
const words = sentences.flatMap(sentence => sentence.split(' '));
console.log(words); // ['Hello', 'world', 'How', 'are', 'you']
```

## Utility Methods

### every()
**MDN Reference**: [Array.prototype.every()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

**Syntax**: 
```javascript
arr.every(callbackFn)
arr.every(callbackFn, thisArg)

// callbackFn: (element, index, array) => { /* … */ }
```

Tests whether all elements pass a test.

```javascript
const numbers = [1, 2, 3, 4, 5];
const allPositive = numbers.every(x => x > 0);
console.log(allPositive); // true

const allEven = numbers.every(x => x % 2 === 0);
console.log(allEven); // false
```

### some()
**MDN Reference**: [Array.prototype.some()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)

**Syntax**: 
```javascript
arr.some(callbackFn)
arr.some(callbackFn, thisArg)

// callbackFn: (element, index, array) => { /* … */ }
```

Tests whether at least one element passes a test.

```javascript
const numbers = [1, 2, 3, 4, 5];
const hasEven = numbers.some(x => x % 2 === 0);
console.log(hasEven); // true

const hasNegative = numbers.some(x => x < 0);
console.log(hasNegative); // false
```

### Array.isArray()
**MDN Reference**: [Array.isArray()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)

**Syntax**: 
```javascript
Array.isArray(value)
```

Checks if a value is an array.

```javascript
console.log(Array.isArray([1, 2, 3]));        // true
console.log(Array.isArray('hello'));          // false
console.log(Array.isArray({length: 3}));      // false
```

### keys(), values(), entries()
**MDN Reference**: [Array.prototype.keys()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/keys) | [Array.prototype.values()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values) | [Array.prototype.entries()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries)

**Syntax**: 
```javascript
arr.keys()
arr.values()
arr.entries()
```

Return iterators for array indices, values, and key-value pairs.

```javascript
const arr = ['a', 'b', 'c'];

// Keys
for (const key of arr.keys()) {
    console.log(key); // 0, 1, 2
}

// Values
for (const value of arr.values()) {
    console.log(value); // 'a', 'b', 'c'
}

// Entries
for (const [index, value] of arr.entries()) {
    console.log(index, value); // 0 'a', 1 'b', 2 'c'
}
```

## Advanced Concepts

### Sparse Arrays
Arrays with "holes" or missing elements.

```javascript
const sparse = [1, , , 4]; // Array with holes
console.log(sparse.length); // 4
console.log(sparse[1]);     // undefined

// Different methods handle sparse arrays differently
console.log(sparse.map(x => x * 2));      // [2, undefined, undefined, 8]
console.log(sparse.filter(x => x > 0));   // [1, 4]
sparse.forEach(x => console.log(x));      // Only logs 1 and 4
```

### Array-like Objects
Objects that have indexed properties and a length property.

```javascript
const arrayLike = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3
};

// Convert to real array
const realArray = Array.from(arrayLike);
console.log(realArray); // ['a', 'b', 'c']

// Or using spread operator
const realArray2 = [...arrayLike]; // Only works if it's iterable
```

### Destructuring Assignment
**MDN Reference**: [Destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

**Syntax**: 
```javascript
const [a, b] = array;
const [a, b, ...rest] = array;
const [a, b, c = defaultValue] = array;
```

```javascript
const arr = [1, 2, 3, 4, 5];

// Basic destructuring
const [first, second, third] = arr;
console.log(first, second, third); // 1, 2, 3

// Skip elements
const [a, , c, , e] = arr;
console.log(a, c, e); // 1, 3, 5

// Rest operator
const [head, ...tail] = arr;
console.log(head); // 1
console.log(tail); // [2, 3, 4, 5]

// Default values
const [x = 0, y = 0, z = 0] = [1, 2];
console.log(x, y, z); // 1, 2, 0
```

### Spread Operator
**MDN Reference**: [Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

**Syntax**: 
```javascript
[...iterableObj, '4', 'five', 6];
myFunction(a, ...iterableObj, b);
```

```javascript
const arr1 = [1, 2, 3];
const arr2