//02-Fundamentals-Part-2 : The for Loop
"use strict"; // Should be in begining.

const currentYear = new Date().getFullYear();
const firstName = `Rajeev`;
const friends = [`Micheal`, `Don`, `Max`];
const rajeev = [firstName, `Mishra`, 2025 - 1992, `Cosnsultant`, friends, true];

for (let rep = 1; rep <= 10; rep++) {
	//console.log(`Count ${rep}`);
}
const typeofArray = [];
for (let i = 0; i < rajeev.length; i++) {
	const element = rajeev[i];
	console.log(element, `typeof`, typeof element);
	typeofArray.push(typeof element);
}
for (let index = 0; index < typeofArray.length; index++) {
	console.log(typeofArray[index]);
}

console.log(`------ continue-----------`);
for (let i = 0; i < rajeev.length; i++) {
	const element = rajeev[i];
	if (typeof element !== `string`) {
		continue;
	}
	console.log(element, `typeof`, typeof element);
}

console.log(`------ break-----------`);
for (let i = 0; i < rajeev.length; i++) {
	const element = rajeev[i];
	console.log(element, `typeof`, typeof element);
	if (typeof element === `number`) {
		break;
	}
}

console.log(`------ reverse loop-----------`);
for (let i = rajeev.length - 1; i >= 0; i--) {
	const element = rajeev[i];
	console.log(String(i), element, `typeof`, typeof element);
}

console.log(`------ nested loop-----------`);
for (let i = 0; i < rajeev.length; i++) {
	const element = rajeev[i];
	console.log(String(i), element, `typeof`, typeof element);
	if (typeof element === `object`) {
		for (let index = 0; index < element.length; index++) {
			const inner = element[index];
			console.log(`\t ${index}`, inner);
		}
	}
}
