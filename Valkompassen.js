const questionData = require('./data.json');
const Question = require('./Question');
const promptly = require('promptly');
const Person = require('./Person');

module.exports = class Valkompassen {
  constructor(settings) {
    // expecting userName
    Object.assign(this, settings);
  }
};
