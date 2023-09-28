//this and arrow function
const user = {
    username:"shivam",
    price:150,

    webKnowledge: function(){
        console.log(`${this.username} , welcome to my website`);
        console.log(this);
    }
}
// console.log(user.webKnowledge());
// user.username = "suraj"
// console.log(user.webKnowledge());
// console.log(this);

// function chaiWithCode(){
//     console.log(this);
// }
function chaiWithCode(){
    let username = "shivam"
    // console.log(this.username);
}

// chaiWithCode()
//this keyword refers to current object and its works only object and not work function 

//Arrow function

// const chaiAndCode = function(){
//     let username = "shivam"
//     console.log(this.username);
// }

//syntax of arrow function
// () => {}
// const chaiAndCode = () => {
//     // let username = "shivam"
//     console.log(this.username);
// }
// chaiAndCode()

const addnum = (num1, num2) => {
    return num1 + num2;
}
console.log(addnum(3, 5));

//when one line code we can write also this type
const multiNum = (num1, num2) => num1*num2
console.log(multiNum(3, 5));

//we can also write this type
const devideNum = (num1, num2) => (num1/num2)
console.log(devideNum(20, 4));


//passing object in arrow function
const userDetail = () =>  ({username:"shivam",age:23})
console.log(userDetail())
