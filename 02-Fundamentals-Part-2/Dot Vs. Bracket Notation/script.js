//02-Fundamentals-Part-2 : Dot Vs. Bracket Notation
'use strict'; // Should be in begining.

const currentYear = new Date().getFullYear();

const friends = [`Micheal` , `Don` , `Max`]

//Object Literal Syntax
const details = {
    firstName : `Rajeev`,
    lastName : `Mishra`,
    age : currentYear - 1000,
    job : `Consultant`,
    friends: friends
}

console.log(details);
console.log(details.lastName);
console.log(details[`lastName`]); // Bracket Notation Pass expression by computing from an operation

const nameKey = `Name`;
console.log(details[`first`+ nameKey]);// Bracket Notation Pass expression by computing from an operation
console.log(details[`last`+ nameKey]);// Bracket Notation Pass expression by computing from an operation

const input = prompt(`What do you need to know?`);
console.log(input);
if(details[input]){
    console.log(details[input]);
}else{
    console.log(`Enter correct value`);
}

// Add new property to object
details.location = `Germany`;
details[`tech`] = `Salesforce`;
console.log(details);

//Challange
console.log(`${details.firstName} has ${details.friends.length} friends, and his best friend is called ${details.friends[1]}`);