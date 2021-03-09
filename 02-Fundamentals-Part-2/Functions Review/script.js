//02-Fundamentals-Part-2 : Functions Review
'use strict'; // Should be in begining.

const currentYear = new Date().getFullYear();

const calcAge = function (birthYear){
    return currentYear - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement ;
    } else {
        console.log(`${firstName} already retired`);
        return -1 ;
    }
}

console.log(yearsUntilRetirement(1993, `Rajeev`));
console.log(yearsUntilRetirement(1800, `Nisha`));