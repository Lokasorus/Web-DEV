const myarr = [0, 1, 2 ,3 ,4, 5] // javascript arrays are resizeable
//shallow copies - share the same reference point - changes occur in original data
const myhero =["shaktiman", "nagraj"]
const myarr2 = new Array(1, 2, 3, 4)
console.log(myarr[1]) 

// array methods
myarr.push(6)
myarr.pop() // removed last value
myarr.unshift(9) //
myarr.shift() 
console.log(myarr)

console.log(myarr.includes(9)) // boolean type checks
console.log(myarr.indexOf(9))

const newarr = myarr.join() //array is binded and converted to string

console.log(newarr)

// slice, splice

console.log("A ", myarr)
const myn1 = myarr.slice(1,3)
console.log(myn1)
console.log("B ", myarr)

const myn2 = myarr.splice(1,3) //it includes last index too but thats not the difference 
console.log(myn2)
console.log("C ", myarr) // it manipulates the original orray too
//////////////////////////////////////

const marvelheroes = ["thor", " ironman", "spiderman"]
const dc = ["superman", "flash", "batman"]

marvelheroes.push(dc)
console.log(marvelheroes)
console.log(marvelheroes[3][1])
 const allheroes = marvelheroes.concat(dc)
console.log(allheroes)

const allnewheroes =[...marvelheroes, ...dc]
console.log(allnewheroes)

const anotherarray = [1, 2, 3, [4, 5, 6],7, [6, 7, [4, 5]]]
const realanotherarray = anotherarray.flat(2) //depth to which array can be resolved , could be infinity
console.log(realanotherarray)

console.log(Array.isArray("hitesh"))
console.log(Array.from("hitesh")) //makes array
console.log(Array.from({name : "hitesh"})) //interesting


let s1 = 100
let s2 = 200
let s3 = 300

console.log(Array.of(s1, s2, s3)) //making array from given values