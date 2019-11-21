'use strict';
const face = document.querySelector('.face');
const eyesOpen = document.querySelector('.eyes-open');
const eyesClose = document.querySelector('.eyes-close');
const head = document.querySelector('.head');


function changeEyes () {

  console.log('Holiii');
  if (eyesOpen.innerHTML === ':'){
    eyesOpen.innerHTML = ';';
  } else {
    eyesOpen.innerHTML = ':';
  }
}

head.addEventListener('click', changeEyes);
