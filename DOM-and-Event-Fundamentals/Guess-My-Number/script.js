'use strict';

/*  DOM : Document Object Model : Structured representation of HTML Document
    DOM is part of Web API
 */

document.querySelector(`.message`);
console.log(document.querySelector(`.message`));
console.log(document.querySelector(`.message`).textContent);
//ele.textContent = '';
console.log(document.querySelector(`.number`));
console.log(document.querySelector(`.score`));
document.querySelector(`.number`).textContent = 13;
document.querySelector(`.score`).textContent = 10;
document.querySelector(`.guess`).value = 10;


