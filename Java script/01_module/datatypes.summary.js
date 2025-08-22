// primitive

// 7 types -1)strings 2) number 3)boolean 4)null - empty 5)undefined- variable declared but value not assigned
// 6)symbol - to make any value unique 7) BigInt - scientifc value or large value

// reference type (non prmitve)
//array, objects(imp), functions

//dynamic language
const score = 100
const scorevalue =0.3
const isloggedin = false
const outsidetemp = null
let useremail; //undefined//
const id = Symbol('123')
const anotherid = Symbol('123')
console.log(id === anotherid);
const bignumber = 12131414141411231231313131n

const heros = ["shaktiman", "nagaraj", "doga"] //array
let myobj = {
    name: "hitesh",
    age: 22,

} //object

//function
const myfunction = function(){
    console.log("hello world")
}
console.log(typeof(bignumber))
console.log(typeof(outsidetemp))
console.log(typeof(myfunction)) //function object

//stack (primitive)-  passes a copy, heap(non primitive)-- passes original value
let myyoutubename = "hitesh" //primitive
let anohername = myyoutubename // providing a copy of myyoutube name to another name
anothername = "chaiaurcode"
console.log(anothername, myyoutubename)

let user1 = {
    email: "lnightyt07@gmail.com",
    upi: "knight@ybl"

} // in heap it gets change originally, the value is originall passed
 let user2 = user1 // getting reference from the same address
 user2.email = "hitesh@"
 console.log(user1.email, user2.email)