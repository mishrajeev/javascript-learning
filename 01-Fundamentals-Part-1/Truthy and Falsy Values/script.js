// Falsy are not false but become false when we convers it to boolean
// 5 Falsy values - 0, '', undefined, null, NaN
// Any other value is truthy value

console.log(0, Boolean(0));
console.log(undefined, Boolean(undefined));
console.log(null, Boolean(null));
console.log('Empty String', Boolean());
console.log(NaN, Boolean(NaN));

console.log('Rajeev', Boolean('Rajeev'));
console.log('{}', Boolean({}));
console.log(12, Boolean(12));
console.log(`-------------------------------`);

let money = 0;
if(money){ // 0 converts to false
    console.log(`Don't spend it all`);
}else {
    console.log(`Get a job 🐱‍🏍`); // Executed
}

money = 10;
if(money){// 10 converts to true
    console.log(`Don't spend it all😁`);
}else {
    console.log(`Get a job`);
}