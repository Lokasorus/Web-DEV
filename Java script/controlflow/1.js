/// we dont have to execute full code everytime, like when logged in run this code and when logged out run another
// if statement
const isuserloggedin = true
const temp = 41
if(temp<50){
    console.log("executed")

} // <, >. <=, >=, !=, ==, ===, !==

const balance = 1000
if(balance>500) console.log(balance); //implicit type, executed in one line
// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}


