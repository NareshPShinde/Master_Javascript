// chai aur code by hitesh chaudhari   object part -2

// const tinder = new Object();
const tinderUser = {}
tinderUser.id ='123abc'
tinderUser.name = 'naresh'
tinderUser.isLogged = false 
console.log(tinderUser);

const regularUser =
{
    email : 'ance@gmail.com',
    fullName : 
    {
     userName :
     {
        firstName : 'umesh',
        lastName :'shinde'
     }   
    }
}
console.log(regularUser.fullName.userName.firstName);

// Combinig objects 
const obj1 = { 1 : "a" , 2 : " b"}
const obj2 = { 3 : "a" , 4 : " b"}
// const obj3 = {obj1,obj2} // { obj1: { '1': 'a', '2': ' b' }, obj2: { '3': 'a', '4': ' b' } }

// const obj3 = Object.assign(obj1,obj2)  //{ '1': 'a', '2': ' b', '3': 'a', '4': ' b' }

// const obj3 = Object.assign({},obj1,obj2)  
/*  - {} is used as targate object , all object after is source object that copies in {} Empty object. 
  -  if we know the all source object is copies properties in desired targate object. no need use this. 
*/
  const obj3 = { ...obj1,...obj2} // 90% it is used.
console.log(obj3);
 
const user = [ 
    {
        id : 1,
        email : 'abc@gamil.com'
    },
    {
        id : 1,
        email : 'abc@gamil.comk'
    },
    {
        id : 1,
        email : 'abc@gamil.comk'
    },
    {
        id : 1,
        email : 'abc@gamil.comk'
    }
   
]

console.log(user[0].email);

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged'));

// Second Video - object de-structure a JSON API intro