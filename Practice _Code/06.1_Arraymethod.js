/* 
# Basic Array methods
  Array lenght 
  Array tostring()                      Array delete() 
          at()                                concat()
          join()                              copyWithin()
          pop()                               flat()
          push()                              slice()
          shift()                             splice()
          unshift()                            tospliced()
           
# Array Search method  

indexof()                                 find()
lastindexof()                             findindex()
include()                                 findlast()
                                          findlastindex()
# Array Sort method 

  alphabetic sort ->   .sort() , . reverse() ,.tosorted()  ,toreversed()  ,sorting object. ,
    numeric sort ->    numeric sort , random sort ,math.min() , max() ,

# iteratoion method
foreach()
map()
flapmap()
filter()
reduce()
reduceright()
every()
some()
from()
key()
entires()
with()
spread(...)
rest(...)


*/
const student =["roll1", 'roll2', ,'roll3','roll4'];
const arrlenght = student.length; // the lenght property return the lenght(size) of the array.
console.log(arrlenght);

let arr_to_str= student.toString();// this emthod convert array to string of(comma seperated) array values.
console.log(arr_to_str);
console.log(typeof student + " and " +typeof arr_to_str);// String

let get_el = student.at(1);// return indexed element from an array. same as [].
let get_el2 = student[1];
console.log(get_el+" "+ get_el2);

let join1 = student.join(" | "); //Adds all the elements of an array into a string, separated by the specified separator string.default is comma.
console.log(join1);

let popped=student.pop();// remove last element frome array.
console.log(popped);//  return popped out / removed last element from array. 
console.log(student);//[ 'roll1', 'roll2', <1 empty item>, 'roll3' ]
console.log(student.length);//4

let pushed = student.push("std"); // add a new  elelement to an array at the end.
console.log(pushed);// return new array lenght
console.log(student);//[ 'roll1', 'roll2', <1 empty item>, 'roll3', 'std' ]

let shifting = student.shift();// remove first array element .
console.log(shifting);// return removed first element.
console.log(student);// modified array - [ 'roll2', <1 empty item>, 'roll3', 'std' ]

let unshifting = student.unshift("newroll1");// add new array elemnt at the biggining.
console.log(unshifting); // return new array lenght.
console.log(student);//[ 'newroll1', 'roll2', <1 empty item>, 'roll3', 'std' ]

// change element 
let change = student[student.length-1]= "stulast";
console.log(change);
