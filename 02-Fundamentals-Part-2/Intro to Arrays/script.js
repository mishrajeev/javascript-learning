//02-Fundamentals-Part-2 : Intro to Array 
'use strict'; // Should be in begining.

const friends = [`Micheal` , `Don` , `Max`]; // Literal format
console.log(friends);

const yearArray = new Array(1999,2020,2001);
console.log(yearArray);

console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = `Jay`;
console.log(friends);

console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);

//friends[9] = 'some value';
console.log(friends);

//friends = [`Bob`]; // Full array cannot be relaced

const firstName = `Rajeev`; 
const rajeev = [firstName, `Mishra`, 2025 - 1992, `Cosnsultant`, friends];
console.log(rajeev);


console.log(`--------------------------------`);
//Array Excercise

const currentYear = new Date().getFullYear();

const years = [1990, 1192, 1922, 1998, 1885];

function calcAge1(birthYear) {
    return currentYear - birthYear;
}

const age1 = calcAge1(years[0]);
const age2 = calcAge1(years[1]);
const age3 = calcAge1(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [calcAge1(years[0]), calcAge1(years[1]), calcAge1(years[years.length - 1])];
console.log(ages);