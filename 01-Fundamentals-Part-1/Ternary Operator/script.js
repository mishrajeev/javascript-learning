//Ternary operator produces an expression
//  condition ? if true : if false
//  condition ? if : else

const age = 2;
age >= 18 ? console.log(`I like Beer 🍻`) : console.log(`I like Milk 🥛`);


// produces a value
const myDrink = age >= 18 ? `Beer 🍻` :`Milk 🥛`;
console.log(`My drink is ${myDrink}`);

// If equivalent of ternary operator 
let myDrink2;
if(age >= 18){
    myDrink2 = `Beer 🍻`;
}else{
    myDrink2 = `Milk 🥛`;
}
console.log(`My drink is ${myDrink2}`);


console.log(`My drink is ${age >= 18 ? `Beer 🍻` :`Milk 🥛`}`);