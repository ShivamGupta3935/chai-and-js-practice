// const { Promise } = require("mongoose");

const promiseOne = new Promise(function(resolve, reject){
    // co an asyne task
    //DB ca;;s , cryptography,newtwork
    setTimeout(function () {
        console.log("Async task is complete");
        resolve()
    }, 1000)
})
promiseOne.then(function () {
    console.log("promise consumed");
})


new Promise(function (resolve, reject) {
    setTimeout(function(){
        console.log("Async two is invoked");
        resolve()
    }, 1000)
}).then(function () {
    console.log("Async 2 resolved");    
})

//promise 3
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({name:"shivam",email:"g@mail.com"})
    }, 1000);
})

promiseThree.then(function(userData){
     console.log(userData);
})

const promiseFour = new Promise(function(resolve, reject){
      setTimeout(() => {
        let error = true;
        if(!error){
            resolve({name:"suraj", password:1234})
        }else{
            reject("Error found in this code");
        }
      }, 1000)
}) 

promiseFour.then((e) => {
    console.log(e);
    return e.name;
})
//First then method jo return karega wo return value hi second then me jayega
.then(function(e){
    console.log(e);
}).catch(
    function(e){
        console.log("E : ", e);
})
.finally(() => console.log("The promise is either resolve or reject"))


//promise with async await code 
const promiseFive = new Promise((resolve, reject) => {
    setTimeout(function(){
        const error = true
        if(!error){
            resolve({username: "javascript", teacher: "Hitesh choudhary"})
        }else{
            reject(console.log("js went wrong"))
        }
    }, 1000)
})

async function consumedPromiseFive(){
  try {
    const response = await promiseFive
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumedPromiseFive()

// async function getAllUsers() {
//    try {
//     const response = await fetch("https://api.github.com/users")
//     // console.log(response);
//     const data = await response.json()
//     console.log(data);
//    } catch (error) {
//      console.log("Error :",error);
//    }
// }
// getAllUsers()


fetch("https://api.github.com/users")
.then((response) => {
    return response.json()
}).then((data) => console.log(data))
.catch((err) => console.log(err))

