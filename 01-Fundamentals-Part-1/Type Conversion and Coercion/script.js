//Type Converion & Type Coercion
//Type Converion is manually converting data types
//Type Coercion is when JS automatically coverts types


//type converion

const inputYear = '1991';
console.log(inputYear + 18); // 199118
console.log( Number(inputYear) + 18, inputYear);// type converted
console.log(Number('Rajeev')); // NaN = Not a Number
console.log(typeof NaN); // number is type of NaN
console.log(String(23), 43);

//type coercion
console.log(`'I'm ` + 23 + ` Years Old`); // + operator converst numbers to string and concatenates
console.log(`'I'm ` + `23` + ` Years Old`);
console.log(`10` - `5`  ); // - operator converst strings to numbers and perform substraction
console.log(`10` * `5`  ); // * operator converst strings to numbers and perform multiplication
console.log(`10` / `5`  ); // / operator converst strings to numbers and perform division
console.log(`10` > `5`  ); // / operator converst strings to numbers and perform logical operation

let n = '1' + 1;
n = n - 1;
console.log(n);
