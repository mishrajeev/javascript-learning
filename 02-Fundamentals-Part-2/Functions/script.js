'use strict'; // Should be in begining.

/* Function is a resuable piece of code that can be resused */

function logger(){
    console.log(`My Name is Rajeev`);
}


logger(); // Function invoked
console.log(logger());

////////////////

function foodProcessor(apples, oranges){
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = foodProcessor(5 , 0);

console.log(appleJuice);

const mixFruitJuice = foodProcessor(5 , 5);

console.log(mixFruitJuice);