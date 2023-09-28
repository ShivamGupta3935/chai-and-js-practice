//conditional statement
//syntaxx of if statement
// if(condition){
    // code execute
// }

// if(true){
//     console.log("condition is true");
// }


// const userLoggedIn = true
// const temperture = 35
// if(userLoggedIn == true){
//     console.log("user logged in");
// }

// //else if 
// if(temperture == 40){
//     console.log("temperture is less then 35");
// }else{
//     console.log("temperture is greater then 35");
// }

//scope 
const score = 230
if(score > 200){
    const power = "fly" ;
    console.log(`user can ${power}`);
}

//condition switch statement
const month = 11;

switch (month){
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("Febuary");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("june");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("september");
        break;
    case 10:
        console.log("october");
        break;
    case 11:
        console.log("noverber");
        break;
    case 12:
        console.log("December");
        break;
    case 9:
        console.log("september");
        break;
    default:
        console.log("not match correct month");
        // break;
}
console.log("code run sucessfully");