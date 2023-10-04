//define a class
class User{

    //constructor is not only property of the user
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    // method 
    encryptedPassword(){
        console.log(`${this.password}abc`);
    }

    UserNameInUpperCase(){
        console.log(`${this.username.toUpperCase()}`);
    }
}

const user1 = new User("shivam","abc@gmail.com", "2345")

user1.encryptedPassword()
user1.UserNameInUpperCase()


//Imp how class work behind the scene 

function OtherUser(username, email, password){
    this.username = username
    this.password = password
    this.email = email
}

OtherUser.prototype.encryptedPasswordagain = function(){
    console.log(`${this.password}abc`);
}

OtherUser.prototype.UserNameInUpperCaseagain = function(){
    console.log(`${this.username.toUpperCase()}`);
}

const user2 = new OtherUser("Suraj", "suraj@mail.com","23498")

user2.encryptedPasswordagain()
user2.UserNameInUpperCaseagain()