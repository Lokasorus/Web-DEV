const useremail = "hitesh@ai"
if(useremail){
    console.log("got email")
}else{
    console.log("dont have email")
} /// automatically assumed string as true value and if empty string hen it assumes false
/// empty array true automatically assumed
//falsy values
// all else are truthy values
//truthy values
// "0" , 'false', " ", [], {}, function(){} 
// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}
// false == 0
// false == ''
// 0 == '' // all these are true


// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
