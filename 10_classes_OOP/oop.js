//object literal
const user = {
   username: "shivam",
   email:"gupta@mail.com",
   password: 123,

   //method
   getUserDetails: function(){
    // console.log("got user detail from database");
    // console.log(this.username);
    // console.log(this);
   }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

//creating a function 
function User(username, loggedInCount, isloggedIn){
   this.username = username;
    this.loggedInCount = loggedInCount
    this.isloggedIn = isloggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    // return this
}

// without using this keyword
// const userOne = User("shivam", 4, true)
// const userTwo = User("suraj", 8, false)
// console.log(userOne);

// using new keyword
const userOne =new  User("shivam", 4, true)
const userTwo = new User("suraj", 8, false)

// console.log(userOne);
// console.log(userTwo);

//constructor
//note it is reference himself
console.log(userOne.constructor);