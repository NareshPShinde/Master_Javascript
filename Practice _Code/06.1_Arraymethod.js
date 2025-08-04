/* 
# Basic Array methods
  Array lenght 
  Array tostring()                      Array delete() 
          at()                                concat()
          join()                              copyWithin()
          pop()                               flat()
          push()                              slice()
          shift()                             splice()
          unshift()                           tospliced()
           
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

const arr = [10,20,'rohit',11,20,22];
console.log("lenght of array :"+arr.length);
console.log("original array :"+ arr);
console.log(arr);
console.log("at(index) :"+arr.at(0));//Returns the item located at the specified index.The zero-based index of the desired code unit. A negative index will count back from the last item.

// Add/remove element from end of array.

console.log("push(element) :"+arr.push(21)+' | array :'+arr);
//Appends new elements to the end of an array, and returns the new length of the array.
console.log("\npop(elemmnet)  :"+arr.pop()+' | array :'+arr);
//Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
console.log(arr);

// add/remove element from start of array

console.log("unshift(element) :"+ arr.unshift('33') +" | array :"+arr);
//Inserts new elements at the start of an array, and returns the new length of the array.
console.log("shift() :"+ arr.shift() +" | array :"+arr);
//Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

console.log("join(seperator) :"+ arr.join('|') +" | array :"+arr);
//Adds all the elements of an array into a string, separated by the specified separator string.
//seperator - If omitted, the array elements are separated with a comma.

// delete arr[0];
// console.log(delete arr[0]);// delete leves undefined holes in array use pop() or shift() instead.
console.log(arr);

const arr2 =[12,24];
console.log("concate(array/elements) : "+arr.concat(arr2,36,48));
// Combines two or more arrays. This method returns a new array without modifying any existing arrays.
// element- Additional arrays and/or elements to add to the end of the array.

// console.log("copywithin() :"+ arr.copyWithin +" | array :"+arr);


//flat()
//slice(start ,end)// does not change original array.creat new array. return slice as new array .end index is not included.
console.log(arr);
console.log("slice(start ,end) :"+arr.slice(1,4));
//splice(start ,deleteCount,element)
console.log(arr);

console.log("splice(start,deletecount,element) :"+arr.splice(2,0,30,40));// change the original array  and retun array with deleted deletd 
console.log(arr);
//toSpliced()// same like splice() but create new array instead update original array
console.log("tospliced() :"+arr.toSpliced(0,1,1,2));
console.log(arr);

const array3d = [1,[2,3,[4,5]],6,7,8,[9,10]];
console.log("flat(depth) : "+array3d.flat(Infinity));// Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(array3d);



// search method

console.log("indexOf(searchElement,fromIndex) :"+ arr.indexOf(20) +" | array :"+arr);
//Returns the index of the first occurrence of a value in an array, or -1 if it is not present.fromIndex default is 0.
 console.log("lastIndexOf(seachElement,fromIndex) :"+ arr.lastIndexOf(20) +" | array :"+arr);
 // same like indexOf() but it search from end .right to left.
  console.log("include(seachElement,fromIndex) :"+ arr.includes('rohit') +" | array :"+arr);
  // checks if an element is present in array .(including NaN unlike indexOf(). retun boolen value . 
// console.log("()find :"+ arr.find() +" | array :"+arr);
// find()
// findindex()
//findLast()
//findLastIndex()


// Array sorting methods - this also used for object. 
/*sort(CompareFunction)
 It is expected to return a negative value if the first argument is less than the second argument, 
 zero if they're equal, and a positive value otherwise*/

 const students = ['naresh','omkar','kartik','ranjeet','aadarsh','tejas'];
 console.log("\n original array-student []: "+students);
 console.log(students.sort());
 console.log("sorted array :-"+students);
 console.log(students.reverse());
 console.log("mutated array :"+students);
// there alternative to sort or revers array without updating original array - toSorted(),toReversed()

const poites = [10,30,22,12,45,3];
// console.log(poites.sort());// wrong way .element treted as string by default.//the elements are sorted in ascending, UTF-16 code unit order.
console.log(poites.sort((a,b) => a-b)); // (ascending)
console.log(poites.sort((a,b) => b-a)); // Descending
/*  behind scene  
// Starting array: [10,30,22,12,45,3]

// Some of the comparisons JavaScript makes:
// Compare 10 and 30: 10-30 = -20 (negative) → 10 comes before 30 ✓
// Compare 30 and 22: 30-22 = 8 (positive) → 22 comes before 30 (swap!)
// Compare 12 and 45: 12-45 = -33 (negative) → 12 comes before 45 ✓
// Compare 45 and 3: 45-3 = 42 (positive) → 3 comes before 45 (swap!)
// ... many more comparisons until fully sorted

// Final result: [3, 10, 12, 22, 30, 45]
if result of c is negative return left value and if positive 

*/

// 
const num =[1,2,3,4,5,7,6]
function isLargeNumber(val){
return val>5;
}
console.log("find() :"+num.find(isLargeNumber));
console.log("findIndex() :"+num.findIndex(isLargeNumber));
console.log("findLast() :"+num.findLast(isLargeNumber));
console.log("findLastIndex() :"+num.findLastIndex(isLargeNumber));
/* return a the element | index in the array that satisfies the callback function.if no value satisfies undefined is returned.
find() : return first match ,search left > right | findIndex() return index of that sattified element.
findlast :return first match , search right < left. |findlastIndex() return index of that sattified element.

array.find(callback(elelemt,index,array))
 */