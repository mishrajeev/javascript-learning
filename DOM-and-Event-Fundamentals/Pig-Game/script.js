"use strict";

const score0Element = document.querySelector(`#score--0`);
const score1Element = document.getElementById(`score--1`);
const currentScore0Element = document.getElementById(`current--0`);
const currentScore1Element = document.getElementById(`current--1`);
const playersElement = document.querySelectorAll(`.player`);

const diceElement = document.querySelector(`.dice`);

const rollDiceElement = document.querySelector(`.btn--roll`);
const newGameElement = document.querySelector(`.btn--new`);
const holdElement = document.querySelector(`.btn--hold`);

let player0Active = true;
let player1Active = false;
let currentScore = 0;
let score0 = 0;
let score1 = 0;

score0Element.textContent = score0;
score1Element.textContent = score1;
currentScore1Element.textContent = currentScore;
currentScore0Element.textContent = currentScore;

diceElement.classList.add(`hidden`);

const newGame = function () {
	currentScore = 0;
	score0 = 0;
	score1 = 0;
	score0Element.textContent = score0;
	score1Element.textContent = score1;
	currentScore1Element.textContent = currentScore;
	currentScore0Element.textContent = currentScore;
};

function generateDiceNumber() {
	return Math.trunc(Math.random() * 6) + 1;
}

const rollDice = function () {
	const dice = generateDiceNumber();
	diceElement.classList.remove(`hidden`);
	diceElement.src = `resource/dice-${dice}.png`;
	if (dice !== 1) {
		currentScore += dice;
		assignCurrentScore(currentScore);
	} else {
		switchPlayer();
	}
};

const holdValue = function () {
	if (player0Active) {
		score0 += currentScore;
		score0Element.textContent = score0;
	} else {
		score1 += currentScore;
		score1Element.textContent = score1;
	}

	switchPlayer();
};

function assignCurrentScore(score) {
	player0Active
		? (currentScore0Element.textContent = score)
		: (currentScore1Element.textContent = score);
}

function switchPlayer() {
	for (let index = 0; index < playersElement.length; index++) {
		let element = playersElement[index];
		if (element.classList.contains(`player--active`)) {
			element.classList.remove(`player--active`);
		} else {
			element.classList.add(`player--active`);
			activePlayer(index);
		}
	}
	resetCurrentScore();
}
function activePlayer(activeIndex) {
	activeIndex === 0 ? (player0Active = true) : (player0Active = false);
	player1Active = !player0Active;
}

function resetCurrentScore() {
	currentScore = 0;
	currentScore0Element.textContent = currentScore;
	currentScore1Element.textContent = currentScore;
}

newGameElement.addEventListener(`click`, newGame);
rollDiceElement.addEventListener(`click`, rollDice);
holdElement.addEventListener(`click`, holdValue);
