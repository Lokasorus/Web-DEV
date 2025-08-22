//takes a function and returns a function
function makeTea(typeofTea){
    return `this is ${typeofTea}`

}
function processTeaOrder(fn){
    return fn('earl grey') //returning the function with some parameter as the function we want to call has already demanded a paraemter
}


let order  = processTeaOrder(makeTea)
console.log(order)

function createTeaMaker(){
    return function(teatype){
        return `Making ${teatype}`
    }
}

let teamaker = createTeaMaker()// returns khali function
console.log(teamaker())
console.log(teamaker('green tea'))//pass variable into that function

function createTeaMaker2(name){
    return function(teatype){
        return `Making ${teatype}, ${name}`
    }
}

// in this case outer function has access to inner function variales
let teamaker2 = createTeaMaker2("aryan")
let result = teamaker2('green tea')
console.log(result)