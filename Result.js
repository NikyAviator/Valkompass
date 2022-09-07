module.exports = class Result {
  compareWithParties(answers) {
    // 1. Read parties opinions from data.json
    const partiesAnswers = require('./data.json');
    for (let i = 0; i < partiesAnswers.length; i++) {
      const partyAnswer = partiesAnswers[i].answer;
      const myAnswer = answers[i];
      // 2. Comparing our answer to the parties answers
    }
  }
};
