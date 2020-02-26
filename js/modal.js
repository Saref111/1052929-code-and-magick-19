'use strict';

(function () {
  var userDialog = document.querySelector('.setup');
  var userAvatar = document.querySelector('.setup-open');
  var closeModalButton = userDialog.querySelector('.setup-close');
  var userNameInput = userDialog.querySelector('.setup-user-name');
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var dialogHandle = userDialog.querySelector('.upload');

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
    userDialog.style.top = '80px';
    userDialog.style.left = '50%';
    userDialog.classList.add('hidden');

    document.removeEventListener('keydown', popupEscHandler);
  };

  var showWizards = function () {
    userDialog.querySelector('.setup-similar').classList.remove('hidden');
  };

  var drawTemplates = function () {
    var fragment = document.createDocumentFragment();
    var wizards = window.util.getWizardsObjects(window.util.WIZARD_NAMES, window.util.WIZARD_SURNAMES, window.util.WIZARD_COATS, window.util.WIZARD_EYES, 4);

    for (var i = 0; i < wizards.length; i++) {
      var wizardElement = similarWizardTemplate.cloneNode(true);
      wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;

      wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;

      wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;

      fragment.appendChild(wizardElement);
    }

    similarListElement.appendChild(fragment);

    showWizards();
  };

  drawTemplates();

  userAvatar.addEventListener('click', function () {
    showModal();
  });

  userAvatar.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, showModal);
  });

  closeModalButton.addEventListener('click', function () {
    hideModal();
  });

  closeModalButton.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, hideModal);
  });

  dialogHandle.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var moveModalHandler = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      userDialog.style.top = (userDialog.offsetTop - shift.y) + 'px';
      userDialog.style.left = (userDialog.offsetLeft - shift.x) + 'px';
    };

    var dropModalHandler = function (evtUp) {
      evtUp.preventDefault();

      document.removeEventListener('mousemove', moveModalHandler);
      document.removeEventListener('mouseup', dropModalHandler);

      if (dragged) {
        var onClickPreventDefault = function (clickEvt) {
          clickEvt.preventDefault();
          dialogHandle.removeEventListener('click', onClickPreventDefault)
        };
        dialogHandle.addEventListener('click', onClickPreventDefault);
      }
    };

    document.addEventListener('mousemove', moveModalHandler);
    document.addEventListener('mouseup', dropModalHandler);
  });
})();
