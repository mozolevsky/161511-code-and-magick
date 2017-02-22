'use strict';

(function (exports) {
  exports.show = function (element) {
    element.classList.remove('invisible');
    element.setAttribute('aria-hidden', false);
    document.addEventListener('keydown', function (event) {
      if (window.utils.isEscClicked(event)) {
        window.display.hide(element);
      }
    });
  };

  exports.hide = function (element) {
    element.classList.add('invisible');
    element.setAttribute('aria-hidden', true);
  };
})(window.display = {});
