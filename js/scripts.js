/*!
* Start Bootstrap - Bare v5.0.3 (https://startbootstrap.com/template/bare)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-bare/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
// const dieNumber = 1;
// const randomNum;
// const diceImage;
// for(var i = 0; i != 2; i++){
//     randomNum = Math.floor(Math.random() * 6) + 1;
//     diceImage = '/assests/images/Dice' + randomNum + '.png';
//     document.querySelectorAll('img')[i].setAttribute('src', diceImage)
// }

const dieNumber = 1;
var randomNum;
var diceImage;

randomNum = Math.floor(Math.random() * 6) + 1;
diceImage = '/assests/images/Dice' + randomNum + '.png';

document.querySelectorAll('img')[0].setAttribute('src', diceImage)
randomNum = Math.floor(Math.random() * 6) + 1;
diceImage = '/assests/images/Dice' + randomNum + '.png';
document.querySelectorAll('img')[1].setAttribute('src', diceImage)
// "C:\Users\Botter\Documents\CodeMentor\Easy - Random Number Generator Web App\NumberGeneratorWebApp\assests\images\Dice3.png"