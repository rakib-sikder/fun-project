'use strict';
let sectetNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const message=function(text){
    document.querySelector('.message').textContent = text
}
console.log(sectetNumber);
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    message( '⛔ No Number...');
  } else if (20 < guess) {
    message('🚫 Number is under 20...');
  } else if (guess === sectetNumber) {
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    message('🎉 Correct Number!');
    document.querySelector('.number').textContent = sectetNumber;
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.highscore').textContent = highscore;
    document.querySelector('body').style.backgroundColor = 'green';
  } else if (guess !== sectetNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      message (
        guess > sectetNumber
          ? '🥺 Number is too High !'
          : '🥺 Number is too low !');
    } else {
      message('💥 You loss the game!');
      document.querySelector('.score').textContent = score - 1;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  sectetNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(sectetNumber);
  document.querySelector('.guess').value = '';
 message('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  score = 20;
  document.querySelector('.score').textContent = score;
});
