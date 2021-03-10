"use strict";

const score0Element = document.querySelector(`#score--0`);
const score1Element = document.getElementById(`score--1`);
const currentScore0Element = document.getElementById(`current--0`);
const currentScore1Element = document.getElementById(`current--1`);

const player0Element = document.querySelector(`.player--0`);
const player1Element = document.querySelector(`.player--1`);

const diceElement = document.querySelector(`.dice`);

const rollDiceElement = document.querySelector(`.btn--roll`);
const newGameElement = document.querySelector(`.btn--new`);
const holdElement = document.querySelector(`.btn--hold`);

const finalScore = 2;
let currentScore = 0;
let activePlayer = 0;
let scores = [0, 0];
let playing = true;

score0Element.textContent = scores[0];
score1Element.textContent = scores[1];
currentScore1Element.textContent = currentScore;
currentScore0Element.textContent = currentScore;

diceElement.classList.add(`hidden`);

const newGame = function () {
	scores = [0, 0];
	score0Element.textContent = scores[0];
	score1Element.textContent = scores[1];
	playing = true;
	document
		.querySelector(`.player--${activePlayer}`)
		.classList.remove(`player--winner`);
	document
		.querySelector(`.player--${activePlayer}`)
		.classList.add(`player--active`);
	resetCurrentScore();
};

function resetCurrentScore() {
	currentScore = 0;
	currentScore0Element.textContent = currentScore;
	currentScore1Element.textContent = currentScore;
}

function generateDiceNumber() {
	return Math.trunc(Math.random() * 6) + 1;
}

const rollDice = function () {
	if (playing) {
		const dice = generateDiceNumber();
		diceElement.classList.remove(`hidden`);
		diceElement.src = `resource/dice-${dice}.png`;
		if (dice !== 1) {
			currentScore += dice;
			document.getElementById(
				`current--${activePlayer}`
			).textContent = currentScore;
		} else {
			switchPlayer();
		}
	}
};

const holdValue = function () {
	if (playing) {
		scores[activePlayer] += currentScore;
		document.getElementById(`score--${activePlayer}`).textContent =
			scores[activePlayer];

		if (scores[activePlayer] >= finalScore) {
			finishGame();
		} else {
			switchPlayer();
		}
	}
};

const switchPlayer = function () {
	currentScore = 0;
	document.getElementById(
		`current--${activePlayer}`
	).textContent = currentScore;
	activePlayer = activePlayer === 0 ? 1 : 0;
	player0Element.classList.toggle(`player--active`);
	player1Element.classList.toggle(`player--active`);
	resetCurrentScore();
};

const finishGame = function () {
	document
		.querySelector(`.player--${activePlayer}`)
		.classList.toggle(`player--winner`);
	document
		.querySelector(`.player--${activePlayer}`)
		.classList.toggle(`player--active`);
	playing = false;
};

newGameElement.addEventListener(`click`, newGame);
rollDiceElement.addEventListener(`click`, rollDice);
diceElement.addEventListener(`click`, rollDice);
holdElement.addEventListener(`click`, holdValue);
