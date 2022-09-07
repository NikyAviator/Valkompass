module.exports = class Result {
  compareWithParties(myAnswers) {
    // 1. Read parties opinions from data.json
    const partiesAnswers = require('./data.json');
    const questionDistancesList = [];
    for (let i = 0; i < partiesAnswers.length; i++) {
      const answers = partiesAnswers[i].answer;
      const myAnswer = myAnswers[i];

      const questionDistances = {
        id: partiesAnswers[i].id,
        question: partiesAnswers[i].question,
        answer: {
          V: Math.abs(answers['V'] - myAnswer),
          S: Math.abs(answers['S'] - myAnswer),
          MP: Math.abs(answers['MP'] - myAnswer),
          C: Math.abs(answers['C'] - myAnswer),
          L: Math.abs(answers['L'] - myAnswer),
          KD: Math.abs(answers['KD'] - myAnswer),
          M: Math.abs(answers['M'] - myAnswer),
          SD: Math.abs(answers['SD'] - myAnswer),
        },
      };
      questionDistancesList.push(questionDistances);
    }
    return questionDistancesList;
  }
};
