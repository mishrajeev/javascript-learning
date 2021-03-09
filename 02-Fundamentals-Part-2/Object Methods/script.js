//02-Fundamentals-Part-2 : Object Mehtods
"use strict"; // Should be in begining.

const currentYear = new Date().getFullYear();

const friends = [`Micheal`, `Don`, `Max`];
const birthYear = 1997;

const details = {
	firstName: `Rajeev`,
	lastName: `Mishra`,
	birthYear: birthYear,
	job: `Consultant`,
	friends: friends,
	canDrive: true,
	calcAge: function (birthYear) {
		// function expression
		return currentYear - birthYear;
	},
	calcAge2: function () {
		// function expression
		//console.log(`this`, this);
		return currentYear - this.birthYear;
	},
	calcAge3: function () {
		// function expression
		this.age = currentYear - this.birthYear;
		return this.age;
	},
	getSummary: function () {
		return `${details.firstName} is a ${details.age} years old ${
			details.job
		}, and he ${details.canDrive ? `can` : `cannot`} drive.`;
	},
};
// Add new property to object
details.location = `Germany`;
details[`tech`] = `Salesforce`;
console.log(details);
console.log(`calcAge`, details.calcAge(details.birthYear));
console.log(`calcAge`, details[`calcAge`](details[`birthYear`]));
console.log(`calcAge2`, details.calcAge2());
console.log(`calcAge2`, details[`calcAge2`]());

console.log(`calcAge3 Initialise`, details.calcAge3());
console.log(`calcAge3`, details[`age`]);
console.log(`calcAge3`, details.age);
console.log(`Summary:`, details.getSummary());