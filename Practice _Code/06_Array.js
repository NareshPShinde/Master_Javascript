// Array
/* Array method (Search method): indexOf(), lastIndexOf(),includes(),find(),findIndex(),findeLast(),findeLastIndex().
                (Sort method) : Alphabetic sort - sort(),reverse(),toSorted(),toReversed().
                                 numeric sort -  numeric sort , randonm sort ,Math.min(),Math.max(). 
*/
                

// JS array are object the comparison take place concidering their references - and not their actual value.
// Freecodecamp tutorial blog

// 1   - using Literals
/*
           specifying content inside square brackets , with each them seperted by a comma. 
 */
let product = ["lasun", "kasoori", "javas", "peanut", , "papad"];
console.log(product); //(6)['lasun','kasoori','javas','peanut',empty,'papad']
console.log(product.length); //6
console.log(product[0]); //lasun
console.log(product[1]); //kasoori
console.log(product[2]); //javas
console.log(product[3]); //peanut
console.log(product[4]); //undefined   '(Sparse array)value  inside of index renge but is not defined'
console.log(product[5]); //papad
console.log([product[6]]); // undefined    'value out side of index renge'
console.log(product.lenght - 1); // the total element in array
console.log("the last element of array : " + product[product.lenght - 1]); //

console.log((product[6] = "bajarikhajoor"));
//Compare two array in JS
let ar1 = [1, 2, 3, 4, 5];
let ar2 = [1, 2, 3, 4, 5];
let comparr = ar1 === ar2;
console.log(comparr); //False

let ar3 = ar1;
console.log(ar3 === ar1); //true

/*  const Compare_array= (ar1,ar2)=>{
             if (ar1.length !== ar2.length) {
               return false;
             } for (let i = 0; i < array.length; i++) {
                 if (ar1[i]!==ar2[i]) {
                   return false;
                 }    
             }
             return true
            } ;
            Compare_array(ar1,ar2); */

// array method
let std = ["naresh", "yogesh", "kunal", "rohit", "rohan"];
//toString()
let b1 = std.toString(); // Array to String
console.log(typeof std);
console.log(typeof b1);
//join()
let join = std.join(" and ");
console.log(join);
//pop()
/* std.pop();//pop return popped element
           console.log(std); 
           //push()
           /* std.push();// push return new array lenght
           console.log(std); */
//shift
/* let r = std.shift();//remove the element frome start of array
           console.log(std); */
//unshift
/* let r1 = std.unshift();//add element to the biginig return array lenght
           console.log(std); */

let number = [22, 32, 3, 45, 465, 7, 5, 44, 32, 22, 45];
let number1 = [11, 12, 13, 14, 15, 16, 17, 18, 19];
delete number[0]; // delete idexed element from array.
console.log(number);
//concat()
let new_array = number.concat(number1); //it does not change original array.
console.log(new_array);
//sort()
let srt = number.sort(); // albhabeticali sort
console.log(srt);
console.log(number); // it change original array.

// number.sort((a, b) => b - a);//change as number

console.log(number);
//sort method
let compare = (a, b) => {
  return a - b;
};
number.sort(compare); //compare function to sort by number
console.log(number);

//splice(index where frome to delete , number of elements to delet , element to place at deleted elments)
let deleted_elment = number.splice(2, 2, 121, 1212);
console.log(deleted_elment);
// number.splice(2,2,121,1212)
/* @param start — The zero-based location in the array from which to start removing elements.
           @param deleteCount — The number of elements to remove. ifyou want do not delete any element the value is 0. 
           @param items — Elements to insert into the array in place of the deleted elements. */
console.log(number); 
console.log(typeof deleted_elment);
console.log(typeof number);

let newslice = number.slice(3, 5); // does not change original array
console.log(newslice);
//reverse()
console.log(number.reverse());

// ===============================================================

//for loop
/* initialExpression - Initializes a counter variable.
           condition - The condition to be evaluated. If true, the body of the for loop is executed. otherwise loop terminated.
           updateExpression - Updates the value of initialExpression.
            */
let num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
for (let i = 0; i < num1.length; i++) {
  console.log(num1[i]);
}

// foreach loop
num1.forEach((element) => {
  console.log(element * element);
});

//for of ->
for (const element of num1) {
  console.log(element);
  // console.log(typeof element);//Number
}

//for  in -> it itrator over properties over object.
//
const sallary = {
  raj: 10000,
  ravi: 20000,
  samadhan: 150000,
  umesh: 500000,
};
for (const key in sallary) {
  // sallary is not iterable if is for of loop
  console.log(key, " : ", sallary[key]);
}

for (const i in num1) {
  console.log(i);
  // console.log(typeof i);//String
}
console.log(typeof num1);
for (const key in sallary) {
  console.log(sallary[key]);
}
//---------------------------------------------------------------------------------------
