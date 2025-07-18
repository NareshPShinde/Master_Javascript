                                   /* 
foreach()
map()
flatMap()
filter()
reduce()
reduceRight()
every()
some()
from()
keys()
entires()
with()
Speard(...)
rest(...)
                                 */

// Ways of iterating over an Array in javaScript

// 1. for Loop

array = [ "one","two","three",4,5,"six"]
for (let i = 0; i < array.length; i++) {
    const element = array[i];
  console.log(element);
}
console.log("COMPLETED...");
// while loop
idx = 0;
while (idx<array.length) {
    console.log(array[idx]);
    idx++;
}
console.log("COMPLETED...");

// forEach()
/* 
executing a provided function once for each array element in asending order. this functin refer  as callback function. 
parameters : 
        current value(required): the value of the curretly selected array element.
        index(optional)        : the index of curent selected element.
        Array(optinal)         : the array object that this element is part of.

//  Using Arrow function
 forEach((val,idx,array)=>{statement(s);}) 

 // Using Callback function 
 forEach(callback_Function , this_Arg)

 // Using Inline callback Function
 forEach(function(val,idx,array){statement(s)})
*/
