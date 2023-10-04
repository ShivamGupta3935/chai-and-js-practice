function setUserName(username){
      this.username = username
}

function createUser(username, email, password){
    setUserName.call(this, username)

    this.password = password
    this.email = email
}

const chai  = new createUser("shivam", "abc@mail.com", 1234)
console.log(chai);