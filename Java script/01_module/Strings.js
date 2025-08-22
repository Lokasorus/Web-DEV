const name  = "hitesh"
const repo = 50
console.log(name + repo + "value");
// not recommending this
console.log(`hello my name is ${name} and my repo count is ${repo}`)
const gamename = new String('hitesh-hc-com') //its an object
console.log(gamename)
console.log(gamename[0])
console.log(gamename.__proto__)
console.log(gamename.length)
console.log(gamename.toUpperCase());
console.log(gamename.charAt(2)); // 
console.log(gamename.indexOf('t'));
const newstring = gamename.substring(0, 4)
console.log(newstring)
const anotherstring =  gamename.slice(-8,4)
console.log(anotherstring)

const newstringone = "    hitesh  "
console.log(newstringone)
console.log(newstringone.trim());
const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-'))
console.log(url.includes('hitesh'))
console.log(gamename.split('-'))




