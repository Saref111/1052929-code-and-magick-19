// 'use strict';

// var closeModalButton = userDialog.querySelector('.setup-close');
// var similarListElement = document.querySelector('.setup-similar-list');
// var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
// var wizardCoat = userDialog.querySelector('.wizard-coat');
// var wizardEyes = userDialog.querySelector('.wizard-eyes');
// var wizardFireball = userDialog.querySelector('.setup-fireball');
// var wizardCoatInput = userDialog.querySelector('input[name="coat-color"]');
// var wizardEyesInput = userDialog.querySelector('input[name="eyes-color"]');
// var wizardFireballInput = userDialog.querySelector('input[name="fireball-color"]');

// var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
// var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
// var WIZARD_COATS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
// var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
// var WIZARD_FIREBALLS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
// var MIN_NAME_LENGTH = 2;
// var ESCAPE_KEY = 'Escape';
// var ENTER_KEY = 'Enter';

// var showWizards = function () {
//   userDialog.querySelector('.setup-similar').classList.remove('hidden');
// };

// var getRandomIndex = function (arrLength) {
//   return Math.floor(Math.random() * arrLength);
// };

// var getWizardsObjects = function (wizardsNames, wizardsSurnames, wizardsCoats, wizardsEyes, count) {
//   var wizards = [];

//   for (var i = 0; i < count; i++) {
//     wizards[i] = {};

//     wizards[i].name = wizardsNames[getRandomIndex(wizardsNames.length)] + ' ' + wizardsSurnames[getRandomIndex(wizardsSurnames.length)];

//     wizards[i].coatColor = wizardsCoats[getRandomIndex(wizardsCoats.length)];

//     wizards[i].eyesColor = wizardsEyes[getRandomIndex(wizardsEyes.length)];
//   }

//   return wizards;
// };

// var drawTemplates = function () {
//   var fragment = document.createDocumentFragment();
//   var wizards = getWizardsObjects(WIZARD_NAMES, WIZARD_SURNAMES, WIZARD_COATS, WIZARD_EYES, 4);

//   for (var i = 0; i < wizards.length; i++) {
//     var wizardElement = similarWizardTemplate.cloneNode(true);
//     wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;

//     wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;

//     wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;

//     fragment.appendChild(wizardElement);
//   }

//   similarListElement.appendChild(fragment);

//   showWizards();
// };

// var getRandomColor = function (arr) {
//   return arr[getRandomIndex(arr.length)];
// };

// drawTemplates();

// userAvatar.addEventListener('click', showModal);
// userAvatar.addEventListener('keydown', function (evt) {
//   if (evt.key === ENTER_KEY) {
//     showModal();
//   }
// });
// closeModalButton.addEventListener('click', hideModal);
// closeModalButton.addEventListener('keydown', function (evt) {
//   if (evt.key === ENTER_KEY) {
//     hideModal();
//   }
// });

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
