const tinderuser = new Object() //singleton object
const tinderuser2 = {} // non singleton object
tinderuser.id = "123abc"
tinderuser.name ="sammy"
tinderuser.isloggedin = false

const regularuser = {
    email: "some@gmail.com",
     fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"

        }
    }
}
console.log(regularuser.fullname.userfullname.firstname)
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

const obj3 = {obj1, obj2}
console.log(obj3)

const obj4 = Object.assign({}, obj1, obj2)
console.log(obj4)

const obj5 = {...obj1, ...obj2}
console.log(obj5)

const users =[
    {
    id:1,
    email: "hitesh@gmail.com"
},
{
    id:1,
    email: "hitesh@gmail.com"
},
{
    id:1,
    email: "hitesh@gmail.com"
},
{
    id:1,
    email: "hitesh@gmail.com"
}
]

users[1].email
console.log(tinderuser)
console.log(Object.keys(tinderuser)) // to extract the keys from the objects // can extract values too
console.log(Object.values(tinderuser))
console.log(Object.entries(tinderuser)) // arrays of keys and values are stored inside an array
console.log(tinderuser.hasOwnProperty('isloggedin')) //check key


////destucturing
const course = {
    coursename: "js in hndi",
    price: "999",
    courseinstructor: "hitesh"

}

const {courseinstructor: instructor} = course
console.log(instructor)

const navbar = () => {

}

navbar(company = "hitesh")

//////APIs//////// apna kaam kisi aur ke sar, 

//json
// {

//     "name": "hitesh",
//     "coursename": "js in hindi",
//    " price": "free"
// }  //convert into objects and extract the values

[
    {},
    {},
    {}
]

///jsformatter use to study api like this type which includes arrays object