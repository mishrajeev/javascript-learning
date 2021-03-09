//02-Fundamentals-Part-2 : Intro to Objects
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
