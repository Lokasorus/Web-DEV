let a = 100
// const b = 20
// var c = 300


if(true) {
    let a  =10
    const b = 20
    console.log("inner: ", a)
    // var c =30

}//scope when used with function and if else loops


console.log(a)

// console.log(b)
// console.log(c) // var gets printed because it has problem with its scoping
//globa scope is different here in this environment and in web browser

/////// nested scope ////////
function one(){
    const username = "hitsh"
    function two(){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website) //cant execute inner scope of this but inner function can access the global variables or outer scope variables
    two()
}
one()

// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5) ///expressions - similar just functions stored in variables
const addTwo = function(num){
    return num + 2
} ///error =  cant excess addtwo when function stored in variables,