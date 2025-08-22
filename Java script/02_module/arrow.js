const user = {
    username:"hitesh",
    price: 999,
    welcomemessage: function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }
    ///this refers current context
}

user.welcomemessage()
user.username = "sam" //changong the current context
user.welcomemessage()
console.log(this) //referring to empty object 


function chai(){
    let username = "hitesh"
    console.log(this)
}
chai()

const chai2 = function(){
    let username ="hitesh"
    console.log(this.username)
}

const chai1 = () => {
    let username = "hitesh"
    console.log(this.username)

}
chai1()
chai2()

const addtwo = (num1, num2) => {
    return num1+num2 ///explicit return
}
console.log(addtwo(3, 4))

//implicit keyword return
const addone = (num1, num2) => num1 + num2 //or (num1+num2)
console.log(addone(4, 6))

const addthree = (num1, num2) => ({username: "hitesh"}) //wrapobjects in parenthesis

//difference between arrow function and function
console.log(addthree(4, 9))

const myarr = [2, 5, 6, 7, 8]
myarr.forEach(() => {}) 