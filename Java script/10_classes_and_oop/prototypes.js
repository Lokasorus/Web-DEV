// arrrow function doesnt have this keyword
function multiply(num){
return num*5
}
multiply.power = 2 //is function an object
console.log(multiply.power)
console.log(multiply(5))
console.log(multiply.prototype) // function is an object too , we can aplly prototypes on the function too//object reference is null
// empty parenthesis indicates the context for this for that method
function createuser(username, score){
    this.username = username
    this.score = score

}

createuser.prototype.increment = function(){ //declaring prototypes for a function
    this.score++
} // score kiska badhau tea ka ya chia ka as it doesnt have any context
//jisne bhi bulaya hai uske pas jao == this
createuser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
}

const chai = new createuser("chai", 25)
const tea = new createuser("tea", 250) // new keyword to indicate the newly induced prototypes

chai.printMe() // cannot read properties of undefined , error, 

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/