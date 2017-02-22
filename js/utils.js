'use strict';

(function (exports) {
  var ENTER_KEY_CODE = 13;
  var ESC_KEY_CODE = 27;

  exports.isEnterClicked = function (evt) {
    return (evt.keyCode && evt.keyCode === ENTER_KEY_CODE);
  };

  exports.isEscClicked = function (evt) {
    return (evt.keyCode && evt.keyCode === ESC_KEY_CODE);
  };

  exports.getRandomElement = function (colorsArray) {
    var randomColor = Math.floor(Math.random() * colorsArray.length);
    return colorsArray[randomColor];
  };

  exports.getRandomElementExcept = function (colorsArray, currentColor) {

    var nextColor = this.getRandomElement(colorsArray);
    if (nextColor === currentColor) {
      return this.getRandomElementExcept(colorsArray, currentColor);
    }
    return nextColor;
  };
})(window.utils = {});
