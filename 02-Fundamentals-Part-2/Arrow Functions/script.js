//02-Fundamentals-Part-2 : Arrow Functions
'use strict'; // Should be in begining.


/* Function is a resuable piece of code that can be resused */
// Added in ES6

const currentYear = new Date().getFullYear();


// Function Decleration
// Can be called anywhere in the code. i.e. before or after decleration
function calcAge1(birthYear) {
    return currentYear - birthYear;
}

// Function Expression
// Can only be called after decleration
/* const age2Is = `Age is ${calcAge2(1990)}`;
console.log(age2Is); */ // this is throw error.
const calcAge2 = function (birthYear) {
    return currentYear - birthYear;
}

// Arrow Function
// Added in ES6
// does not have this keyword
const calcAge3 = birthYear => currentYear - birthYear;
const age3Is = calcAge3(1990);
console.log(age3Is);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = currentYear - birthYear;
    return `${firstName} retires in ${65 - age} years` ;
}
console.log(yearsUntilRetirement(1993, `Rajeev`));
console.log(yearsUntilRetirement(1994, `Nisha`));