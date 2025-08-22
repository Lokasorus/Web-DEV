function saymyname(){
    console.log("hitesh")
}
saymyname ()
// function add(number1, number2){
//     console.log(number1 + number2)
    
// }
function add(number1, number2){
    let result = number1 + number2
    return result
}
const result = add(2, 45)  //storing return value in a variable
console.log("result: ", result)

function loginuser(username = "sam"){ ///passing a default value
    // if(username === undefined){
    //     console.log("please enter a user name")
    //     return
    // } -- same 
    if(!username){
        console.log("please enter a user name")
        return
    }
    return `${username} just logged in`
}
console.log(loginuser("hitesh"))
console.log(loginuser())


/////REST OPERATOR/////
function calculateprice(val1, val2, ...num1){
    return num1
}
console.log(calculateprice(200,400,500, 400, 600))

const user = {
    username: "hitesh",
    prices: 199
}
function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.prices}`)

}
handleobject(user)
handleobject({
    username: "sam",
    prices: 399
})

const new1 = [200, 400, 100, 600]

function returnsecond(getarray){
    return getarray[1]
}
console.log(returnsecond(new1))






