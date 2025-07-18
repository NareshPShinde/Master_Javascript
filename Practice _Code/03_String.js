// references : w3school , fcc String handbook - https://www.freecodecamp.org/news/javascript-string-handbook/
/* string methods 
.lenght
String charAt()
Stirng charCodeAt()
String at()
String[.]
String slice()
string substring
string substr()

string toUpperCase()
string toLowerCase()
string trim()
string trimStart()
string trimEnd()
string padstart()
string padEnd()
string repeat()
string replace()
string replaceAll()
string split()

String Search method()
string indexOf()
string lastIndexOf()
string search()
string match()
string matchAll()
string includes()
string startWith()
string endWith()

*/
/* Index 
string


*/
//  String
/* Sequences of character(zero or more) that enclosed in either single or double quotes. */
const str = " this is text";
const str2 = "this is Text";
// both are same functional work.
console.log(str);
let a1 = "it's fine";
let a2 = "I am learing 'string' ";
let a3 = ' I am practing "String"';
console.log(a3);

// Template Literals
/* introduced in ECMAScipt 6 ES6. they offer improved syntax  for embedding variable and expression within string. */
// Basic use
let person = "naresh";
let greeting = `Hello ${person}`;
console.log(greeting);
// Multiline string
let poem = `jonny jonny 
yes papa 
eating sugar 
no papa`;
console.log(poem);
// Expression Evalution  -> Expresssion within ${ } are evaluted.
let n1 = 12,
  n2 = 10;
let sum = ` the sum of ${n1} and ${n2} is ${n1 + n2}`;
console.log(sum);
// Tagged Templates
// Use Cases
// 1 Dynmaic String  creation
const product = "laptop ",
  price = 45000;
const purchaseDetails = ` i purchased ${product} of ${price} rupees.`;
console.log(purchaseDetails);
// 2 HTML template
const item = "Course";
const itemDesciption =
  " these most popular and project base , exercise oriented free course .";
const htmlTemplate = `<div class="item>
    <h2>${item}</h2>
    <p>${itemDesciption}</p>`;
console.log(htmlTemplate);

// String Constuctor
/* string constructor is way to create string object. */
const strObj = new String("the value of string object");
console.log(strObj);

// String Object vs String literals   -> preferred using string literals.

/* 1) string object :  it is instace of object 
      string literals : it is primitives values */
console.log(typeof item); // string
console.log(typeof strObj); // object

// Converting StringObject to primitives  -> we can do this using valuesOf / toString

/*  otString(not any parameter) is method return string as string , do not change original string and  it can be used convert string object to strting literals.*/
const strLiterals = strObj.toString();
console.log(typeof strLiterals);

// Rare Use Cases
const rare1 = "hello";
const rare2 = new String("hello");
console.log(rare1 == rare2); //true
console.log(rare1 === rare2); //false

// the  string.fromrCharCode method
/* this method is way to creating string from a sequence of unicode values.
Unicode is standerdized character encoding system tht assig a unique number to each character. */
// Basic Use
const strUnicode = String.fromCharCode(72, 101, 108, 108, 111);
console.log(strUnicode); // hello
// Generating string with specific characters.
const strSymol = String.fromCharCode(9829, 9786, 8482);
console.log(strSymol); // ♥☺™
// Dynamic string creation -?> using the spread operater(...)allows us to pass array of unicode values.
const unicodeValues = [72, 102, 109];
const dynamicString = String.fromCharCode(...unicodeValues);
console.log(dynamicString);
//-------------------------------------------------
// Concatenation
//Using the + operater -> commma way of concatenate.
const firstName = "Naresh";
const lasName = "Shinde";
const fullName = firstName + "Prakash" + lasName;
//Using the concat method -> alternative way of concatenate to two/more string. it does not change original string.return new string.
const strconcat = lasName.concat(" ", firstName, " ", "Prakash");
console.log(strconcat);
// Concatenate string wit variable
const birthWish = " Happy Birthday !";
const wish = birthWish + "Brother .";
//Combination string.fromeCharCode with Concatenation.
const cmb = String.fromCharCode(72, 101) + "llo";
console.log(cmb); // hello
//-----------------------------------------------------------------------------
// Characteristics if string
// Immutable
/* once string is created its content cannot be changed. operations like concatenation , changing case leaving original string unmodified   */

//          *  String Methods *
//lenght property of string return the lenght of a string.
const txt = " something ";
const strLenght = txt.length;
console.log(strLenght);

//Case Manipulation Method -> toUpperCase() , tolowerCase()
// toUppercase() -> this method transforms all character in a string to uppercase.
const myname = "naresh";
const upperName = myname.toUpperCase();
console.log(upperName);
// toLowercase()  -> this convert all character in a string lowercase.
lowername = myname.toLowerCase();
console.log(lowername);

// Trimming White Spaces -> trim(),trimStart(), trimEnd()
//trim()   method removes whitespaces frome both ends of a string and returns the result.
const stringwithtrim = "  namste bhai sareyane   ";
const trimedstring = stringwithtrim.trim();
console.log(trimedstring);
//trimStart()  method removes whitespaces frome the biginning (start ) of a string .
const starttrimed = stringwithtrim.trimStart();
console.log(starttrimed + ",");
// trimEnd() method removes whitespaces frome the end of string.
const endtrimed = stringwithtrim.trimEnd();
console.log(endtrimed);

console.log(stringwithtrim); // above method do not change original string.
//-----------------------------------------------------------------------------

//String Searching  -> indexOf() , lastIndexOf()

//the indexOf() method used to find the first occurrence of a substring within a string.if substring is not found , it returns -1.
const sentences = "i love Javascript ";
const index = sentences.indexOf("l");
console.log(sentences.indexOf("n")); // return -1
console.log(index);

// lastIndexof() method work similar but starts the search from the end of the string .allowinf for reverse searching.
const l_Index = sentences.lastIndexOf("a");
console.log(l_Index);
console.log(sentences.indexOf("a"));
//-------------------------------------------------------------------

/*  include() for substring presence 
  this method simplifies the task of checking whether a string contains a specific substring .
  retruning a boolean value. this method useful for conditional checks.
 */
const parse = "to be or not to be ";
const containToBe = parse.includes("to be");
console.log(containToBe); // true
//---------------------------------------------------------------------

// startWith() and endWith()
/* for scenario where it is necessary to determine whether a string starts with a certain substring.  
returns boolean value.
*/
const filename = "document.txt";
const isDocument = filename.startsWith("document");
const isTextFile = filename.endsWith("txt");
console.log(isDocument + " \n" + isTextFile); // true true
//-------------------------------------------------------------------------

//substring extraction with slice() and substring()
/* these method commonly use for extracting substring from string, but they differente in syntax and functionality.

slice() -> this method is versitile tool for extracting substring from string based on indices.allow for the extracting of substring from any position within the string  and support negative idex.

syntax :   string.slice(startIndex,endIndex);
   startIndex : the index at which the extraction begin.
   endIndex : the index before which the extraction ends .(the character at the index is not included.) 
  */
const sultan = "jalna keshri kartik raut";
console.log(sultan.slice(6, 11)); //keshr
//-------------------------------------------------------

//modifing string  replace()
/* 
the replace(SearchValue,replaceValue) is intrumental in replacing a specified substring with another string . particularlly useful for updating string dynamically 
*/
const msg = "Hi,om how are you ";
const updateMsg = msg.replace("om", "harkirat");
console.log(msg + "\n" + updateMsg);
console.log(typeof updateMsg);
//-------------------------------------------=---------------

//spliting string with split()
/* when a string need to be divided into array of substring based on a specified separator.
 */
const mugic = "tu sahi na to kai aur sahi ";
const words = mugic.split(); //whole string as array at index[0]
const seprateWords = mugic.split("");
//a string with separates with single character as array element.in diffrent indexes.
const separates = mugic.split("|"); //['tu sahi na to kai aur sahi ']
console.log(separates);
console.log(
  words + "\n" + typeof words + "\n" + typeof mugic + "\n" + seprateWords
);
// if separator is ommited .the returned array wil constain 'the whole string 'in index[0].
// if the separator is "" , the returned array will be an array of single characters.
for (const key in seprateWords) {
  console.log(key + " : " + seprateWords[key]);
}
//-----------------------------------------------

// joinig array into a string with join()
/* join method concates the elments of an array into a single string. using a specified delimiter.
Adds all the elements of an array into a string, separated by the specified separator string.
 If omitted, the array elements are separated with a comma.
*/

const fruts = ["apple", "gava", "mango", "papaya"];
const joinedString = fruts.join("|");
console.log(joinedString);
console.log(
  "type of joinedString is " +
    typeof joinedString +
    " and  type of fruts is  " +
    typeof fruts
);
//----------------------------------------------------------------------------------------

//string comparison
//Equality check with == and ===
/*=== operator check both value and type , ensuring a strict equality check.
== operator check for equality with type coercion.                           */
const kill = "5";
const count = 5;
console.log(kill === count); //false
console.log(kill == count); //true

//  More on String
/* 
   regular expression and string 
   unicode and string 
   comman string pitfalls 
   case styudies and example  
   */
