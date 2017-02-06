'use strict';

function getElement(selector) {
  return document.querySelector(selector);
}

var userIcon = getElement('.setup-open');
var wizardForm = getElement('.setup');
var wizardFormClose = getElement('.setup-close');
var wizardFormSaveBtn = getElement('.setup-submit');

var ENTER_KEY_CODE = 13;
var ESC_KEY_CODE = 27;

var wizardCoat = getElement('#wizard-coat');
var colorsOfTheCoat = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

var wizardEyes = getElement('#wizard-eyes');
var colorsOfTheEyes = ['black', 'red', 'blue', 'yellow', 'green'];

var fireBall = getElement('.setup-fireball-wrap');
var fireBallColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

function showElement(element) {
  element.classList.remove('invisible');
  element.setAttribute('aria-hidden', false);
}

function hideElement(element) {
  element.classList.add('invisible');
  element.setAttribute('aria-hidden', true);
}

var checkKeyCode = function (evt, key) {
  return (evt.keyCode && evt.keyCode === key);
};

var listenEscOnWizardForm = function () {
  document.addEventListener('keydown', function (event) {
    if (checkKeyCode(event, ESC_KEY_CODE)) {
      hideElement(wizardForm);
      userIcon.setAttribute('aria-pressed', false);
    }
  });
};

userIcon.addEventListener('click', function () {
  showElement(wizardForm);
  listenEscOnWizardForm();
});

userIcon.addEventListener('keydown', function (event) {
  if (checkKeyCode(event, ENTER_KEY_CODE)) {
    showElement(wizardForm);
    listenEscOnWizardForm();
    userIcon.setAttribute('aria-pressed', true);
  }
});

wizardFormClose.addEventListener('keydown', function (event) {
  if (checkKeyCode(event, ENTER_KEY_CODE)) {
    hideElement(wizardForm);
    userIcon.setAttribute('aria-pressed', false);
  }
});

wizardFormClose.addEventListener('click', function () {
  hideElement(wizardForm);
  userIcon.setAttribute('aria-pressed', false);
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

wizardFormSaveBtn.addEventListener('click', function () {
  hideElement(wizardForm);
  userIcon.setAttribute('aria-pressed', false);
});

wizardFormSaveBtn.addEventListener('keydown', function () {
  if (checkKeyCode(event, ENTER_KEY_CODE)) {
    hideElement(wizardForm);
    userIcon.setAttribute('aria-pressed', false);
  }
});

function getColor(colorsArray) {
  var randomColor = Math.floor(Math.random() * colorsArray.length);
  return colorsArray[randomColor];
}

