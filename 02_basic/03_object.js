
const mySymbol = Symbol("key1")

const jsUser = {
    name:"shivam",   //its like this "name"
    "full name":"shivam gupta",
    age:23,
    [mySymbol]:"myKey1",
    location:"Mumbai",
    email:"shivam@gpt.com",
    isLoggedIn:false,
    lastLoginDays:["sunday","thursday","wednesday"]
}
//print the value
// console.log(jsUser);

//access the value
console.log(jsUser["name"]);
console.log(jsUser.email);
console.log(jsUser["full name"]);
console.log(jsUser[mySymbol]);
// console.log(typeof jsUser[mySymbol]);


//update the value of any object
jsUser.email = "gupta@gpt.com"
console.log(jsUser.email);

//method of freeze()
// Object.freeze(jsUser)

jsUser.age = 25
console.log(jsUser["age"]);

//adding function in object 
jsUser.greeting = function(){
    console.log("Hello sir kaisa chal rha hai chai and code");
}

console.log(jsUser.greeting());

jsUser.greetingTwo = function(){
    console.log(`hello js user ${this["full name"]}`);
    console.log(`hello js user ${this.age}`);
}
console.log(jsUser.greetingTwo());

//this is not correct way to calling a function
// console.log(jsUser.greeting);
//correct way to calling method name with parenthesis