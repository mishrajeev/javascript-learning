//02-Fundamentals-Part-2 : Basic Array Operations
'use strict'; // Should be in begining.

const friends = [`Micheal` , `Don` , `Max`]; // Literal format
console.log(friends);

friends.push(`Sam`); // Add element to the end of the array - Return the length of the array
console.log(friends);

friends.unshift(`Tom`);// Add element to the start of the array - - Return the length of the array
console.log(friends);


const popped = friends.pop();// Removes the last element from the array - returns the removed element
console.log(popped);
console.log(friends); 


const shifted = friends.shift(); // Removes the first element from the array - returns the removed element
console.log(shifted);
console.log(friends); 

console.log(friends.indexOf(`Max`));
console.log(friends.indexOf(`Maxq`)); // for element that does not exist it return -1

console.log(friends.includes(`Max`)); // Strict equality check
console.log(friends.includes(`Maxq`));

friends.push(23);
console.log(friends.includes(`23`));
console.log (23 == `23`);