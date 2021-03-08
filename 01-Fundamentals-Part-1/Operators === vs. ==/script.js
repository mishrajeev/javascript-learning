//  ==   loose eqality operator : 
//  ===  strict eqality operator : Does not perform coercion
//  !=   loose eqality operator 
//  !==  strict diff operator : Does not perform coercion
const age = 18;

if(age === 18){
    console.log('Is Adult');
}else{
    console.log('Is not adult');
}


console.log(18 === 18);     // true
console.log(18 == 18);      // true
console.log(18 === `18`);   // false
console.log(18 == `18`);    // true
console.log(0 == false);    // true
console.log('0' == false);  // true
console.log(0 === false);    // false
console.log('0' === false);  // false
console.log("__________________________________________________");
console.log(18 !== 18);     // false
console.log(18 != 18);      // fasle
console.log(18 !== `18`);   // true
console.log(18 != `18`);    // fasle
console.log(0 != false);    // fasle
console.log('0' != false);  // fasle
console.log(0 !== false);    // true
console.log('0' !== false);  // true