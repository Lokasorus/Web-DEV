// Immediately invoked function expressions (IIFE)
(function chai(){
    //named IIFE
    console.log(`DB CONNECED`)
})(); // immediately executed, used to remove pollution in global scope

(() => {
    console.log(`DB CONNECTED TWO ${name}`)
}) ('hitesh'); // unnamed IIFE parameter passed
