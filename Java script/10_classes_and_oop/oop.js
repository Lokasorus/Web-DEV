const user = {
username: "hitesh",
loginCount: 8,
signedIn: true,

getUserDetails: function(){
    // console.log("Got user details from database")
// console.log(`Username: ${this.username}`)
console.log(this)
}

}

const user2 = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,
    
    getUserDetails: function(){
        // console.log("Got user details from database")
    // console.log(`Username: ${this.username}`)
    console.log(this)
    }
}    

// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this)

//Constructor function

// const promiseOne = new Promise()
// const date = new Date()

// new = Constructor function
// creating multiple instances from one object literal

function User(username, logincount, isLoggedIn){
    this.username = username; // left variable and right values
    this.logincount = logincount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`welcome ${this.username}`)
    }

    return this
}

const user1 = new User("hitesh", 12, true)


const UserTwo = new User("chaiaurcode", 11, false)
console.log(user1.constructor) // reference to itself only
console.log(user1) 

console.log(UserTwo)
///its getting overwrite in user1
///thats why we use new keyword so that it doesnt get overwrite in original function
//if you do not do return this also then also it will give same value as its returned by default

//empty object called instance created when we use new
//constructor function called due to new keyword, which backs the argument and give it to them
//this keyword, argument inject in this keyword
//and it gives the argument

//read instance of method from google

