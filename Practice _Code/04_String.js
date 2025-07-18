 // W3school string method 
 // String Search method 
 /*    indexOf() 
 ->The indexOf() method returns the index (position) of the first occurrence of a string in a string, or it returns -1 if the string is not found:
 */
let fullName = "Naresh Praksh Shinde";
console.log(fullName.indexOf("Naresh"));//0
console.log(fullName.indexOf("Shinde"));//14
console.log(fullName.indexOf("umesh"));// -1
/* The lastIndexOf() 
-> method returns the index of the last occurrence of a specified text in a string:
 */
const money = "money money "
console.log(fullName.lastIndexOf("money"));

/* lastIndexOf() -> return the index if last occurreance of a specifed text in a string.
both method return -1 if not found. and accept a second parameter as the starting position for the search.
the lastIndexOf() method searches backward ( from the end of the bigining). meaning if the second parameter is 15 ,the earch start at the position 15 and search beginning of the search. 
 */
let quote = "please locate where locate is occure.";
console.log("last occuernnece "+ quote.lastIndexOf("locate"));
console.log("last ocuuernnece from spefied index"+ quote.lastIndexOf("locate",15));
console.log("not found : " + quote.lastIndexOf("world"));
console.log(quote.length);

/*search() method searches a string for a string (or a regular expression) and return the position of the match. */
console.log(quote.search("locate"));//7
// search() and indexof() methos are no equal.
// the search() method cannot take a second start position argument.
// the indexOf() method cannot tske powerful search value(regular expression).

/*
match() method return an array containing the result of matching a string againt a string"(or a regular expression).
*/
let str = "rain in the SPAIN stays a mainly in the pain."
console.log(str.match("ain"));//search for "ain"
console.log(str.match(/ain/));//search for "ain"
console.log(str.match(/ain/g));//global search for "ain" 
console.log(str.match(/ain/gi));//perform global, case-sensetive search for "ain".

/* matchAll()  method returna iterator containing the result of matching a string against a string ( or a regular expression.) */
const iterator = str.matchAll(/in/gi);
console.log(iterator);
console.log(str.matchAll("in"));


// the include() method return true if a string contains a specified value.otherwise false.
console.log(str.includes('in'));//true
console.log(str.includes('in',12));// to search start position is 12.

// the startWith() method returns true if a string begins with a specified value.
console.log(str.startsWith("rain"));
console.log(str.startsWith("in",5));// search start position.

// the endWith() method returns true if a stirng ends with a specified value.
console.log(str.endsWith("pain."));
console.log(str.endsWith("in"));
console.log(str.endsWith("n",5));
