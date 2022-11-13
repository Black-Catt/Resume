// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

	


("use strict");

// let  officialName = prompt("Яка оіфійна мова Javascript?");
// if (officialName == 'ECMAscript'){
//     alert('Правильно!');
// }
// else{
//     alert('Не знаєте? ECMAscript')
// }

// let value = prompt('Введіть число','0');
// if (value > 0){
// alert(1);
// }
// else if (value < 0){
//     alert(-1);
// }
// else if (value == 0){
//     alert(0);
// }

// let result = (a + b < 4) ? 'нижче' : 'вище'; (true/false)

// let message = (login == 'Працівники') ? 'Привіт' :
// (login == 'Директор') ?  "Вітаю" :
// (login == '') ? 'Немає логіну' :
// '';

// let userName = prompt('Хто тут ?', "");
// if (userName == 'Admin') {

//     let pass = prompt('Пароль', "")
//     if (pass == 'Господар') {
//         alert('Ласкаво просимо!');
//     } else if (pass === '' || pass === null) {
//         alert('Скасовано')
//     } else {
//         alert('Неправильний пароль')
//     }

// } else if (userName === '' || userName === null) {
//     alert('Скасовано')
// } else {
//     alert('Неправильний пароль')
// }

const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue(
  "--marquee-elements-displayed"
);
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for (let i = 0; i < marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}

// for (let i = 0; i < 3; i++) {
//     alert(`число ${i}!`);
// }

// let i = 0;
// while (i < 3) {
//     alert(`число ${i}!`);
//     i++
// }

// let num;

// do {
//     num = prompt("Введене число, більше за 100?", 0);
// } while (num <= 100 && num);

// const questions = [
//     'Продовжіть рядок Батько наш Бандера...',
//     'Слава',
//     'Смерть',
//     'Україна',
// ];
// const answers = [
//     'Україна мати',
//     'Україні',
//     'нації',
//     'Понад усе',
// ];
// let erorsCounter = 0;

// for (let i = 0; i < 7; i++) {
//     const response = prompt(questions[i]);
//     if (response !== answers[i] ) {
//         if (erorsCounter > 0 ) {
//             break;
//         } else erorsCounter++
//     }

// }

// function checkCharPosition(words, index, char) {
//     return words.charAt(index) === char
// }
// console.log(checkCharPosition('gogi', 0, 'g'));

// function checkLength(str, expectedLength) {
//     return str.length === expectedLength
// }
// console.log(checkLength("gogi", 4))

// function startGame() {
//     while (confirm('Чи хоче користувач зіграти у гру?')) {

//         let word = prompt('Загадайте слово');
//         let answer = setUnderscore(word);
//         // викликається шоб закинути в ансвер і далі юзається в некст функції
//         let amountLetters = word.length;
//         getLetter(amountLetters, word, answer);
//     }
// }

// function setUnderscore(word) {
//     let answer = [];

//     for (let i = 0; i < word.length; i++) {
//         answer[i] = '_';
//     }
//     return answer;
// }

// function getLetter(amountLetters, word, answer) {
//     let erorsCounter = 1;
//     let playerWin = true;

//     while (amountLetters > 0) {
//         alert(answer.join(""))
//         let letter = prompt('Введіть букву');
//         let amountCompare = amountLetters;
//         if (letter === null) {
//             break;
//         } else if (letter.length !== 1) {
//             alert("Введіть одну буквук!");
//         } else {
//             for (let i = 0; i < word.length; i++) {
//                 if (word[i] === letter) {
//                     answer[i] = letter;
//                     amountLetters--;
//                 }
//             }
//         }
//         if (amountCompare === amountLetters) {
//             if (erorsCounter < 5) {
//                 erorsCounter++;
//             } else {
//                 alert('Ти програв');
//                 playerWin = false;
//                 break;
//             }
//         }
//     }
//     if (playerWin === true) {
//         alert("Ви відгадали слово " + answer.join(''))
//     }
// }

// startGame();

// function checkWord(word, answer, amountLetters) {
//     for (let i = 0; i < word.length; i++) {
//         if (word[i] === letter) {
//             answer[i] = letter;
//             amountLetters--;
//         }
//     }
//     return [amountLetters, answer];
// }

const btnMore = document.querySelector(".portfolio__more");
const moreContent = document.querySelector(".portfolio__text");
btnMore.addEventListener("click", function (e) {
  if (moreContent.style.overflow === "hidden") {
    moreContent.style.overflow = "visible";
  } else if (moreContent.style.overflow === "visible") {
    moreContent.style.overflow = "hidden";
  }
});


const quant = document.querySelector('.quintette');
const subscribeInput = document.querySelector('.input');
const inputLimit = subscribeInput.getAttribute('maxlength')

document.addEventListener("click", function (e) {
  if (e.target.closest('.button_fz-23')) {
    subscribeInput.classList.toggle('input_active')
  }
  if (!e.target.closest('.subscribe__form')) {
    subscribeInput.classList.remove('input_active')
  }
});
 
document.addEventListener("keydown", function (e) {
  if (e.code == 'Escape') {
    subscribeInput.classList.remove('input_active')
  }
});




subscribeInput.addEventListener("keyup", function (e) {
  const result = inputLimit - subscribeInput.value.length
  quant.innerText = result
});


const windowScreen = window.pageXOffset
console.log(windowScreen);



const underline = document.querySelector('#underline');
const nav = document.querySelector('nav');


// nav.addEventListener("click", function (e) {
//   if (e.target.nodeName === "A") {
//     underline.style.left = e.target.offsetLeft + "px"
//     underline.style.width = e.target.offsetWidth + "px"
//   }
//   console.log(e.target.offsetWidth);
// });