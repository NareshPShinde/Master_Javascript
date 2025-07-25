// Destructing object and array  
/* The destructuring syntax is a JavaScript syntax that makes it possible to unpack values from arrays, or properties from objects, into distinct variables. It can be used in locations that receive data (such as the left-hand side of an assignment or anywhere that creates new identifier bindings). */

//For both object and array destructuring, there are two kinds of destructuring patterns: binding pattern and assignment pattern, with slightly different syntaxes.

let obj = {
name : 'ravi',
money :435 , 
balance :100,
age : 25,
aadhar :'fgwretvv'
}

// destruncting 
// const {name,age} = obj;
// console.log(name,age); // ravi 25

// const {name:myname,age:umar,balance:amout}=obj; 
// console.log(myname,umar,amout);

// const {name,age,...obj1}=obj;
// console.log(obj1);



// destruting array
const num = [3,4,5,6,7];
// const[first ,second]=num;
// console.log(first,second);

// const[first ,second, ,third]=num;
// console.log(first,second,third);

// const[first ,second,...third]=num;
// console.log(first,second,third);

//==========================================
// destructing nested obj

let obj1 = {
name : 'ravi',
money :435 , 
balance :100,
age : 25,
arr : [ 2,3,4,5,6], 
aadhar :'fgwretvv',
address : {
  pincode : 132203,
  city :'pune',
  state : 'mh'
}
} 

// const {address:{pincode,city}}=obj1;
// console.log(pincode,city); // 132203 pune

const {arr:[first]}=obj1;
console.log(first); // 2

// 
const user = {
  id: 42,
  displayName: "jdoe",
  fullName: {
    firstName: "Jane",
    lastName: "Doe",
  },
};
function userId({ id }) {
  return id;
}
console.log(userId(user)); // 42

function userDisplayName({ displayName: dname }) {
  return dname;
}
console.log(userDisplayName(user)); // "jdoe"

function whois({ displayName, fullName: { firstName: name } }) {
  return `${displayName} is ${name}`;
}
console.log(whois(user)); // "jdoe is Jane"


//Setting a function parameter's default value
function drawChart({
  size = "big",
  coords = { x: 0, y: 0 },
  radius = 25,
} = {}) {
  console.log(size, coords, radius);
  // do some chart drawing
}

drawChart({
  coords: { x: 18, y: 30 },
  radius: 30,
});





