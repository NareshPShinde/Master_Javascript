const obj = {
    0:10,
    1:20,
    2:30,
name : "naresh",
"account balance" : `210$`,// we can not acces this by dot notation.
account_number : 224198650,// we can acces both way dot and bracket notation.
gender : "male" ,
"age" :21,
undefined : 12
}
//  the key is concidered as string by bakend..
console.log(obj.undefined); // result '12', it's work because here undefined is not variable , it is trated as string .
 console.log(typeof obj);//object

 console.log( obj.age);
 console.log(obj["age"]);

 console.log(obj["account balance"]);// can not acces by dot notation because space between key name words  
// console.log(obj.account balance);//SyntaxError: missing ) after argument list

 console.log(obj.account_number);
 console.log(obj["account_number"]);

 console.log(obj[0]);// no need of double quouts  , cann't acces by dot .
//  console.log(obj.0);

// access
console.log(obj.age);
console.log(obj["account balance"]);

//modify or update
obj.age = 20;
console.log(obj.age);

// delete
delete  obj[2];
console.log(obj[2]);
console.log(obj);
  
/* reference type (non- primitive data type (heap))
referenece (memory location ) stored in stack and actual body of the object strored in heap(dynamic memory)
 object -> object literals , array , function  are object  
*/
