
["", "", ""]
const arr = [1, 2, 3, 4, 5]
    
for (const i of arr) {
    console.log(i)
    
}
const greetings ="hello world"
for (const i of greetings) {
    console.log(`each char ${i}`)
    
}

///maps

const map = new Map()
map.set('IN', "India") //key  in ' ' and values in " "
map.set('USA', "usnited states of america")
map.set('Fr', "France")
console.log(map)
for(const [key, value] of map){
    console.log(key, ':-', value)
}
const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}
 
// for(const [key, value] of myObject){
//     console.log(key, ':-', value);

// }  ///different way to iterate over an object