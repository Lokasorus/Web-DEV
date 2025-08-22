//using json formatter to simplify the APIs and study them using various forms such as tree available on the website
//lets study promises
//promise means task will get added in queue but will not be completed at the moment
// three states: pending fulfill and rejected;
// new keyword provides new instance f an object
const promiseOne = new Promise(function(resolve, reject){
    //Do an Async TAsk
    //DB calls
    //cryptography, network calls
    setTimeout(function(){
        console.log('Async task is complete')
        resolve()//connecting resolve to connect with .then
    }, 1000)

})
// created a promise now its time to consume them
promiseOne.then(function(){
    console.log("Promise Consumed")
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    }, 1000)
    
}).then(function(){
    console.log("Async 2 is resolved")
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"}) // passing datatypes through resolve to passs through then


    }, 1000)
})

promiseThree.then(function(user){
    console.log(user)

})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: "hitesh", password: "123"})
        } else{
            reject('ERROR: Something Went Wrong') // connect to the catch
        }
    }, 1000)
})
// promiseFour.then().catch()
// const username = promiseFour.then((user) => {
//     console.log(user)
//     return user.username
// })

// console.log(username) // rejection of promise cant do this
const username = promiseFour
.then((user) => {
    console.log(user)
    return user.username
})
.then((username)=> {
 //this will have the value of the upper chain i.e the value first then will return will be used in next then called chain very important in database connection   
 console.log(username)
})
.catch(function(error){
    console.log(error) // for the reject part
}).finally(function(){
    console.log("The promise is either resolved or Rejected")
    //is your work completed finally? always executed
})

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "javascript", password: "123"})
        } else{
            reject('ERROR: JS Went Wrong') // connect to the catch
        }
    }, 1000)
});

// async function consumePromiseFive(){
//     const response = await promiseFive  // promise is a object cant consume like this promisefive()
// console.log(response)
// } //cant hadnle catch gracefully

// will give error if error = true cause it cant handle errors directly 
//async function means you are assuming whenever the promise Five will execute u will get the value, but in case it rejects u will get error
//what you can do
async function consumePromiseFive(){
    try{
    const response = await promiseFive  // promise is a object cant consume like this promisefive() takes time to resolve promisefive hence using await
console.log(response)} catch(error){
    console.log(error)
}
} 

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')// takes time to fetch data using await
//         // console.log(response) // it will print response but it takes time to convert o u need to await this too
// const data = await response.json() //converting string to json
// console.log(data)
//     } catch (error) {
//         console.log("E: ", error);
//     }

// }

//

// getAllUsers() //no probem in this code

//then method

fetch('https://api.github.com/users/lokasorus')
.then((response) => {
    return response.json()

})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error)
})
//it is executed first because of formation of high priority queue formation - micro task queue