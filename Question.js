const questionData = require('./data.json');
const promptly = require('promptly');

module.exports = class Question {
  constructor(settings) {
    // expecting userName
    Object.assign(this, settings);
  }

  async questions() {
    for (let question of questionData) {
      const oneQuestion = await promptly.prompt(
        'Fråga:' +
          question.question +
          '\n 1. Instämmer helt, 2. Instämmer delvis, 3. Delvis emot, 4. Helt emot: '
      );
    }
  }
};
