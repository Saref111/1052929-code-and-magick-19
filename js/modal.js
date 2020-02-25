'use strict';

(function () {
  var userDialog = document.querySelector('.setup');
  var userAvatar = document.querySelector('.setup-open');
  var closeModalButton = userDialog.querySelector('.setup-close');
  var userNameInput = userDialog.querySelector('.setup-user-name');

  var popupEscHandler = function (evt) {
    if (evt.target !== userNameInput) {
      window.util.isEscEvent(evt, hideModal);
    }
  };

  var showModal = function () {
    userDialog.classList.remove('hidden');

    document.addEventListener('keydown', popupEscHandler);
  };

  var hideModal = function () {
    userDialog.classList.add('hidden');

    document.removeEventListener('keydown', popupEscHandler);
  };

  userAvatar.addEventListener('click', function () {
    showModal();
  });

  userAvatar.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, showModal);
  });

  closeModalButton.addEventListener('click', function () {
    hideModal();
  })
})();
