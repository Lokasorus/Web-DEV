class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERnaMe is ${this.username}`)
    }
}
//making user a teacher, taking values from user class by using extend and super keywords
class Teacher extends User {
    constructor(username, email, password){
        super(username); //automatically happens in class without call and this 
        
        this.email = email
        this.password = password

    }
addCourse(){
    console.log(`NEW COURSE WAS ADDED BY ${this.username}`)
}

}

const chai = new Teacher("chai", "chai@gmail.com", "123")
chai.addCourse()

const tea = new User("tea")

// tea.addCourse() //doesnt have access to addcourse as its created by user class
tea.logMe()
chai.logMe()



console.log(chai === tea)

console.log(chai instanceof Teacher)
console.log(Teacher instanceof User)
console.log(chai instanceof User)

