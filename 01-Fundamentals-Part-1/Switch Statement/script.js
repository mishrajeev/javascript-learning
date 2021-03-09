const day = `Monday`;

switch(day){ // Strict equality comparision day === `saturday`
    case `monday` : 
        console.log(`It's Monday`);
        break;
    case `tuesday` : 
        console.log(`It's Tuesday`);
        break;
    case `wednesday` : 
        console.log(`It's Wednesday`);
        break;
    case `thursday` : 
        console.log(`It's Thursday`);
        break;
    case `friday` : 
        console.log(`It's Friday`);
        break;
    case `saturday` : 
    case `sunday` :
        console.log(`It's Weekend`);
        break;
    default:
        console.log(`Not a day`);
}

// If Else equivalent of Switch statement above 

if(day === `monday`){
    console.log(`It's Monday`);
} else if(day === `tuesday`){
    console.log(`It's tuesday`);
} else if(day === `wednesday`){
    console.log(`It's wednesday`);
} else if(day === `thursday`){
    console.log(`It's thursday`);
} else if(day === `friday`){
    console.log(`It's friday`);
} else if(day === `saturday` || day === `sunday`){
    console.log(`It's Weekend`);
} else {
    console.log(`Not a day`);
}
