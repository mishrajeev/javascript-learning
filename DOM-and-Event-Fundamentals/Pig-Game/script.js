'use strict';

const score0Element = document.querySelector(`#score--0`);
const score1Element = document.getElementById(`score--1`);
const currentScore0Element = document.getElementById(`current--0`);
const currentScore1Element = document.getElementById(`current--1`);

const diceElement = document.querySelector(`.dice`);

const rollDiceElement = document.querySelector(`.btn--roll`);
const newGameElement = document.querySelector(`.btn--new`);
const holdElement = document.querySelector(`.btn--hold`);
/* 
score0Element.textContent = 0;
score1Element.textContent = 0;
 */

diceElement.classList.add(`hidden`);

const newGame = function () {
    score0Element.textContent = 0;
    score1Element.textContent = 0;
    currentScore1Element.textContent = 0;
    currentScore0Element.textContent = 0;
    diceElement.classList.remove(`hidden`);
    
}

newGameElement.addEventListener(`click`, newGame);