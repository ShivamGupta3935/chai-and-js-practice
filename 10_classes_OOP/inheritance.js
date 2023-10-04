class User{
    constructor(username, email){
        this.username = username
        this.email = email
        
    }

    logMe(){
        console.log(`Username is : ${this.username}`);
    }

}

class Teacher extends User{
    constructor(username, email, password){
        super(username, email);
        this.password = password
    }

    adCourse(){
        console.log(`new course added ${this.username}`);
    }
}

const student1 = new Teacher("suraj" , "sura@mail.com",'123')

student1.adCourse()
console.log(student1.email);
student1.logMe()

//User class ka instance banana
const user1 = new User("manish","manish@mail.com")

user1.logMe()
//not access
user1.adCourse()