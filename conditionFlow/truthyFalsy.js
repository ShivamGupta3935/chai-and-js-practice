const userEmail = "g@mail.com"
// const name = ""
if (userEmail) {
    console.log("Got user email");  
}else{
    console.log("dont have user email");
}

/**
 * Truthy value
 * "0","false"," ",[],{},function(){}
 * 
 * falsy value
 * false, 0, -0, BigInt 0n, null, undefined, NaN
 */

const userMail = []
//how we can pass array in conditional statement
//using Array.length property
if(userEmail.length === 0){
    console.log("Array us Empty");
}else{
    console.log("Array is not empty");
}


//how we can cheque obj is emptyobject in conditional statement
const mtObj = {}

if((Object.keys(mtObj)).length === 0){
    console.log("empty object");
}else{
    console.log("Not empty object");
}


// Nullish coalescing operator (??) : null undefined
let val1,val2;
val1 = 12 ?? 13
console.log(val1);
val2 = null ?? 23
console.log(val2);

//ternary operator
const value = 10
value >= 90 ? console.log("value is greater then 90"):console.log("value is less then 100");;