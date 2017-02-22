'use strict';

(function () {
  var wizardCoat = document.querySelector('#wizard-coat');
  var colorsOfTheCoat = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

  var wizardEyes = document.querySelector('#wizard-eyes');
  var colorsOfTheEyes = ['black', 'red', 'blue', 'yellow', 'green'];

  var fireBall = document.querySelector('.setup-fireball-wrap');
  var fireBallColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'].map(function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return 'rgb(' + parseInt(result[1], 16) + ', ' + parseInt(result[1], 16) + ', ' + parseInt(result[3], 16) + ')';
  });

  var colorizeElement = function (elem, colors, cssProperty) {
    elem.addEventListener('click', function () {
      var currentColor = elem.style[cssProperty] || colors[0];
      elem.style[cssProperty] = window.utils.getRandomElementExcept(colors, currentColor);
    });

    elem.addEventListener('keydown', function (event) {
      if (window.utils.isEnterClicked(event)) {
        var currentColor = elem.style[cssProperty] || colors[0];
        elem.style[cssProperty] = window.utils.getRandomElementExcept(colors, currentColor);
      }
    });
  };

  colorizeElement(wizardCoat, colorsOfTheCoat, 'fill');
  colorizeElement(wizardEyes, colorsOfTheEyes, 'fill');
  colorizeElement(fireBall, fireBallColors, 'background-color');
})();
