
//make a function
function myfunction(){
    console.log("s");
    console.log("h");
    console.log("i");
    console.log("v");
    console.log("a");
    console.log("m");   
}

// myfunction()

//using function add two number
function addNum(num1, num2){
    const sum = num1 + num2;
    // console.log(sum)
    return sum;
}
console.log(addNum(4, 5))

function loginUserName(username){
    if(username === undefined){
        console.log("enter a user name");
        return
    }
    return`${username} just logged in`
}

// console.log(loginUserName("shivam"))
console.log(loginUserName("suraj"))

// //rest aperator 
// function calculateCartPrice(...num1){
//        return num1;
// }
function calculateCartPrice(val1, val2, ...num1){
       return num1;
}

// console.log(calculateCartPrice(200, 200,400,1000));

//how we can pass object in function

// method1
const user = {
    name:"shivam",
    age: 34,
    price:2345,
    sub:"math"
}

function passObj(anyObject){
      console.log(`The name of user ${anyObject.name} and age is ${anyObject.age}`);
}

passObj(user)

//are direct pass object as argument
passObj({
    name:"suraj",
    age:23,
    sunname:"gupta"
})


// how to pass array in function
const allUserName = ["suraj", "shivam","manish","parvesh","shubham"]

function passArrayInFn(anyArray){
      return anyArray[2]
}

console.log(passArrayInFn(allUserName));

//direct pass array in function
console.log(passArrayInFn([1, 3, 5, 6]));