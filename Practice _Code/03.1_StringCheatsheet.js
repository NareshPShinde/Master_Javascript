const str = ' Master Javascript ';
console.log(typeof str);//string 
console.log(str.length);//Returns the length of a String object.
console.log("original string :"+str);

// Extracting String chracter 

console.log("charAt(position) :"+str.charAt(1));//Returns the character at the specified zero-based index.
console.log("charCodeAt(position) :"+str.charCodeAt(0));//Returns the Unicode value of the character at the specified location. If there is no character at the specified zero-based index, NaN is returned.
console.log("at() :"+str.at(1));// return the character at a specified index. also allow to negative index. A negative index will count back from the last item
console.log("str[index] :"+str[8]);

// extracting string part

console.log("\n slice(startIndex,LastIndex) :"+str.slice(1,7));//Returns a section of a string from start position to end position.allow negative indexing.  the end position is not included.if you ommit second param it will return the rest of string.
console.log("subString(start,end) :"+str.substring(7,1));// same like slice() but don't allow negative index and in case swaps start>end? it automatically swaps start and end . 
// substr(start,lengh) there one more for this substr(start,lenght) but is deprecated ,avoid use 

// Case manipulation

console.log("\n toUpperCase() :"+str.toUpperCase());//Converts all the alphabetic characters in a string to uppercase.
console.log("toLowerCase() :"+str.toLowerCase());//Converts all the alphabetic characters in a string to lowercase.
 
// Triming Whitespace

console.log("\n trim() :"+str.trim());// removes whitespace from both ends of the string and return a new string without modifying the original string.
console.log("trimStart() :"+str.trimStart());// removes whitespace from the beginning of the string.
console.log("trimEnd() :"+str.trimEnd());  //  removes whitespace from the end of the string.  

// padding 

console.log("\n padStart(maxLenght,padString) :"+str.padStart(21,'$'));//Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length. The padding is applied from the start (left) of the current string.padstring - default value is " ".
console.log("padEnd(Maxlenght,padString)"+str.padEnd(21,'*'));//same like padStart but The padding is applied from the end (right) of the current string.

//string search methods 

console.log('\n indexOf(SearchStrig,position) :'+str.indexOf('s',4));/*indexOf(searchString,position); The index at which to begin searching the String object. If omitted, search starts at the beginning of the string. Returns the position of the first occurrence of a substring.*/
console.log('lastIndexOf(searchString,position)'+str.lastIndexOf());// Returns the last occurrence of a substring in the string.same like indexOf() but ,search for substring start from the end.
console.log('include(searchString ,position) :'+ str.includes('Master',12));
console.log('startsWith(searchString,position) :'+str.startsWith('Master',1));// determines whether this staring begins with the character of a specified string. returning boolean value. index/position where start search. default is 0.
console.log('endsWith(searchString,position) :'+str.endsWith('pt',18));//determines whether this ends  with the character of a specified string. returning boolean value. index/position where start search. default is str.lenght.

console.log("search(string/regex) :"+str.search(/Javascript/g));//Returns the position of the first occurrence of a substring/regular expression.this same like indexOf() but it can not second argument and it is also search for regular expression.if not found return -1.
console.log("match() :"+str.match(/Master/));//Matches a string or an object that supports being matched against, and returns an array containing the results of that search, or null if no matches are found. 
console.log("matchAll() :"+str.matchAll(/Master/g));// the modifer should be global g otherwise it will give first occurnce or TypeError. Matches a string with a regular expression, and returns an iterable of matches containing the results of that search.

// modification and manipulation

const str2 = "programer program to generate program";
console.log("\n replace(seachValue/regex,replaceValue) :"+str2.replace(/program/,'code'));//Replaces text in a string, using a regular expression or search string
console.log("replaceAll(seachValue/regex,replaceValue) :"+str2.replaceAll(/program/g,'code'));//Replace all instances of a substring in a string, using a regular expression or search string.
console.log("repeat() :"+'i fill '+ 'happy ! '.repeat(3));//Returns a String value that is made from count copies appended together. If count is 0, the empty string is returned.


// spliting and combining

console.log("\n split(seperator,limit) :"+str.split(''));//split the sting whenever encounter specified seperator.Split a string into substrings using the specified separator and return them as an array. 
// seperator :A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned.
// limit : A value used to limit the number of elements returned in the array.
const stringSplit = str.split(' ');
console.log("split(seperater , limit)"+stringSplit); // return Array type object .

const stringJion = stringSplit.join(' ');
console.log("join(seperater)"+ stringJion);// retun string . jion array element whenever seperater encounter. 

// concanating methods 
console.log("concate(string/strings)"+str.concat('and',' ',str2));//Returns a string that contains the concatenation of two or more strings.
console.log("concate using + :"+str + 'and'+' ' + str2);

