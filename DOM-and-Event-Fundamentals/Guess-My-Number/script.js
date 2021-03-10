"use strict";

/*  DOM : Document Object Model : Structured representation of HTML Document
    DOM is part of Web API
 */

/*
    document.querySelector(`.message`);
    console.log(document.querySelector(`.message`));
    console.log(document.querySelector(`.message`).textContent);
    //ele.textContent = '';
    console.log(document.querySelector(`.number`));
    console.log(document.querySelector(`.score`));
    document.querySelector(`.number`).textContent = 13;
    document.querySelector(`.score`).textContent = 10;
    document.querySelector(`.guess`).value = 10;
    document.querySelector(`.message`).textContent = `🎉 Correct Number!`;
*/

const secretNumber = Math.trunc(Math.random() * 20) + 1;

const scoreElement = document.querySelector(`.score`);
const highScoreElement = document.querySelector(`.highscore`);
const messageElement = document.querySelector(`.message`);
const secretNumberElement = document.querySelector(`.number`);

const highMessage = `Too high 📈📈`;
const lowMessage = `Too Low 📉📉`;
const lostMessage = `☠ You lost the game!!! Try Again 😪`;
const invalidMessage = `Invalid Input!!! 😑`;
const wonMessage = `🎉🎉🎉 Correct Number!!!`;
const startMessage = `Start guessing...`;

let score = 20;
let highScore = 0;

//-----Onload Start-----
scoreElement.textContent = score;
highScoreElement.textContent = highScore;
secretNumberElement.textContent = secretNumber;
setMessageToUser(startMessage);
//-----Onload End-----

function lowGuess() {
    //messageElement.textContent = lowMessage;
    setMessageToUser(lowMessage);
}

function highGuess() {
    //messageElement.textContent = highMessage;
    setMessageToUser(highMessage);
}

function decreaseScore() {
    score--;
    scoreElement.textContent = score;
}

function setHighScore() {
    if (score > highScore) {
        highScore = score;
        highScoreElement.textContent = highScore;
    }
}

function gameLost() {
    score = 0;
    scoreElement.textContent = score;
    setMessageToUser(lostMessage);
}

function setMessageToUser(message) {
    messageElement.textContent = message;
}

document.querySelector(`.check`).addEventListener(`click`, function () {
    const guess = Number(document.querySelector(`.guess`).value);
    if (score > 0) {
        if (!guess) {
            messageElement.textContent = invalidMessage;
        } else if (guess === secretNumber) {
            messageElement.textContent = wonMessage;
            setHighScore();
        } else if (guess > secretNumber) {
            highGuess();
            decreaseScore();
        } else if (guess < secretNumber) {
            lowGuess();
            decreaseScore();
        }
    } else {
        gameLost();
    }
});
