'use strict';

(function () {
  var userDialog = document.querySelector('.setup');
  var wizardCoat = userDialog.querySelector('.wizard-coat');
  var wizardEyes = userDialog.querySelector('.wizard-eyes');
  var wizardFireball = userDialog.querySelector('.setup-fireball');
  var wizardCoatInput = userDialog.querySelector('input[name="coat-color"]');
  var wizardEyesInput = userDialog.querySelector('input[name="eyes-color"]');
  var wizardFireballInput = userDialog.querySelector('input[name="fireball-color"]');

  wizardCoat.addEventListener('click', function (evt) {
    var newCoatColor = window.util.getRandomColor(window.util.WIZARD_COATS);
    evt.target.style.fill = newCoatColor;
    wizardCoatInput.value = newCoatColor;
  });

  wizardEyes.addEventListener('click', function (evt) {
    var newEyesColor = window.util.getRandomColor(window.util.WIZARD_EYES);
    evt.target.style.fill = newEyesColor;
    wizardEyesInput.value = newEyesColor;
  });

  wizardFireball.addEventListener('click', function (evt) {
    var newFireballColor = window.util.getRandomColor(window.util.WIZARD_FIREBALLS);
    evt.target.style = 'background-color: ' + newFireballColor;
    wizardFireballInput.value = newFireballColor;
  });
})();
