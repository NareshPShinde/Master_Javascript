/* 1. what is proptotype 
  2. prototype chain
  3. shadowing properties.
  4. setting proptype

🔥 What Is a Prototype in JavaScript?
Prototypes are the mechanism by which JavaScript objects inherit features from one another.
When you create an object in JavaScript, it's automatically connected to a prototype object.
This prototype acts like a backup source—if JavaScript doesn’t find a property on your object, it goes to the prototype to find it.
In JavaScript, every object has a hidden internal property called [[Prototype]] (accessible via __proto__), which refers to another object. This is the basis of prototype inheritance.
When you try to access a property or method on an object, JavaScript first checks the object itself. If not found, it looks up the prototype chain.

| Term                             | Meaning                                                                                                                        |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| **Prototype**                    | An object from which other objects inherit properties and methods.                                                             |
| **Prototype Chain**              | A series of objects linked via the `[[Prototype]]`, used for inheritance.                                                      |
| **`__proto__`**                  | A property used to access the prototype of an object. Not standard but widely supported.                                       |
| **`Object.getPrototypeOf(obj)`** | Standard method to get an object’s prototype.                                                                                  |
| **Constructor Function**         | A function used to create multiple instances of similar objects.                                                               |
| **`prototype` property**         | A property of functions (not objects), used to attach methods/properties shared across all instances created by that function. |
| **Inheritance**                  | The mechanism by which one object gets access to the properties and methods of another.                                        |

# prototype chain 
#Every object in JavaScript has a built-in property, which is called its prototype. The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype.and at the end return : undefined.
 Note: 
 The property of an object that points to its prototype is not called prototype. Its name is not standard, but in practice all browsers use __proto__. 
The standard way to access an object's prototype is the Object.getPrototypeOf() method.
if we try to acces object's property  and it is not found obj , prototype chain -> it will return undefined.

This is an object called Object.prototype, and it is the most basic prototype, that all objects have by default. The prototype of Object.prototype is null, so it's at the end of the prototype chain.

# shadowing properties 
in js build object method , we create method of same name and call it ob object . it will ovverite original build in js method .

# setting prototype
1.Using Object.create
2.Using a constructor
3. Manually via __proto__ ❌ Not recommended

// check whether a property is an own property using the static Object.hasOwn() method.
ref -
https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes
*/
const myObject = {
  city: "Madrid",
  greet() {
    console.log(`Greetings from ${this.city}`);
  },
};

console.log(myObject.city);
myObject.greet();// if we type in console of browser -> myObject. it will show all properties , method myObject and pop up other properties.
Object.getPrototypeOf(myObject); // Object { }
console.log(myObject.toString());// [object Object] inhereted from prototype chain . myObject > Object.protype> null.

// shadowing properties
/* If an own property matches a prototype property, the own one takes precedence—this is shadowing */
const parent = { name: "Parent" };
const child = Object.create(parent);
child.name = "Child";

console.log(child.name);  // Child → own property "shadows" the prototype one

console.log(myObject.__protype__);



