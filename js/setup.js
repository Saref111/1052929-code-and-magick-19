'use strict';

var userDialog = document.querySelector('.setup');

var showModal = function () {
  userDialog.classList.remove('hidden');
  userDialog.querySelector('.setup-similar').classList.remove('hidden');
};

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COATS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];

var getRandomIndex = function (arrLength) {
  return Math.floor(Math.random() * arrLength);
};

var getWizardsObjects = function (wizardNames, wizardSurnames, wizardCoats, wizardEyes, count) {
  var wizards = [];

  for (var i = 0; i < count; i++) {
    wizards[i] = {};

    wizards[i].name = wizardNames[getRandomIndex(wizardNames.length)] + ' ' + wizardSurnames[getRandomIndex(wizardSurnames.length)];

    wizards[i].coatColor = wizardCoats[getRandomIndex(wizardCoats.length)];

    wizards[i].eyesColor = wizardEyes[getRandomIndex(wizardEyes.length)];
  }

  return wizards;
};

var drawTemplates = function () {
  var fragment = document.createDocumentFragment();
  var wizards = getWizardsObjects(WIZARD_NAMES, WIZARD_SURNAMES, WIZARD_COATS, WIZARD_EYES, 4);

  for (var i = 0; i < wizards.length; i++) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;

    wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;

    wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;

    fragment.appendChild(wizardElement);
  }

  similarListElement.appendChild(fragment);
};

showModal();
drawTemplates();
