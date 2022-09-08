const questionData = require('./data.json');
const promptly = require('promptly');
const Result = require('./Result');
module.exports = class Question {
  onesAnswer = [];

  constructor(settings) {
    Object.assign(this, settings);
  }

  async questions() {
    for (let i = 0; i < questionData.length; i++) {
      const response = await promptly.prompt(
        `Fråga ${questionData[i].id} : 
          ${questionData[i].question}
          1. Helt emot, 2. Delvis emot, 3. Instämmer delvis, 4. Instämmer helt.\n    SVAR: `
      );
      switch (response) {
        case '1':
          this.onesAnswer.push(response);
          break;
        case '2':
          this.onesAnswer.push(response);
          break;
        case '3':
          this.onesAnswer.push(response);
          break;
        case '4':
          this.onesAnswer.push(response);
          break;
        default:
          console.log('Error, wrong input, try again!');
          i--;
          break;
      }
    }
    let result = new Result();
    const finalResult = result.compareWithParties(this.onesAnswer);
    const sortedFinalResult = Object.fromEntries(
      Object.entries(finalResult).sort(([, a], [, b]) => b - a)
    );
    console.log(`Ditt resultat: `);
    for (const [key, value] of Object.entries(sortedFinalResult)) {
      console.log(`${key}: ${value}%`);
    }
    return sortedFinalResult;
  }
};
