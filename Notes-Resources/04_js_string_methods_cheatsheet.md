# JavaScript Strings Complete Guide & Methods Cheat Sheet

## Table of Contents
1. [String Fundamentals](#string-fundamentals)
2. [String Properties](#string-properties)
3. [Character Access Methods](#character-access-methods)
4. [Extraction Methods](#extraction-methods)
5. [Case Conversion Methods](#case-conversion-methods)
6. [Whitespace Methods](#whitespace-methods)
7. [Padding Methods](#padding-methods)
8. [Repetition Method](#repetition-method)
9. [Replacement Methods](#replacement-methods)
10. [Array Conversion Methods](#array-conversion-methods)
11. [Search Methods](#search-methods)
12. [Quick Reference Summary](#quick-reference-summary)
13. [Practical Projects](#practical-projects)

## String Fundamentals

### What is a String?
A string in JavaScript is a sequence of characters used to represent text. Strings are one of the primitive data types in JavaScript and are used to store and manipulate textual data.

```javascript
// Examples of strings
const greeting = "Hello World";
const name = 'Alice';
const message = `Welcome ${name}!`;
```

### String Creation Methods

#### 1. String Literals (Recommended)
```javascript
// Single quotes
const str1 = 'Hello World';

// Double quotes  
const str2 = "Hello World";

// Template literals (backticks) - ES6
const str3 = `Hello World`;
const dynamic = `Hello ${name}, today is ${new Date().getDay()}`;
```

#### 2. String Constructor
```javascript
// Using String constructor (not recommended for primitives)
const str4 = new String("Hello World"); // Creates String object
const str5 = String("Hello World");     // Creates primitive string

// Difference demonstration
console.log(typeof str1); // "string" (primitive)
console.log(typeof str4); // "object" (String object)
console.log(str1 === str4); // false (different types)
console.log(str1 == str4);  // true (coercion happens)
```

### String Types in JavaScript

#### Primitive Strings vs String Objects
```javascript
// Primitive string (preferred)
const primitive = "Hello";
console.log(typeof primitive); // "string"

// String object (avoid unless necessary)
const object = new String("Hello");
console.log(typeof object); // "object"

// Auto-boxing: JavaScript temporarily converts primitives to objects for method calls
console.log(primitive.length); // 5 (primitive acts like object momentarily)
```

### String Immutability

#### What Does Immutable Mean?
**Strings in JavaScript are immutable** - once created, they cannot be changed. String methods return new strings rather than modifying the original.

```javascript
let str = "Hello";
console.log(str); // "Hello"

// This doesn't change the original string
str.toUpperCase();
console.log(str); // Still "Hello"

// To change the string, you must reassign
str = str.toUpperCase();
console.log(str); // "HELLO"

// Attempting to modify directly has no effect
str[0] = "h";
console.log(str); // Still "HELLO" (unchanged)
```

#### Why Are Strings Immutable? 🤔

##### 1. **Memory Optimization & String Interning**
```javascript
// Multiple variables can safely reference the same string in memory
const greeting1 = "Hello";
const greeting2 = "Hello";
const greeting3 = "Hello";

// All three variables point to the same memory location
console.log(greeting1 === greeting2); // true (same reference)
console.log(greeting2 === greeting3); // true (same reference)

// If strings were mutable, changing one would affect all references
// This would be catastrophic!
```

**Behind the scenes:**
- JavaScript engine creates only **one copy** of "Hello" in memory
- All variables reference this single copy
- This saves significant memory when the same strings are used repeatedly

##### 2. **Security & Predictability**
```javascript
// Immutability prevents accidental modifications
function processUserInput(username) {
  // If strings were mutable, this could modify the original
  const cleaned = username.trim().toLowerCase();
  
  // Original username remains unchanged - this is safe!
  console.log("Original:", username);
  console.log("Cleaned:", cleaned);
  
  return cleaned;
}

const user = "  JOHN_DOE  ";
const result = processUserInput(user);
console.log("User variable still:", user); // "  JOHN_DOE  " (unchanged)
```

##### 3. **Thread Safety**
```javascript
// In environments with multiple threads (like Node.js Workers)
// Immutable strings can be safely shared between threads
// without synchronization mechanisms

const sharedString = "Shared Data";
// Multiple threads can read this safely without locks
// because it cannot be modified
```

##### 4. **Hash Table Optimization**
```javascript
// Objects use string keys - immutability allows efficient hashing
const user = {
  name: "John",      // "name" string can be hashed once
  age: 25,
  email: "john@example.com"
};

// If strings were mutable, hash values would need recalculation
// every time a key might change - very expensive!
```

##### 5. **Functional Programming Benefits**
```javascript
// Immutability enables safe function composition
const transform = (str) => str.toUpperCase().trim().replace(/\s+/g, '_');

const input = "  hello world  ";
const result1 = transform(input);
const result2 = transform(input); // Safe to call multiple times

console.log(input);   // "  hello world  " (never changes)
console.log(result1); // "HELLO_WORLD"
console.log(result2); // "HELLO_WORLD" (identical result)
```

#### Performance Implications

##### Memory Usage
```javascript
// ❌ Inefficient: Creating many intermediate strings
let result = "";
for (let i = 0; i < 1000; i++) {
  result += "a"; // Creates new string each time!
}
// This creates 1000 string objects in memory

// ✅ Efficient: Use array and join for concatenation
const parts = [];
for (let i = 0; i < 1000; i++) {
  parts.push("a");
}
const result = parts.join(""); // Single string creation
```

##### String Pool Demonstration
```javascript
// String literals are automatically interned
const str1 = "JavaScript";
const str2 = "JavaScript";
console.log(str1 === str2); // true (same memory location)

// Runtime string creation might not be interned
const str3 = "Java" + "Script";
console.log(str1 === str3); // Usually true (engine optimization)

const str4 = ["Java", "Script"].join("");
console.log(str1 === str4); // Might be false (not interned)

// Performance benefit: comparison is O(1) for interned strings
// instead of O(n) character-by-character comparison
```

#### Comparison with Mutable Alternatives

##### JavaScript Arrays (Mutable)
```javascript
const arr = [1, 2, 3];
arr.push(4); // Modifies original array
console.log(arr); // [1, 2, 3, 4] - changed!

// If strings worked like arrays:
// const str = "Hello";
// str.push("!"); // This would modify the original - dangerous!
```

##### Other Languages' Approaches
```javascript
// Python: Strings are immutable (like JavaScript)
// Java: Strings are immutable, StringBuilder is mutable
// C++: std::string is mutable
// C#: string is immutable, StringBuilder is mutable

// JavaScript's approach aligns with functional programming principles
```

#### Practical Examples of Why Immutability Helps

##### Example 1: Configuration Management
```javascript
const API_BASE_URL = "https://api.example.com";

function makeRequest(endpoint) {
  // We can trust that API_BASE_URL hasn't been modified
  const url = API_BASE_URL + endpoint;
  return fetch(url);
}

// If strings were mutable, some code could accidentally change API_BASE_URL
// causing all subsequent requests to fail
```

##### Example 2: Caching Safety
```javascript
const cache = new Map();

function expensiveStringOperation(input) {
  // Safe to use string as cache key because it can't change
  if (cache.has(input)) {
    return cache.get(input);
  }
  
  const result = input.toUpperCase().trim().replace(/\s+/g, '_');
  cache.set(input, result);
  return result;
}

// If strings were mutable, the cache key could change after storing,
// making the cached value unretrievable
```

##### Example 3: Event System Safety
```javascript
const eventListeners = {};

function addEventListener(eventName, callback) {
  // Safe to use eventName as key - it won't change
  if (!eventListeners[eventName]) {
    eventListeners[eventName] = [];
  }
  eventListeners[eventName].push(callback);
}

// Immutability guarantees the event system remains stable
```

#### Memory Management Deep Dive

```javascript
// Demonstration of string interning and memory efficiency
function demonstrateStringInterning() {
  // These all reference the same memory location
  const strings = [
    "Hello World",
    "Hello World", 
    "Hello" + " " + "World", // Engine optimizes this
    `Hello World`
  ];
  
  // Check if they're all the same reference
  const allSame = strings.every(str => str === strings[0]);
  console.log("All strings share memory:", allSame); // Likely true
  
  // Memory usage is minimized due to interning
  console.log("Memory locations:", strings.map(s => s === strings[0]));
}

demonstrateStringInterning();
```

#### Best Practices with Immutable Strings

```javascript
// ✅ Efficient string building
function buildHTML(items) {
  const parts = ["<ul>"];
  items.forEach(item => {
    parts.push(`<li>${item}</li>`);
  });
  parts.push("</ul>");
  return parts.join("");
}

// ❌ Inefficient string building
function buildHTMLBad(items) {
  let html = "<ul>";
  items.forEach(item => {
    html += `<li>${item}</li>`; // Creates new string each time!
  });
  html += "</ul>";
  return html;
}

// ✅ Safe string operations
function processText(text) {
  return text
    .trim()
    .toLowerCase()
    .replace(/[^\w\s]/g, '')
    .split(/\s+/)
    .filter(word => word.length > 2)
    .join(' ');
  // Each method returns a new string - original is safe
}
```

**Summary**: String immutability in JavaScript provides memory efficiency, security, predictability, and enables powerful optimization techniques. While it requires careful consideration for performance-critical string operations, the benefits far outweigh the costs in most applications.

### Memory Storage Behind the Scenes

#### String Interning (String Pool)
JavaScript engines optimize string storage using string interning:

```javascript
// String literals with same value reference the same memory location
const str1 = "Hello";
const str2 = "Hello";
console.log(str1 === str2); // true (same reference)

// Dynamically created strings might not be interned
const str3 = "Hel" + "lo";
console.log(str1 === str3); // true (engine optimizes this)

const dynamic = "Hello".substring(0, 5);
console.log(str1 === dynamic); // Might be true or false (engine dependent)
```

#### UTF-16 Encoding
JavaScript strings are stored using UTF-16 encoding:

```javascript
// Most characters take 1 code unit (16 bits)
console.log("A".length); // 1
console.log("😀".length); // 2 (emoji needs 2 code units - surrogate pair)

// Working with Unicode
const emoji = "😀";
console.log(emoji.charCodeAt(0)); // 55357 (high surrogate)
console.log(emoji.charCodeAt(1)); // 56832 (low surrogate)
```

### Template Literals Deep Dive

#### Expression Evaluation
Template literals evaluate expressions at runtime:

```javascript
const name = "Alice";
const age = 25;

// Expression evaluation
const info = `Name: ${name}, Age: ${age}, Next year: ${age + 1}`;
console.log(info); // "Name: Alice, Age: 25, Next year: 26"

// Function calls in template literals
const formatName = (name) => name.toUpperCase();
const formatted = `Hello ${formatName(name)}!`;
console.log(formatted); // "Hello ALICE!"

// Complex expressions
const user = { name: "Bob", scores: [85, 92, 78] };
const summary = `${user.name}'s average: ${user.scores.reduce((a, b) => a + b) / user.scores.length}`;
console.log(summary); // "Bob's average: 85"
```

#### Multiline Strings
```javascript
// Template literals preserve line breaks
const multiline = `
  This is line 1
  This is line 2
  This is line 3
`;

// Versus concatenation
const concatenated = "This is line 1\n" +
                    "This is line 2\n" +
                    "This is line 3";
```

#### Tagged Template Literals
```javascript
// Advanced: Tagged template literals for custom processing
function highlight(strings, ...values) {
  return strings.reduce((result, string, i) => {
    const value = values[i] ? `<mark>${values[i]}</mark>` : '';
    return result + string + value;
  }, '');
}

const name = "JavaScript";
const subject = "programming";
const highlighted = highlight`Learning ${name} for ${subject} is fun!`;
// Result: "Learning <mark>JavaScript</mark> for <mark>programming</mark> is fun!"
```

### String Comparison and Equality

#### Comparison Rules
```javascript
// Lexicographic comparison (dictionary order)
console.log("apple" < "banana"); // true
console.log("Apple" < "apple");  // true (uppercase comes first in UTF-16)

// Case-insensitive comparison
const str1 = "Apple";
const str2 = "apple";
console.log(str1.toLowerCase() === str2.toLowerCase()); // true

// Locale-sensitive comparison
console.log("ä".localeCompare("z", 'de')); // -1 (ä comes before z in German)
```

### Escape Sequences
```javascript
// Common escape sequences
const escaped = "He said, \"Hello!\"";           // "He said, "Hello!""
const newline = "Line 1\nLine 2";                // Line break
const tab = "Name:\tJohn";                       // Tab character
const backslash = "Path: C:\\Users\\John";       // Literal backslash
const unicode = "\u0048\u0065\u006C\u006C\u006F"; // "Hello" using Unicode

// Raw strings (template literals don't interpret escapes in some contexts)
console.log(String.raw`C:\Users\John`); // "C:\Users\John" (no escape processing)
```

## String Properties

### `.length`
Returns the length of a string.
```javascript
const str = "Hello World";
console.log(str.length); // 11
```

## Character Access Methods

### `charAt(index)`
Returns the character at the specified index.
```javascript
const str = "Hello";
console.log(str.charAt(0)); // "H"
console.log(str.charAt(4)); // "o"
console.log(str.charAt(10)); // "" (empty string if index out of range)
```

### `charCodeAt(index)`
Returns the Unicode value of the character at the specified index.
```javascript
const str = "Hello";
console.log(str.charCodeAt(0)); // 72 (Unicode for 'H')
console.log(str.charCodeAt(1)); // 101 (Unicode for 'e')
```

### `at(index)`
Returns the character at the specified index (supports negative indexing).
```javascript
const str = "Hello";
console.log(str.at(0)); // "H"
console.log(str.at(-1)); // "o" (last character)
console.log(str.at(-2)); // "l" (second to last)
```

### `str[index]` (Bracket notation)
Returns the character at the specified index.
```javascript
const str = "Hello";
console.log(str[0]); // "H"
console.log(str[4]); // "o"
console.log(str[10]); // undefined (if index out of range)
```

## Extraction Methods

### `slice(start, end)`
Extracts a section of the string and returns it as a new string.
```javascript
const str = "Hello World";
console.log(str.slice(0, 5)); // "Hello"
console.log(str.slice(6)); // "World"
console.log(str.slice(-5)); // "World" (negative indexing)
console.log(str.slice(-5, -1)); // "Worl"
```

### `substring(start, end)`
Similar to slice, but doesn't accept negative indices.
```javascript
const str = "Hello World";
console.log(str.substring(0, 5)); // "Hello"
console.log(str.substring(6)); // "World"
console.log(str.substring(6, 11)); // "World"
// Negative values are treated as 0
console.log(str.substring(-5)); // "Hello World"
```

### `substr(start, length)` ⚠️ **Deprecated**
Extracts characters from start index for a given length.
```javascript
const str = "Hello World";
console.log(str.substr(0, 5)); // "Hello"
console.log(str.substr(6, 5)); // "World"
console.log(str.substr(-5, 5)); // "World"
```

## Case Conversion Methods

### `toUpperCase()`
Converts string to uppercase.
```javascript
const str = "Hello World";
console.log(str.toUpperCase()); // "HELLO WORLD"
```

### `toLowerCase()`
Converts string to lowercase.
```javascript
const str = "Hello World";
console.log(str.toLowerCase()); // "hello world"
```

## Whitespace Methods

### `trim()`
Removes whitespace from both ends of the string.
```javascript
const str = "  Hello World  ";
console.log(str.trim()); // "Hello World"
```

### `trimStart()` / `trimLeft()`
Removes whitespace from the beginning of the string.
```javascript
const str = "  Hello World  ";
console.log(str.trimStart()); // "Hello World  "
```

### `trimEnd()` / `trimRight()`
Removes whitespace from the end of the string.
```javascript
const str = "  Hello World  ";
console.log(str.trimEnd()); // "  Hello World"
```

## Padding Methods

### `padStart(targetLength, padString)`
Pads the string from the start to reach the target length.
```javascript
const str = "5";
console.log(str.padStart(3, "0")); // "005"
console.log(str.padStart(4, "abc")); // "abc5"
```

### `padEnd(targetLength, padString)`
Pads the string from the end to reach the target length.
```javascript
const str = "5";
console.log(str.padEnd(3, "0")); // "500"
console.log(str.padEnd(4, "abc")); // "5abc"
```

## Repetition Method

### `repeat(count)`
Returns a new string with the specified number of copies.
```javascript
const str = "Hello";
console.log(str.repeat(3)); // "HelloHelloHello"
console.log("*".repeat(5)); // "*****"
```

## Replacement Methods

### `replace(searchValue, replaceValue)`
Replaces the **first** occurrence of searchValue with replaceValue.
```javascript
const str = "Hello World Hello";
console.log(str.replace("Hello", "Hi")); // "Hi World Hello"
console.log(str.replace(/Hello/g, "Hi")); // "Hi World Hi" (using regex for global replace)
```

### `replaceAll(searchValue, replaceValue)`
Replaces **all** occurrences of searchValue with replaceValue.
```javascript
const str = "Hello World Hello";
console.log(str.replaceAll("Hello", "Hi")); // "Hi World Hi"
console.log(str.replaceAll("l", "L")); // "HeLLo WorLd HeLLo"
```

## Array Conversion Methods

### `split(separator, limit)` → Returns Array
Splits the string into an array of substrings.
```javascript
const str = "apple,banana,orange";
console.log(str.split(",")); // ["apple", "banana", "orange"]
console.log(str.split(",", 2)); // ["apple", "banana"]
console.log("Hello".split("")); // ["H", "e", "l", "l", "o"]
console.log("Hello World".split(" ")); // ["Hello", "World"]
```

### Array `join(separator)` → Returns String
**Note:** This is an Array method that returns a string.
```javascript
const arr = ["apple", "banana", "orange"];
console.log(arr.join(",")); // "apple,banana,orange"
console.log(arr.join(" - ")); // "apple - banana - orange"
console.log(arr.join("")); // "applebananaorange"
```

## Search Methods

### `indexOf(searchValue, fromIndex)`
Returns the index of the first occurrence of searchValue.
```javascript
const str = "Hello World Hello";
console.log(str.indexOf("Hello")); // 0
console.log(str.indexOf("Hello", 1)); // 12
console.log(str.indexOf("xyz")); // -1 (not found)
```

### `lastIndexOf(searchValue, fromIndex)`
Returns the index of the last occurrence of searchValue.
```javascript
const str = "Hello World Hello";
console.log(str.lastIndexOf("Hello")); // 12
console.log(str.lastIndexOf("o")); // 16
console.log(str.lastIndexOf("xyz")); // -1 (not found)
```

### `search(regexp)`
Searches for a match using a regular expression and returns the index.
```javascript
const str = "Hello World";
console.log(str.search("World")); // 6
console.log(str.search(/world/i)); // 6 (case insensitive)
console.log(str.search("xyz")); // -1 (not found)
```

### `match(regexp)`
Matches against a regular expression and returns an array of matches.
```javascript
const str = "Hello World Hello";
console.log(str.match("Hello")); // ["Hello", index: 0, input: "Hello World Hello", groups: undefined]
console.log(str.match(/Hello/g)); // ["Hello", "Hello"]
console.log(str.match(/xyz/)); // null (not found)
```

### `matchAll(regexp)`
Returns an iterator of all matches with capturing groups.
```javascript
const str = "Hello World Hello";
const matches = str.matchAll(/Hello/g);
console.log([...matches]); // Array of match objects
// Each match: ["Hello", index: position, input: original string, groups: undefined]
```

### `includes(searchString, position)`
Returns true if the string contains the searchString.
```javascript
const str = "Hello World";
console.log(str.includes("World")); // true
console.log(str.includes("world")); // false (case sensitive)
console.log(str.includes("Hello", 1)); // false (starts searching from index 1)
```

### `startsWith(searchString, position)`
Returns true if the string starts with the searchString.
```javascript
const str = "Hello World";
console.log(str.startsWith("Hello")); // true
console.log(str.startsWith("World")); // false
console.log(str.startsWith("World", 6)); // true (starts checking from index 6)
```

### `endsWith(searchString, length)`
Returns true if the string ends with the searchString.
```javascript
const str = "Hello World";
console.log(str.endsWith("World")); // true
console.log(str.endsWith("Hello")); // false
console.log(str.endsWith("Hello", 5)); // true (considers only first 5 characters)
```

## Quick Reference Summary

| Method | Purpose | Returns |
|--------|---------|---------|
| `length` | Get string length | Number |
| `charAt()` | Get character at index | String |
| `slice()` | Extract substring | String |
| `toUpperCase()` | Convert to uppercase | String |
| `toLowerCase()` | Convert to lowercase | String |
| `trim()` | Remove whitespace | String |
| `replace()` | Replace first occurrence | String |
| `replaceAll()` | Replace all occurrences | String |
| `split()` | Convert to array | Array |
| `indexOf()` | Find first index | Number (-1 if not found) |
| `includes()` | Check if contains | Boolean |
| `startsWith()` | Check if starts with | Boolean |
| `endsWith()` | Check if ends with | Boolean |

## Practical Projects

### Project 1: Text Analyzer Tool
```javascript
class TextAnalyzer {
  constructor(text) {
    this.text = text;
  }
  
  // Word count
  getWordCount() {
    return this.text.trim().split(/\s+/).filter(word => word.length > 0).length;
  }
  
  // Character count (with and without spaces)
  getCharCount(includeSpaces = true) {
    return includeSpaces ? this.text.length : this.text.replace(/\s/g, '').length;
  }
  
  // Most frequent words
  getMostFrequentWords(limit = 5) {
    const words = this.text.toLowerCase()
      .replace(/[^\w\s]/g, '')
      .split(/\s+/)
      .filter(word => word.length > 2);
    
    const frequency = {};
    words.forEach(word => frequency[word] = (frequency[word] || 0) + 1);
    
    return Object.entries(frequency)
      .sort(([,a], [,b]) => b - a)
      .slice(0, limit)
      .map(([word, count]) => ({ word, count }));
  }
  
  // Reading time estimation
  getReadingTime() {
    const wordsPerMinute = 200;
    const words = this.getWordCount();
    return Math.ceil(words / wordsPerMinute);
  }
  
  // Generate summary
  getSummary() {
    return {
      words: this.getWordCount(),
      characters: this.getCharCount(),
      charactersNoSpaces: this.getCharCount(false),
      readingTime: this.getReadingTime(),
      topWords: this.getMostFrequentWords()
    };
  }
}

// Usage
const text = "JavaScript is a powerful programming language. JavaScript is used for web development.";
const analyzer = new TextAnalyzer(text);
console.log(analyzer.getSummary());
```

### Project 2: URL Slug Generator
```javascript
class SlugGenerator {
  static generate(title, options = {}) {
    const {
      maxLength = 50,
      separator = '-',
      lowercase = true,
      removeStopWords = true
    } = options;
    
    const stopWords = ['the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by'];
    
    let slug = title
      .trim()
      .replace(/[^\w\s-]/g, '') // Remove special characters
      .replace(/\s+/g, separator); // Replace spaces with separator
    
    if (lowercase) {
      slug = slug.toLowerCase();
    }
    
    if (removeStopWords) {
      const words = slug.split(separator);
      const filteredWords = words.filter(word => !stopWords.includes(word.toLowerCase()));
      slug = filteredWords.join(separator);
    }
    
    // Truncate if too long
    if (slug.length > maxLength) {
      slug = slug.substring(0, maxLength);
      // Ensure we don't cut off in the middle of a word
      const lastSeparator = slug.lastIndexOf(separator);
      if (lastSeparator > maxLength * 0.8) {
        slug = slug.substring(0, lastSeparator);
      }
    }
    
    return slug.replace(new RegExp(`${separator}+`, 'g'), separator); // Remove duplicate separators
  }
}

// Usage
console.log(SlugGenerator.generate("The Ultimate Guide to JavaScript Programming"));
// Output: "ultimate-guide-javascript-programming"
```

### Project 3: CSV Parser and Processor
```javascript
class CSVProcessor {
  constructor(csvString, delimiter = ',') {
    this.delimiter = delimiter;
    this.data = this.parse(csvString);
  }
  
  parse(csvString) {
    const lines = csvString.trim().split('\n');
    const headers = lines[0].split(this.delimiter).map(h => h.trim());
    
    return lines.slice(1).map(line => {
      const values = line.split(this.delimiter).map(v => v.trim());
      const row = {};
      headers.forEach((header, index) => {
        row[header] = values[index] || '';
      });
      return row;
    });
  }
  
  filter(predicate) {
    return new CSVProcessor(this.toCSV(this.data.filter(predicate)));
  }
  
  search(query, columns = null) {
    const searchColumns = columns || Object.keys(this.data[0] || {});
    return this.data.filter(row => 
      searchColumns.some(col => 
        row[col] && row[col].toLowerCase().includes(query.toLowerCase())
      )
    );
  }
  
  groupBy(column) {
    return this.data.reduce((groups, row) => {
      const key = row[column];
      if (!groups[key]) groups[key] = [];
      groups[key].push(row);
      return groups;
    }, {});
  }
  
  toCSV(data = this.data) {
    if (data.length === 0) return '';
    
    const headers = Object.keys(data[0]);
    const csvContent = [
      headers.join(this.delimiter),
      ...data.map(row => headers.map(header => row[header]).join(this.delimiter))
    ];
    
    return csvContent.join('\n');
  }
}

// Usage
const csvData = `name,age,city
John Doe,25,New York
Jane Smith,30,Los Angeles
Bob Johnson,22,Chicago`;

const processor = new CSVProcessor(csvData);
console.log(processor.search('john')); // Find rows containing 'john'
console.log(processor.groupBy('city')); // Group by city
```

### Project 4: Email Validator and Formatter
```javascript
class EmailValidator {
  static isValid(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
  }
  
  static normalize(email) {
    return email.trim().toLowerCase();
  }
  
  static extractDomain(email) {
    if (!this.isValid(email)) return null;
    return email.split('@')[1];
  }
  
  static extractUsername(email) {
    if (!this.isValid(email)) return null;
    return email.split('@')[0];
  }
  
  static maskEmail(email) {
    if (!this.isValid(email)) return email;
    
    const [username, domain] = email.split('@');
    const maskedUsername = username.length > 2 
      ? username.charAt(0) + '*'.repeat(username.length - 2) + username.charAt(username.length - 1)
      : username;
    
    return `${maskedUsername}@${domain}`;
  }
  
  static generateVariations(email) {
    if (!this.isValid(email)) return [];
    
    const [username, domain] = email.split('@');
    return [
      email,
      email.replace(/\./g, ''), // Remove dots
      `${username}+tag@${domain}`, // Add tag
      email.replace(username, username.replace(/\./g, '')) // Remove dots from username only
    ];
  }
}

// Usage
const email = "John.Doe@Example.COM";
console.log(EmailValidator.normalize(email)); // "john.doe@example.com"
console.log(EmailValidator.maskEmail(email)); // "J****e@Example.COM"
console.log(EmailValidator.extractDomain(email)); // "Example.COM"
```

### Project 5: Template Engine
```javascript
class SimpleTemplateEngine {
  constructor(template) {
    this.template = template;
  }
  
  render(data) {
    let result = this.template;
    
    // Handle simple variable substitution {{variable}}
    result = result.replace(/\{\{(\w+)\}\}/g, (match, key) => {
      return data[key] !== undefined ? data[key] : match;
    });
    
    // Handle conditionals {{#if variable}}...{{/if}}
    result = result.replace(/\{\{#if (\w+)\}\}(.*?)\{\{\/if\}\}/gs, (match, key, content) => {
      return data[key] ? content : '';
    });
    
    // Handle loops {{#each array}}...{{/each}}
    result = result.replace(/\{\{#each (\w+)\}\}(.*?)\{\{\/each\}\}/gs, (match, key, content) => {
      const array = data[key];
      if (!Array.isArray(array)) return '';
      
      return array.map(item => {
        let itemContent = content;
        // Replace {{this}} with current item
        itemContent = itemContent.replace(/\{\{this\}\}/g, item);
        // Replace {{@index}} with current index
        itemContent = itemContent.replace(/\{\{@index\}\}/g, array.indexOf(item));
        return itemContent;
      }).join('');
    });
    
    return result;
  }
}

// Usage
const template = `
<h1>{{title}}</h1>
{{#if showAuthor}}
<p>By: {{author}}</p>
{{/if}}
<ul>
{{#each items}}
  <li>{{@index}}: {{this}}</li>
{{/each}}
</ul>
`;

const engine = new SimpleTemplateEngine(template);
const output = engine.render({
  title: "My Blog Post",
  author: "John Doe",
  showAuthor: true,
  items: ["Item 1", "Item 2", "Item 3"]
});

console.log(output);
```

## Common Use Cases

```javascript
// Cleaning user input
const userInput = "  Hello World  ";
const cleaned = userInput.trim().toLowerCase();

// URL slug creation
const title = "My Blog Post Title";
const slug = title.toLowerCase().replace(/\s+/g, "-");

// Email validation check
const email = "user@example.com";
const isValid = email.includes("@") && email.includes(".");

// String formatting
const name = "john";
const formatted = name.charAt(0).toUpperCase() + name.slice(1);

// CSV parsing
const csvData = "apple,banana,orange";
const fruits = csvData.split(",");

// Phone number formatting
const phone = "1234567890";
const formatted = `(${phone.slice(0,3)}) ${phone.slice(3,6)}-${phone.slice(6)}`;

// Extract file extension
const filename = "document.pdf";
const extension = filename.slice(filename.lastIndexOf('.') + 1);

// Title case conversion
const sentence = "hello world from javascript";
const titleCase = sentence.split(' ')
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(' ');
```