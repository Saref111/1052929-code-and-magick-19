'use strict';

var userDialog = document.querySelector('.setup')
userDialog.classList.remove('hidden');

userDialog.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COATS = ['rgb (101, 137, 164)', 'rgb (241, 43, 107)', 'rgb (146, 100, 161)', 'rgb (56, 159, 117)', 'rgb (215, 210, 55)', 'rgb (0, 0, 0)'];
var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];

var wizards = [];

var getWizardsObjects = function (wizard_names, wizard_surnames, wizard_coats, wizard_eyes) {
  for (var i = 0; i < 4; i++) {
    wizards[i] = {};

    wizards[i].name = wizard_names[Math.floor(Math.random() * wizard_names.length)] + ' ' + wizard_surnames[Math.floor(Math.random() * wizard_surnames.length)];

    wizards[i].coatColor = wizard_coats[Math.floor(Math.random() * wizard_coats.length)];

    wizards[i].eyesColor = wizard_eyes[Math.floor(Math.random() * wizard_eyes.length)];
  }
}

var drawTemplates = function () {
  for (var i = 0; i < 4; i++) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;

    wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;

    similarListElement.appendChild(wizardElement);
  }
}

getWizardsObjects(WIZARD_NAMES, WIZARD_SURNAMES, WIZARD_COATS, WIZARD_EYES);

drawTemplates();

/**/