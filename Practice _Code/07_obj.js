/* REFERENCES   - freecodecamp  articals,  MDN , w3school , yt chai aur code  ,
                  obj method -> Digitalocean , codedam*/
/*              * INDEX *
   OBJECT
   Defining / Creating , Adding properties to object , let keyword over the dot notations , Modify and Delete Properties in an object , Use special keys in objects , Access the Properties , Dynamically set propeties , method short hand syntax , adv  of this method over regular method , object spread operater , object destructing ,how to use the this keyword in Js .        

  1.Object
  2.Defining object
     using object literals
       - Accesing properties , modifing property,
       - Adding Properties ,Dot vs bracket Notations,
       - Deleting Properties .
     object Constructor function anad Default properties value.
  3. Js object prototype   
  4.Object Methods
*/

/* A JavaScript object is a collection of key-value pairs, where each key (also known as a property or method) is a string or Symbol, and each value can be of any data type, including other objects, arrays, or functions. Objects are used to store and organize data and can be manipulated through various methods to perform operations and represent complex structures. 
mdn -> The Object type represents one of JavaScript's data types .It is used to store various keyed collections and more complex entities.*/

//  Defining Object
/* Methods for Defining JavaScript Objects
Using an Object Literal / Object Initializer
Using the new Keyword
Using an Object Constructor
Using Object.assign()
Using Object.create()
Using Object.fromEnties() */

// An object literal is a list of property names:values inside curly braces {}.
const mySym = Symbol("key1");

person = {
  1 : 12,
  name: "Naresh",
  lastName: "Shinde",
  [mySym]: "myKey1",
  age: 20,
  address: "Maharastra",
  friends: ["yogesh", "dnynu", "omkar"],
  greet: function () {
    alert("Hello Worlds");
  },
};

// Access Properties
console.log(person.name);
console.log(person["name"]);
console.log(person["lastName"]);
console.log(person[mySym]);
console.log(typeof mySym);
console.log(person[1]);// can not access using . notation.
console.log(person['1']);


// Dot vs Bracket Notation
/* 
Dot -> when the property name is a valid identifier.(it follows variable naming rules.) , when the property nmae does not contains spaces or special characters.

Bracket Notation -> when the property nmae is a string (including space or special characters)., when accessing peoperties dynamically using variable.
 */
const keyName = "Name";
console.log(person["last" + keyName]); // it's work - shinde

// const whichPersonInfo = prompt(
//   "which information you would know about Person -> name,lastName,age,address,friends."
// );
// console.log(person.whichPersonInfo); //undefined
// console.log(person[whichPersonInfo]); // it's work 

// Adding properties to this object
person.hobby = "Coding";
person.eyeColor = "black";

console.log(person);

// Singleton - when create

// * Object Constructor Function * and  * Property Defalt Value *
/* Use when we need to create multiple object of same type.
 name of this constructor should - first letter UPPER-CASE  . ex. Person */

class Person {
  constructor(first, age, gender, eye) {
    this.firstName = first;
    this.age = age;
    this.gender = gender;
    this.eyeColor = eye;
    this.live = "yes"; // defalt value
  }
}
// 'this'  has no value , when new object is created  the value of the this is become new object.

let naresh = new Person("Naresh", 20, "Male", "Blue");
let ninja = new Person("rayson", 27, "male", "black");
console.log(naresh.firstName); //naresh
console.log(naresh.first); //undefined

// the value given to property will  be  defalt value for all object creted by this constructor.
console.log(naresh.live + "\n" + ninja.live); // yes  yes

////////////////////////////////////////////////////////////////////////////////////////////////////////

// * Js object prototype *
/* 
 All JS object inherit properties and methods from a prototype
  - object constuctor ,to add property to a constructor , we must add it to the constuctor function.
*/
/*
  * prototype Inheritance *  
Date object inherit frome Date.prototype
Array object inherit frome Array.prototype
person object inherit frome person.prototype

the object.prototype is on the top of the prototype inheritance chain.
Date, Array, person All object are inherit from object.prototype.
 */
// Adding Properties and method to object.
// Using the prototype property
Person.prototype.nationality = "indian";
console.log(Person.prototype);

////////////////////////////////////////////////////////////////////////////////////////////////////////

// * Object method *
/* JavaScript Object Methods can be grouped into:
# General Methods
# Property Management Methods
# Object Protection Methods */

////////////////////////////////////////////////////

//  * General Methods - Js Object *
/* Object.assign(targate,source);
   Object.creat(object);
   Object.entires(object);
   Object.fromEntires();
   Object.keys(object);
   Object.values(object);
   Object.groupBy(object,callback);
*/

/* 1. object.assign(targate,source);  
    - Copies the properties frome a source to target object.
    */
const person2 = { age: 21, firstName: "Dada" };
Object.assign(naresh, person2); // Agument 1 - which object we want assigns values and 2 - from which object keys and values should be taken.
console.log(naresh);
// see 05.1_obj.js for more better understanding.
// it is possible to use spread ... operator accomplish same task.

/* 2. object.create(object); // reference -digitalocean
   - Creates an object frome existing object.and link it to prototype of existing object. 
   - creates new empty , which can be use later and add differnt keys and values in it.
  - it take one argument which can be  null or an empty Js object . 
  - singleton , useful for keep code DRY by minizing duplications.  
    */
const object = Object.create({});
console.log(object); //{}
// initialize an object with properties and method.
const job = {
  position: "cashier",
  type: "hourly",
  isAvaiable: true,
  showDetails() {
    const accepting = this.isAvaiable
      ? "is accepting applications"
      : "is not currenty accepting applications";
    console.log(
      `the ${this.position} position is ${this.type} and ${accepting}.`
    );
  },
};
// use Object.create() to pass properties.
const bharat = Object.create(job);
bharat.position = "multiService";
bharat.showDetails();
job.showDetails();

// 3. Object.entires(object);
/* - Creates nested array of key/values pairs of the object.seperatly by comma.
   - it make simple to use object in loops.
   -also make it simple to convert object to map.  */
const entires = Object.entries(job);
console.log(entires);

// it make simple to use object in loop.

// it make simple to convert object to map.

// 4. Object.fromEntires()
/*   - creates an object frome a list of name/value pairs. */
const fruit = [
  ["apple", 10],
  ["orange", 13],
  ["banana", 24],
];
const myobj = Object.fromEntries(fruit);
console.log(myobj);

// 5. Object.key(object);
/* 
   - creates an array containig keys of an object.
 */
const objKeys = Object.keys(job);
console.log(objKeys);
// the forEach() array method can be used to iterate throught the key nad values.

//Object,keys is also useful for checking lenght of the array using the lenght property.

// 6. Object.values(object);
/* - creates an array containg values of an object.
 */
const objValues = Object.values(job);
console.log(objValues);

//7. Object.groupBy();
/*  - method groups elemetes of an object according to string values returned from a callback function.
    - Object.groupBy() does not change the original object.  */

//............ learn soon

///////////////////////////////////////////////////////////////////////////

// * Proerty Management Method - Js Object
/*
 Object.defineProperty(object,property,descriptor)
 Object.defineProperties(object,desciptor)

 Object.getOwnPropertyDescriptor(object,property)
 Object.getOwnPropertyDescriptors(object)

 Object.getOwnPropertyNames(object)
 Object.getPrototypeOf(object)
 */
const book={ name:"geeta"};
Object.defineProperty(book,"price" ,
  {
    value:"100",
    writable:true

  });   
  console.log(book);
console.log(book.price);









/* 
   # What is writable , enumerable , configurable ?  ->(meat data) 
   -> value ->The value to assign to the property.
     writable -> Whether the value of the property can be changed or not.
     enumerable ->Whether the property will be enumerated in for in loops or not.
     configurable ->Whether it will be possible to redefine the property descriptor or not.
     get ->A function to be called that will return the value of the property.
     set ->A function to be called when the property is assigned a value.
 */

// Object.defineProperty()
/* 
    - this method can be used to : - Adding new properties to object,
                                   - Changing property value
                                   - changing property meatdata
                                   - changing object getter and setter
 */
