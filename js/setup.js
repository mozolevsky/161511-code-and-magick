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

fireBallColors = fireBallColors.map(function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return 'rgb(' + parseInt(result[1], 16) + ', ' + parseInt(result[1], 16) + ', ' + parseInt(result[3], 16) + ')';
});

var checkKeyCode = function (evt, key) {
  return (evt.keyCode && evt.keyCode === key);
};

var listenEscOnWizardForm = function () {
  document.addEventListener('keydown', function (event) {
    if (checkKeyCode(event, ESC_KEY_CODE)) {
      window.display.hide(wizardForm);
      userIcon.setAttribute('aria-pressed', false);
    }
  });
};

userIcon.addEventListener('click', function () {
  window.display.show(wizardForm);
  listenEscOnWizardForm();
});

userIcon.addEventListener('keydown', function (event) {
  if (checkKeyCode(event, ENTER_KEY_CODE)) {
    window.display.show(wizardForm);
    listenEscOnWizardForm();
    userIcon.setAttribute('aria-pressed', true);
  }
});

wizardFormClose.addEventListener('keydown', function (event) {
  if (checkKeyCode(event, ENTER_KEY_CODE)) {
    window.display.hide(wizardForm);
    userIcon.setAttribute('aria-pressed', false);
  }
});

wizardFormClose.addEventListener('click', function () {
  window.display.hide(wizardForm);
  userIcon.setAttribute('aria-pressed', false);
});

window.colorizeElement(wizardCoat, colorsOfTheCoat, 'fill');
window.colorizeElement(wizardEyes, colorsOfTheEyes, 'fill');
window.colorizeElement(fireBall, fireBallColors, 'background-color');

wizardFormSaveBtn.addEventListener('click', function () {
  window.display.hide(wizardForm);
  userIcon.setAttribute('aria-pressed', false);
});

wizardFormSaveBtn.addEventListener('keydown', function () {
  if (checkKeyCode(event, ENTER_KEY_CODE)) {
    window.display.hide(wizardForm);
    userIcon.setAttribute('aria-pressed', false);
  }
});
