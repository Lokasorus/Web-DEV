/// singleton - from constructors

//object literals
const mysymbol = Symbol("key1")

const user = {
    name : "hitesh",
    age: 18,
    [mysymbol] : "mykey1",
    location: "jaipur",
    email: "hitesh@google.com",
    isloggedin: false,
    lastloggedin: ["monday", "saturday"]

} //object
Object.create  // constructor method - singleton
console.log(user.email)
console.log(user["email"])
console.log(user[mysymbol])

user.email = "hitesh@chatgpt.com"
// Object.freeze(user)
// user.email = "microsoft"
console.log(user)


user.greeting = function(){
    console.log("hello")
}

user.greetingtwo = function(){
    console.log(`hello, ${this.name}`)
}
console.log(user.greeting())
console.log(user.greetingtwo())
console.log(user)





