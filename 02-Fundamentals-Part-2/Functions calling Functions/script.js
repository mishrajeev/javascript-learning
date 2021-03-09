//02-Fundamentals-Part-2 : Functions calling Functions
'use strict'; // Should be in begining.

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function foodProcessor(apples, oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    console.log(applePieces, orangePieces);
    const juice = `Juice with ${applePieces} apples pieces and ${orangePieces} oranges pieces`;
    return juice;
}

console.log(foodProcessor(10, 5));