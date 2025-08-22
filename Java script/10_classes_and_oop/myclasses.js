// ES6 k baad // class will cal the constructor same as happening in new keyword
class User {
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password


    }
    //creating differnet methods for a class


    encryptPassword(){
        return `${this.password}abc` 
    }

    changeusername(){
        return `${this.username.toUpperCase()}`
    }

}

const chai = new User("chai", "chai@gmail.com", "123")

console.log(chai.encryptPassword());
console.log(chai);
console.log(chai.changeusername());

//behind the scenes

function user(username, email, password){
    this.username = username
    this.email = email 
    this.password = password
}

user.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

user.prototype.changeusername = function(){
    return `${this.username.toUpperCase()}`
}
const tea = new user("tea", "tea@gmail.com", "123456")

console.log(tea.encryptPassword());
console.log(tea);
console.log(tea.changeusername());


