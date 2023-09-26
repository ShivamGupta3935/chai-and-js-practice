
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