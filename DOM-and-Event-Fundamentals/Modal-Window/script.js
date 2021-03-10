'use strict';
const buttonElement = document.querySelectorAll(`.show-modal`);
const modal = document.querySelector(`.modal`);
const overlay = document.querySelector(`.overlay`);
const closeModalButtom = document.querySelector(`.close-modal`);

const closeModal = function (){
    modal.classList.add(`hidden`);
    overlay.classList.add(`hidden`);
}

const showModal = function (){
    modal.classList.remove(`hidden`);
    overlay.classList.remove(`hidden`);
}

for (let i = 0; i < buttonElement.length; i++) {
    buttonElement[i].addEventListener(`click`, showModal);
}

closeModalButtom.addEventListener(`click`, closeModal);
overlay.addEventListener(`click`, closeModal);

document.addEventListener(`keydown`,function(event){
    if (event.key === `Escape` && !modal.classList.contains(`hidden`)) {
            closeModal();
    }
});