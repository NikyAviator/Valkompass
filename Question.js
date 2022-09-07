const questionData = require('./data.json');
const promptly = require('promptly');

module.exports = class Question {
  onesAnswer = [];

  constructor(settings) {
    // expecting userName
    Object.assign(this, settings);
  }

  async questions() {
    for (let fraga of questionData) {
      const response = await promptly.prompt(
        `Fråga ${fraga.id} : 
          ${fraga.question}
          1. Helt emot, 2. Delvis emot, 3. Instämmer delvis, 4. Instämmer helt.\n    SVAR: `
      );
      this.onesAnswer.push(response);
    }
    return this.onesAnswer;
  }
};
