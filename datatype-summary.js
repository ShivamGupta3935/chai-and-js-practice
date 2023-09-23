//primitive

/**
 * string, number, boolean, null, undefined, symbol, BigInt
 */
const myName = "Shivam"
const score = 33
const isLoggedIn = false
const temperture = null
let totalScore;
const Biginterger = 534954257430954n

// console.log(typeof Biginterger);
//reference  (Non-primitive)
/**
 * Array, Objects, Functions
*/
//Array
const cricketPlayer = ["Dhoni", "Sachin", "Bumrah"]

//
const myDetail={
    name: "shivam",
    age: 23,
    hobby:"reading",
}


//function
const testFun = function(){
    console.log("Hello Hitesh Sir How are you");
}


// console.log(typeof testFun);


//=+++++++++++++++++++memory manage in js ====+++++++++++++++++++++++++++++++
// two way to store variable in js 
// stack() :-- All primitive data type store in stack system mean a copy of value
//heap() :--  All non primitive data type always is heap system( reference of the value) 

let myFavouriteSub = "math";
let mohanFavouriteSub = myFavouriteSub

mohanFavouriteSub = "science"
console.log(myFavouriteSub);
console.log(mohanFavouriteSub);

const userOne = {
    emailId:"abc@gmail.com",
    name:"shivam"
}

const userTwo = userOne

userTwo.emailId = "xyz@google.com"

console.log(userOne.emailId);
console.log(userTwo.emailId);