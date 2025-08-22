let myname = "hitesh       "

// console.log(myname.trim().length)
// console.log(myname.truelength)

// creating a method true length

let myHeros = ["thor", "spiderman"]

let heropower ={
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidey power is ${this.spiderman}`);
        
    }


}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`)
} //declaring or making a method hitesh for all objects whther its an array string or whatever

// heropower.hitesh()

myHeros.hitesh() // avialable to array also as its also an object
 //if i give powr to arrray only so it goes to object tooo? lets see

 Array.prototype.heyhitesh = function(){
    console.log(`hitesh says hello`)
 }

 myHeros.heyhitesh() //array has the power

//  heropower.heyhitesh() // it doesnt have hey hitesh access

//inheritance

const user ={
    name: "chai",
    email: "chai@google.com"
}

const teacher ={
    makeVideo: true

}

const teachingassistant = {
    isavailable: false
}

const TAsupport = {
    makeassignment: 'Js assignment',
    fulltime: true,
    __proto__: teachingassistant //using proto keyword to access the property of other objects
}

teacher.__proto__ = user

//exchanging information or linking various objects
//new approach
//modern syntax
Object.setPrototypeOf(teachingassistant, teacher)
//teachingassistant can acces all properties of teacher

let anotherusername = "chaiaurcode       "

String.prototype.trueLength = function(){
    
    console.log(`${this}`) // chaiaurcode output as anotherusername giving reference to chaiaurcode
    // console.log(`${this.name}`)
    console.log(`True length is: ${this.trim().length}`)
}

anotherusername.trueLength() // method so using ()
"hitesh".trueLength()
"iceTea".trueLength()