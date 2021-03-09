//02-Fundamentals-Part-2 : The for Loop
"use strict"; // Should be in begining.

const currentYear = new Date().getFullYear();
const firstName = `Rajeev`;
const friends = [`Micheal`, `Don`, `Max`];
const rajeev = [firstName, `Mishra`, 2025 - 1992, `Cosnsultant`, friends, true];

let index = 0;
while (index < rajeev.length) {
	//console.log(rajeev[index]);
	index++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
//console.log(dice);

while (dice !== 6) {
	console.log(`You rolled a dice ${dice}`);
	dice = Math.trunc(Math.random() * 6) + 1;
	if (dice === 6) {
		console.log(`You got ${dice} so, no more rolling dice.`);
	}
}
