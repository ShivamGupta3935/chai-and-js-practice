const { useReducer } = require("react")

let myName = "shivam    "
let myWork = "study  "

// console.log(myName.length);
// console.log(myName.trueLength);

let myHero = ["shaktiman", "balveer", "Thor"]

let heroPower = {
    shaktiman:"invisible",
    balveer: 'seven diff power',
    thor: "hamer"
}

//object prototype
Object.prototype.objMethod = function(){
    console.log("object method is available in all place");
}

//Array prototype 
Array.prototype.arrMethod = function(){
    console.log("Array method");
}

// myHero.objMethod()
// myHero.arrMethod()
// heroPower.objMethod()
// heroPower.arrMethod()

//note object ka method array obj and string ko access hai but array ka method 
//only arry ko hi access ha other ko nhi

//inheritance
const user = {
    name:"chai",
    email:"a@gmail.com"
}

const Teacher = {
    makeVideo : true
}
const teachingSupport = {
    isAvailable : false
}

const TASupport ={
    makeAssignment : " js assignment",
    fullTime:true,
    __proto__:teachingSupport
}

Teacher.__proto__ = user

//for inherit modern syntax
Object.setPrototypeOf(teachingSupport, Teacher)

let anotherUsername = "chaiandcode    "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`);
}

console.log(anotherUsername.length);

console.log(anotherUsername.trueLength());
console.log(myName.trueLength());
