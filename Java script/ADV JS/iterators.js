function* numberGenerator(){
yield 1;
yield 2;
yield 3;


}

let gen = numberGenerator();
let genTwo = numberGenerator()
console.log(gen.next().value); //error and gen is not a function thats why use next and value
console.log(gen.next().value);
console.log(gen.next().value);
console.log(numberGenerator()) // it gets executed
console.log(genTwo.next().value);
console.log(genTwo.next().value)

