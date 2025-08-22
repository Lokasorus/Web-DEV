class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is : ${this.username}`)
    }
static createID(){
    return `123`
}

}

//many times you want to not give the properties to everyobject that instantiate from this class in that case u use the static keyword

const hitesh = new User("hitesh")
// console.log(hitesh.createID())

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }


}

const iphone = new Teacher("iphone", "i@PaymentMethodChangeEvent.com")
iphone.logMe()
console.log(iphone.createID()); //not able to access as its static



