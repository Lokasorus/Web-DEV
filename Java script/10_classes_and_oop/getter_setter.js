class User{
    constructor(email, password){
        this.email =email
        this.password = password
    }

    get email(){ //property name is used in forming getters and setters
        return this._email.toUpperCase()

    }

    set email(value){
         this._email = value.toUpperCase() // never return setters , it is used to set the values
    }

    get password(){
        // return this.password.toUpperCase()
        return `${this._password}hitesh` //= value.toUpperCase() //changing cause of set error
    }

    set password(value){
        // this.password = value.toUpperCase()  //call stack size exceeded error as we are also setting and constructor also doing the same thing
        this._password = value.toUpperCase()  // changed the variable_password
    
    } // as its setting something so hae to give something as an input




}

const hitesh = new User("hitesh@hitesh.ai", "abc")
console.log(hitesh.password) //after setting get it wil give error so have to define set tooo for removing error

//for fine grain control
//dont want to give access of some properties to everyone or set some customised code for the access of some properties
//value is set using setters and returned based on getters

console.log(hitesh.email)


