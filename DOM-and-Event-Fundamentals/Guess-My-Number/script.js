"use strict";

/*  DOM : Document Object Model : Structured representation of HTML Document
    DOM is part of Web API
 */

const scoreElement = document.querySelector(`.score`);
const highScoreElement = document.querySelector(`.highscore`);
const messageElement = document.querySelector(`.message`);
const secretNumberElement = document.querySelector(`.number`);
const bodyElement = document.querySelector(`body`);
const checkButtonElement = document.querySelector(`.check`);
const againButtonElement = document.querySelector(`.again`);
const guessElement = document.querySelector(`.guess`);

const highMessage = `Too high 📈📈`;
const lowMessage = `Too Low 📉📉`;
const lostMessage = `☠ You lost the game!!! Try Again 😪`;
const invalidMessage = `Invalid Input!!! 😑 : Enter a number between 1 and 20`;
const wonMessage = `🎉🎉🎉 Correct Number!!!`;
const startMessage = `Start guessing...`;

const defaultScore = 20;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = defaultScore;
let highScore = 0;

//-----Onload Start-----
window.onload = function(){
    scoreElement.textContent = score;
    highScoreElement.textContent = highScore;
    setMessageToUser(startMessage);
}

//-----Onload End-----

function lowGuess() {
    setMessageToUser(lowMessage);
}

function highGuess() {
    setMessageToUser(highMessage);
}

function decreaseScore() {
    score--;
    scoreElement.textContent = score;
    if(score === 0){
        gameLost();
    }
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
    bodyElement.style.backgroundColor = `red`;
    secretNumberElement.style.width = `30rem`;
    secretNumberElement.textContent = secretNumber;
}

function gameWon() {
    setMessageToUser(wonMessage);
    setHighScore();
    bodyElement.style.backgroundColor = `#60b347`;
    secretNumberElement.style.width = `30rem`;
    secretNumberElement.textContent = secretNumber;

}

function setMessageToUser(message) {
    messageElement.textContent = message;
}
function invalidInput() {
    //messageElement.textContent = invalidMessage;
    setMessageToUser(invalidMessage);
}

function resetGame() {
    score = defaultScore;
    scoreElement.textContent = score;
    guessElement.value = '';
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    bodyElement.style.backgroundColor = `#222`;
    secretNumberElement.style.width = `15rem`;
    secretNumberElement.textContent = `?`;
    setMessageToUser(startMessage);
}


checkButtonElement.addEventListener(`click`, function () {
    const guess = Number(guessElement.value);
    
    if (score > 0) {
        if (!guess || guess < 1 || guess > 20) {
            invalidInput();
        } else if (guess === secretNumber) {
            gameWon();
        } else if (guess !== secretNumber){
            guess > secretNumber ? highGuess() : lowGuess();
            decreaseScore();
        }
    } else {
        gameLost();
    }
});

againButtonElement.addEventListener(`click`, function(){
    resetGame();
});