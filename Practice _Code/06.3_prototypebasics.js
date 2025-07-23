// Example 1: Default Object Behavior
const person = {
  name: "Naresh",
  age: 25
};

console.log("Example 1:");
console.log(person.toString()); // Inherited from Object.prototype


// Example 2: Custom Prototype using Object.create()
const parentObj = {
  greet: function() {
    return "Hello from parent!";
  }
};

const childObj = Object.create(parentObj);
childObj.name = "Naresh";

console.log("\nExample 2:");
console.log(childObj.name);     // Own property → "Naresh"
console.log(childObj.greet());  // Inherited from parentObj → "Hello from parent!"


// Setting a Prototype - Method 1: Object.create()
const parent = {
  greet() {
    return "Hi!";
  }
};

const child = Object.create(parent);
child.name = "PrototypeChild";

console.log("\nSetting Prototype - Object.create():");
console.log(child.name);
console.log(child.greet());


// Setting a Prototype - Method 2: __proto__ (Not Recommended)
const anotherChild = {};
anotherChild.__proto__ = parent;

console.log("\nSetting Prototype - __proto__:");
console.log(anotherChild.greet());


// Setting a Prototype - Method 3: Constructor Function
function Person(name) {
  this.name = name;
}

Person.prototype.sayHi = function() {
  return "Hi " + this.name;
};

const user = new Person("Naresh");

console.log("\nConstructor Function:");
console.log(user.sayHi()); // Hi Naresh

// Prototype Chain Visualization
console.log("\nPrototype Chain Check:");
console.log(Object.getPrototypeOf(user) === Person.prototype); // true
console.log(Object.getPrototypeOf(Person.prototype) === Object.prototype); // true


// Shadowing Example
const shadowParent = { name: "Parent" };
const shadowChild = Object.create(shadowParent);
shadowChild.name = "Child";

console.log("\nShadowing Example:");
console.log(shadowChild.name); // Child (own property shadows prototype)
console.log(shadowChild.__proto__.name); // Parent
