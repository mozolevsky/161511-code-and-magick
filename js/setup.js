'use strict';

var userIcon = document.querySelector('.setup-open');
var wizardForm = document.querySelector('.setup');
var wizardFormClose = wizardForm.querySelector('.setup-close');
var wizardFormSaveBtn = wizardForm.querySelector('.setup-submit');

userIcon.addEventListener('click', function () {
  window.display.show(wizardForm);
});

userIcon.addEventListener('keydown', function (event) {
  if (window.utils.isEnterClicked(event)) {
    window.display.show(wizardForm);
  }
});

wizardFormClose.addEventListener('keydown', function (event) {
  if (window.utils.isEnterClicked(event)) {
    window.display.hide(wizardForm);
  }
});

wizardFormClose.addEventListener('click', function () {
  window.display.hide(wizardForm);
});

wizardFormSaveBtn.addEventListener('click', function () {
  window.display.hide(wizardForm);
});

wizardFormSaveBtn.addEventListener('keydown', function (event) {
  if (window.utils.isEnterClicked(event)) {
    window.display.hide(wizardForm);
  }
});

