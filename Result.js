module.exports = class Result {
  calcPercent(distance) {
    const percent = 1 - distance / 4;
    return percent;
  }
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
          V: this.calcPercent(Math.abs(answers['V'] - myAnswer)),
          S: this.calcPercent(Math.abs(answers['S'] - myAnswer)),
          MP: this.calcPercent(Math.abs(answers['MP'] - myAnswer)),
          C: this.calcPercent(Math.abs(answers['C'] - myAnswer)),
          L: this.calcPercent(Math.abs(answers['L'] - myAnswer)),
          KD: this.calcPercent(Math.abs(answers['KD'] - myAnswer)),
          M: this.calcPercent(Math.abs(answers['M'] - myAnswer)),
          SD: this.calcPercent(Math.abs(answers['SD'] - myAnswer)), // answers['SD'] null or undefined
        },
      };
      questionDistancesList.push(questionDistances);
    }
    let finalResult = {
      S: 0,
      V: 0,
      MP: 0,
      C: 0,
      L: 0,
      KD: 0,
      M: 0,
      SD: 0,
    };
    for (let i = 0; i < questionDistancesList.length; i++) {
      finalResult['V'] = finalResult['V'] + questionDistancesList[i].answer.V;
      finalResult['S'] = finalResult['S'] + questionDistancesList[i].answer.S;
      finalResult['MP'] =
        finalResult['MP'] + questionDistancesList[i].answer.MP;
      finalResult['C'] = finalResult['C'] + questionDistancesList[i].answer.C;
      finalResult['L'] = finalResult['L'] + questionDistancesList[i].answer.L;
      finalResult['KD'] =
        finalResult['KD'] + questionDistancesList[i].answer.KD;
      finalResult['M'] = finalResult['M'] + questionDistancesList[i].answer.M;
      finalResult['SD'] =
        finalResult['SD'] + questionDistancesList[i].answer.SD; // can be null or undefined
    }
    finalResult['V'] = finalResult['V'] / 30;
    finalResult['S'] = finalResult['S'] / 30;
    finalResult['MP'] = finalResult['MP'] / 30;
    finalResult['C'] = finalResult['C'] / 30;
    finalResult['L'] = finalResult['L'] / 30;
    finalResult['KD'] = finalResult['KD'] / 30;
    finalResult['M'] = finalResult['M'] / 30;
    finalResult['SD'] = finalResult['SD'] / 30;

    return finalResult;
  }
};
