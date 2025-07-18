/*  Synchronoius Js 
    Asynchronoius Js 
    callback  and callback hell
    Promise Chainig and Error Handling
 
 */

/*
 Synchronous
Synchronous means the code rnus in a particular sequence of the instrunction given in the program . each instrction waits for the privios instruction to complete its execution.

Asyncronous 
Due to Synchronous programming,a somethings imp instructions get blocked due to some previos instructions , which causes a dealy in the UI . Asynchronous code execution allow to execute next instrution immediatly and doesn't block the flow.
*/
// // Sync
// console.log("one");
// console.log("two");
// console.log("three");
// //Async
// function hello(params) {console.log("hello");}
// setTimeout(hello,3000)
// Callback
// function Calcualtor(a ,b , Callback) {
//     Callback(a,b)
// }
// function add(a,b) {console.log(a+b);}
// function multiply(a,b) {console.log(a*b);}
// function division(a,b) {console.log(a/b);}
// Calcualtor(1,2,add)
// Calcualtor(6,2,multiply)
// Calcualtor(10,2,division)

//callback hell
/*
 Callback Hell : 
Nested callback stacked below one onther forming a pyramid structure.(Pyramid of Doom). This style of programming becomes difficult to understand & manage.
*/
function getdata(dataId,getNextData){
    setTimeout(()=>{
        console.log("data",dataId);
        if (getNextData) {
            getNextData();
        }
    },2000)
}
getdata();

/* jab hame 1 ke bad 1 ka data chahiye tab ham ex.instagram , we enter username if user name found in the database if it found this go for password other wise get error not found or something wrong.
getdata(1) 
getdata(2) 
getdata(3) // this is wromg way.
*/
getdata(1,()=>{
    console.log("getting data 2...");
    getdata(2,()=>{
     console.log("getting data 3...");
    getdata(3,()=>{
        console.log("getting data 4...");
    getdata(4);
    })
 })
})
// =====================================================================
/* 
Promises
Prmoses is for "eventual" completion of task.
it is an object in js. it is a solution to callback.

let promise = new Promise(resolve,reject){...}
  *resolve and reject are callback provided by Js.
*/
/* 
A JavaScript Promise has 3 states:

1.Pending – Initial state, neither fulfilled nor rejected.
2.Fulfilled – Operation completed successfully.
3.Rejected – Operation failed.
*/
// 1. Pending State
//⏳ "You placed the order, but it hasn’t arrived yet."
const order1 = new Promise((resolve, reject) => {
  // Order is being processed...
});
// Real-world: Amazon received your order and is processing it.
//JS: The promise is pending, waiting to either fulfill (deliver) or reject (cancel/fail).

// 2. Fulfilled State
// ✅ "You received the phone successfully!"
const order2 = new Promise((resolve, reject) => {
    resolve("Phone delivered!"); 
  });
  
  order2.then(message => console.log(message)); // Output: Phone delivered!
//   Real-world: The delivery person hands over your package.
// JS: The promise is fulfilled, and .then() is called.

// 3. Rejected State
// ❌ "Oops! The phone was out of stock or lost in transit."
const order = new Promise((resolve, reject) => {
    reject("Delivery failed: Item out of stock.");
  });
  
  order.catch(error => console.log(error)); // Output: Delivery failed: Item out of stock.
//   Real-world: Amazon cancels your order due to an issue.
// JS: The promise is rejected, and .catch() handles the error.


























































