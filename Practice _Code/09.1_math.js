// Number
const num = 123;
const num1 = new Number(123);
const num2 = new Number(123);
console.log(num);
console.log(num1);
console.log(num2);
console.log(num==num1);
console.log(num==num2);
console.log(num1==num2);// false 
  
let num4 = 231.68;
console.log(num4.toFixed(2)); //param fractionDigits — Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.
console.log(num4.toPrecision(6)); //Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.
                                 //@param precision — Number of significant digits. Must be in the range 1 - 21, inclusive.
console.log(num4.toExponential(3)); //Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.
                                   //Returns a string containing a number represented in exponential notation.
console.log(num4.toString());
console.log(num4.valueOf());

// Math 

// how to get random number between min and  max.
console.log(Math.floor(Math.random()*10)+1); // 0 -10
console.log(Math.floor(Math.random()*10)+21); // 0 -30
console.log(Math.floor(Math.random()*(30-20))+20); //                         * (20-30))+20;
                                             // Math.floor(Math.random() * (max - min) ) + min;
