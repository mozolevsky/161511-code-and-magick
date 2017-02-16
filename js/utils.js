'use strict';

window.utils = {
  getRandomElement: function (colorsArray) {
    var randomColor = Math.floor(Math.random() * colorsArray.length);
    return colorsArray[randomColor];
  },

  getRandomElementExcept: function (colorsArray, currentColor) {

    var nextColor = this.getRandomElement(colorsArray);
    if (nextColor === currentColor) {
      return this.getRandomElementExcept(colorsArray, currentColor);
    }
    return nextColor;
  }
};
