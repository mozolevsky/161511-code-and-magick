'use strict';

window.display = {
  show: function (element) {
    element.classList.remove('invisible');
    element.setAttribute('aria-hidden', false);
  },

  hide: function (element) {
    element.classList.add('invisible');
    element.setAttribute('aria-hidden', true);
  }
};
