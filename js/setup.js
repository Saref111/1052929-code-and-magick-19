// 'use strict';




// 

// userNameInput.addEventListener('invalid', function () {
//   if (userNameInput.validity.tooShort) { // Почему тут мы обращаемся к userNameInput.setCustomValidity ...продолжение на строке 118
//     userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
//   } else if (userNameInput.validity.tooLong) {
//     userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
//   } else if (userNameInput.validity.valueMissing) {
//     userNameInput.setCustomValidity('Обязательное поле');
//   } else {
//     userNameInput.setCustomValidity('');
//   }
// });

// userNameInput.addEventListener('input', function (evt) {
//   var target = evt.target;
//   if (target.value.length < MIN_NAME_LENGTH) {
//     target.setCustomValidity('Имя должно состоять минимум из ' + MIN_NAME_LENGTH + '-х символов'); // а тут к evt.target.setCustomValidity?
//   } else {
//     target.setCustomValidity('');
//   }
// });

// wizardCoat.addEventListener('click', function (evt) {
//   var newCoatColor = getRandomColor(WIZARD_COATS);
//   evt.target.style.fill = newCoatColor;
//   wizardCoatInput.value = newCoatColor;
// });

// wizardEyes.addEventListener('click', function (evt) {
//   var newEyesColor = getRandomColor(WIZARD_EYES);
//   evt.target.style.fill = newEyesColor;
//   wizardEyesInput.value = newEyesColor;
// });

// wizardFireball.addEventListener('click', function (evt) {
//   var newFireballColor = getRandomColor(WIZARD_FIREBALLS);
//   evt.target.style = 'background-color: ' + newFireballColor;
//   wizardFireballInput.value = newFireballColor;
// });
