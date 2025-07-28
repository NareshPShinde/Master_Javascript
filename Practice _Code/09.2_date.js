
/* 
by default JS will use the brower's time zone and display a date as a full text string.
JS stores Dated as miliseconds.
****creating date object***** 
new Date() 
new Date(date string) 
new Date(year,month,day,hour,minutes,seond, milisecons)// min two parameter required to consider as year ,month...
new Date(miliseconds) 

****** JS Date Fomat *******
1.ISO Date (The International Standard) 
 ex. const d = new Date("2025-03-23T12:00:00-06:30Z");// T reqiured if not filled , result may be different inn diff browser.
2.short Date   
ex. const  d = new Date(2015-04-10)
3.Long Date    
ex. const d = new Date(january 15 2025)// can change the order.

/* Jan 1-1-1970 12:00:00
1000 milisecond = 1 second.
Number : 0 base Start hoga.(,,,)
String : 1 based start hoga("- - -")
*/

const d = new Date();
// const d = new Date(1000);
console.log(d);
console.log(d.getDate());
console.log(d.getDay());
// sun , mon , thes , wed ,thu , fri ,satur
//  0     1     2      3   4     5    6  
console.log(d.getMonth());
//jan/feb/march/april/may...
// 0/ 1  /2    /3    /5....
console.log(d.getFullYear());
console.log(d.getHours());// Gets the hours in a date, using local time
console.log(d.getMinutes());//Gets the minutes of a Date object, using local time.
console.log(d.getMilliseconds());
console.log(d.getTime());//Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC.


const d1 = new Date(2004,6,22,6,4,21)
console.log(d1);///2004-07-22T00:34:21.000Z
console.log(d1.toString());//Thu Jul 22 2004 06:04:21 GMT+0530 (India Standard Time)
const d2 = new Date("2004-6-22");
console.log(d2);
console.log(d2.toString());//Tue Jun 22 2004 00:00:00 GMT+0530 (India Standard Time)

