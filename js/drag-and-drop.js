'use strict';

(function () {
  var element = document.querySelector('.setup-artifacts-shop');
  var target = element.addEventListener('dragstart', function (evt) {
    target = evt.target;
    if (evt.target.tagName.toLowerCase() === 'img') {
      evt.dataTransfer.setData('text', evt.target.alt);
    }
    return target;
  });

  var newContainer = document.querySelector('.setup-artifacts');
  newContainer.addEventListener('drop', function (evt) {
    evt.target.style.backgroundColor = '';
    evt.target.appendChild(target);
  });

  newContainer.addEventListener('dragenter', function (evt) {
    evt.preventDefault();
    evt.target.style.backgroundColor = 'yellow';
  });

  newContainer.addEventListener('dragover', function (evt) {
    evt.preventDefault();
  });

  newContainer.addEventListener('dragleave', function (evt) {
    evt.preventDefault();
    evt.target.style.backgroundColor = '';
  });
})();
