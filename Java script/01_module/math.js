const score = 400
const balance = new Number(100)
console.log(balance)
console.log(balance.toString().length)
console.log(balance.toFixed(1))
const othernumber = 23.8966
console.log(othernumber.toPrecision(3))

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

///// MATHS ////
console.log(Math)
console.log(Math.abs(-4));
console.log(Math.round(4.6))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.9))
console.log(Math.min(4, 3, 6, 8))
console.log(Math.floor(Math.random()*10)+1) // random generate vaue betwenn 0 and 1 and it is multiplied by 10 to 
const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min +1)) + min) // for bringing value in a desire range

//// DATES /////

let mydate = new Date();
console.log(mydate);
console.log(mydate.toString())
console.log(mydate.toLocaleString())
console.log(typeof mydate)

let mycreateddate = new Date(2023, 0, 23, 5, 3) // month starts from 0 in javacript
console.log(mycreateddate.toLocaleString(
))
console.log(mycreateddate.toDateString(
))

let datetwo = new Date("2023-01-14")
console.log(datetwo.toLocaleString())
let mytimestamp = Date.now()
console.log(mytimestamp)
console.log(datetwo.getTime()) //converting into milliseconds for the purpose of comparison
console.log(Math.floor(Date.now()/1000)) // converting into seconds

let newdate = new Date()
console.log(newdate)
console.log(newdate.getDate()) //get date day time month and year
// `${newdate.getDay()} and the time is`

console.log(newdate.toLocaleString('default', { weekday: "long"}))