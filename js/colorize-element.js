'use strict';

window.colorizeElement = function (elem, colors, cssProperty) {
  elem.addEventListener('click', function () {
    var currentColor = elem.style[cssProperty] || colors[0];
    elem.style[cssProperty] = window.utils.getRandomElementExcept(colors, currentColor);
  });

  elem.addEventListener('keydown', function (event) {
    if (window.checkKeyCode(event, window.ENTER_KEY_CODE)) {
      var currentColor = elem.style[cssProperty] || colors[0];
      elem.style[cssProperty] = window.utils.getRandomElementExcept(colors, currentColor);
    }
  });
};
