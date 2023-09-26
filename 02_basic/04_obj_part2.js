const tinderUser = new Object()

tinderUser.name = "shivam"
tinderUser.age = "23"
tinderUser.email= "tinder@gmail.com"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:'d'}
const obj3 = {5:'e', 6:'f'}

// const margedObj = Object.assign({},obj1, obj2, obj3)
// console.log(margedObj);


// const mergingArray = {...obj1, ...obj2, ...obj3}
// console.log(mergingArray);

const newTinderUser = [{
    email:"asc@mail.in",
    fullname:{
        userFullname:{
            myfullname:{
                name:"shivam",
                middleName:"munnaLal"
            },
            lastname:"gupta"
        }
    },
    age:24   
},
{
    name:"suraj",
    email:"guptasuraj@gmail.com",
    age:25
},
{
    name:"manish",
    lastname:"gupta",
    email:"manish@gmail.com",
    age:24
}]
console.log(newTinderUser);

console.log(newTinderUser[0].fullname.userFullname.myfullname.middleName)
console.log(newTinderUser[2].email)

