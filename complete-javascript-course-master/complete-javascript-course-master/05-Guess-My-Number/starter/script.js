'use strict';
// // console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'correct Number';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;
// document.querySelector('.guess').ariaValueMax;

                      document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.massage').textContent = 'no number';
  }
});
