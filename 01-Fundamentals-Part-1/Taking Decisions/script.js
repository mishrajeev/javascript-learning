const age = 9;
if(age >= 18){
    console.log("You can drive!!!🚗");
}else{
    const yearsLeft = 18 - age;
    console.log(`Come back in ${yearsLeft} years!!!`);
}

const birthYear = 2020;
let century;
if(birthYear <= 2000){
    century = 20;
}else{
    century = 21;
}
console.log(century);