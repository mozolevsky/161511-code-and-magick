'use strict'

//добавить стили для валидации, анимации на плавную смену цветов и скрытие/появление форм

function getElement(selector) {
  return document.querySelector(selector);
}

var userIcon = getElement('.setup-open');
var wizardForm = getElement('.setup');
var wizardFormClose = getElement('.setup-close');

var nameInput = getElement('.setup-user-name');

var wizardCoat = getElement('#wizard-coat');
var colorsOfTheCoat = ["rgb(101, 137, 164)",
                        "rgb(241, 43, 107)",
                        "rgb(146, 100, 161)",
                        "rgb(56, 159, 117)",
                        "rgb(215, 210, 55)",
                        "rgb(0, 0, 0)"];

var wizardEyes = getElement('#wizard-eyes');
var colorsOfTheEyes = ["black", "red", "blue", "yellow", "green"];

var fireBall = getElement('.setup-fireball-wrap');
var fireBallColors = ["#ee4830", "#30a8ee", "#5ce6c0", "#e848d5", "#e6e848"];

function showElement() {
  this.classList.remove('invisible');
}

function hideElement() {
  this.classList.add('invisible');
}

userIcon.addEventListener("click", function() {
  showElement.call(wizardForm);
});

wizardForm.addEventListener("click", function(event) {
  var target = event.target;

  if (target == wizardFormClose) hideElement.call(wizardForm);

  if (target.parentNode == wizardCoat) {
    wizardCoat.style.fill = getColor(colorsOfTheCoat);
  }

  if (target.parentNode == wizardEyes) {
    wizardEyes.style.fill = getColor(colorsOfTheEyes);
  }

  if (target.parentNode == fireBall) {
    fireBall.style.background = getColor(fireBallColors);
  }
});

function createAlertBlock() {
  var messageBlock = document.createElement("div");
  messageBlock.className = "alert-error";
  return messageBlock;
}

function checkInput() {
    var alertBlock = document.querySelectorAll('.alert-error') || '';

  if (!this.value || this.value.length > 50) {
      this.style.border = "1px solid red";
      var alertBlock = createAlertBlock(this);
      var messageText = "";

      if (!this.value) messageText = "Вы не ввели имя персонажа";
      if (this.value.length > 50) messageText = "Имя должно содержать до 50 символов";

      alertBlock.innerHTML = messageText;
      return this.parentElement.appendChild(alertBlock);
  }

  if (alertBlock) {
    this.style.border = "";

    for (var i = 0; i < alertBlock.length; i++) {
      this.parentNode.removeChild(alertBlock[i]);
    }

  }
}

nameInput.addEventListener("blur", function () {
  checkInput.call(nameInput);
});

function getColor(colorsArray) {
  var randomColor = Math.floor(Math.random() * colorsArray.length);
  return colorsArray[randomColor];
}

