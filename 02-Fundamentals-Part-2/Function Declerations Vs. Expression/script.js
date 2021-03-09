//02-Fundamentals-Part-2 : Function Declerations Vs. Expression
'use strict'; // Should be in begining.

const currentYear = new Date().getFullYear();

// Function Decleration
// Can be called anywhere in the code. i.e. before or after decleration
function calcAge1(birthYear) {
    return currentYear - birthYear;
}

const age1Is = `Age is ${calcAge1(1994)}`;
console.log(age1Is);


// Function Expression
// Can only be called after decleration
/* const age2Is = `Age is ${calcAge2(1990)}`;
console.log(age2Is); */ // this is throw error.
const calcAge2 = function (birthYear) {
    return currentYear - birthYear;
}

const age2Is = `Age is ${calcAge2(1994)}`;
console.log(age2Is);



console.log(age1Is, `-----` ,age2Is);
