'use strict';

function getElement(selector) {
  return document.querySelector(selector);
}

var userIcon = getElement('.setup-open');
var wizardForm = getElement('.setup');
var wizardFormClose = getElement('.setup-close');

var wizardCoat = getElement('#wizard-coat');
var colorsOfTheCoat = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

var wizardEyes = getElement('#wizard-eyes');
var colorsOfTheEyes = ['black', 'red', 'blue', 'yellow', 'green'];

var fireBall = getElement('.setup-fireball-wrap');
var fireBallColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

function showElement(element) {
  element.classList.remove('invisible');
}

function hideElement(element) {
  element.classList.add('invisible');
}

userIcon.addEventListener('click', function () {
  showElement(wizardForm);
});

wizardFormClose.addEventListener('click', function () {
  hideElement(wizardForm);
});

wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = getColor(colorsOfTheCoat);
});

wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = getColor(colorsOfTheEyes);
});

fireBall.addEventListener('click', function () {
  fireBall.style.background = getColor(fireBallColors);
});

function getColor(colorsArray) {
  var randomColor = Math.floor(Math.random() * colorsArray.length);
  return colorsArray[randomColor];
}

