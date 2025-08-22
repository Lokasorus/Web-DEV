// Object.getOwnPropertyDescriptor(Math)
console.log(Math.PI)
//cant overwrite this value
//lets go behind the scenes

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descriptor)
//writable property is false, cant make true cause thats hardcoded it is

// we can also hardcode our object like this 

const mynewobj = Object.create(null)

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,
    orderchai: function(){
        console.log("chainahibani")
    }
}

console.log(chai)

console.log(Object.getOwnPropertyDescriptor(chai, "name")) // chai is object not property thats why output is undefined
//now after adding name (property) u will get the descriptor
Object.defineProperty(chai, "name", {//writable: false,
    enumerable: false,
})

console.log(Object.getOwnPropertyDescriptor(chai, "name")) //now they are false, we changed its property 
for (let [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function'){ // we dont want function in output so code na fate check applied
    console.log(`${key} : ${value}`) //chai not iterable as its an object  thats why we used Object.entries
    }
}
 // name is not printing after setting enumerable of name to false ;