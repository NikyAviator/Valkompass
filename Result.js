module.exports = class Result {
  // Calculate the % from distance from the party and my choice (we add those % together later to get our result)
  calcPercent(distance) {
    const percent = 1 - distance / 4;
    return percent;
  }
  compareWithParties(myAnswers) {
    // 1. Read parties opinions from data.json
    const partiesAnswers = require('./data.json');
    // 2. Loop through the parties answers (their points)
    // store the points in an array (answers[])
    // we also store my points in an array (myAnswers[])
    const questionDistancesList = [];
    for (let i = 0; i < partiesAnswers.length; i++) {
      const answers = partiesAnswers[i].answer;
      const myAnswer = myAnswers[i];
      // 3. Too see the distance between our answer and the parties answers
      // we call calcPercent method too see how many percent we agree with the parties for each question
      const questionDistances = {
        id: partiesAnswers[i].id,
        question: partiesAnswers[i].question,
        answer: {
          V: this.calcPercent(Math.abs(answers.V - myAnswer)),
          S: this.calcPercent(Math.abs(answers.S - myAnswer)),
          MP: this.calcPercent(Math.abs(answers.MP - myAnswer)),
          C: this.calcPercent(Math.abs(answers.C - myAnswer)),
          L: this.calcPercent(Math.abs(answers.L - myAnswer)),
          KD: this.calcPercent(Math.abs(answers.KD - myAnswer)),
          M: this.calcPercent(Math.abs(answers.M - myAnswer)),
          SD: this.calcPercent(Math.abs(answers.SD - myAnswer)),
        },
      };
      // We then push our percent questionDistance to our questionDistancesList array
      questionDistancesList.push(questionDistances);
    }
    // All the parties start with 0 points
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
    // 4. Loop through each question the percent we agree or disagree
    for (let i = 0; i < questionDistancesList.length; i++) {
      finalResult.V += questionDistancesList[i].answer.V;
      finalResult.S += questionDistancesList[i].answer.S;
      finalResult.MP += questionDistancesList[i].answer.MP;
      finalResult.C += questionDistancesList[i].answer.C;
      finalResult.L += questionDistancesList[i].answer.L;
      finalResult.KD += questionDistancesList[i].answer.KD;
      finalResult.M += questionDistancesList[i].answer.M;
      finalResult.SD += questionDistancesList[i].answer.SD || 0;
    }

    // Calculates the percent for all the questions and later returns the object as a string format
    finalResult.V = Math.round(+(finalResult.V / 30) * 100 * 10) / 10;
    finalResult.S = Math.round(+(finalResult.S / 30) * 100 * 10) / 10;
    finalResult.MP = Math.round(+(finalResult.MP / 30) * 100 * 10) / 10;
    finalResult.C = Math.round(+(finalResult.C / 30) * 100 * 10) / 10;
    finalResult.L = Math.round(+(finalResult.L / 30) * 100 * 10) / 10;
    finalResult.KD = Math.round(+(finalResult.KD / 30) * 100 * 10) / 10;
    finalResult.M = Math.round(+(finalResult.M / 30) * 100 * 10) / 10;
    finalResult.SD = Math.round(+(finalResult.SD / 30) * 100 * 10) / 10;

    return finalResult;
  }
};

// För en fråga:
// procent = 1 - (distansen / 4)   (för 4 är maxpoäng och även absolutbeloppet av lägsta+högsta poängen)

// Ex.1: Distansen är 0 (du håller helt med i frågan):        1 - (0/4) = 1 - 0 = 1.0 = 100%
// Ex.2: Distansen är 1 (du håller nästan med i frågan):   1 - (1/4) = 1 - 0.25 = 0.75 = 75%
// Ex.3: Distansen är 2 (du håller nästan, nästan med i frågan):   1 - (2/4) = 1 - 0.5 = 0.5 = 50%
// Ex.4: Distansen är 3 (du håller inte med i frågan):   1 - (3/4) = 1 - 0.75 = 0.25 = 25%
// Ex.5: Distansen är 4 (du håller inte alls med i frågan):   1 - (4/4) = 1 - 1 = 0 = 0%

// ==> För alla frågor:
// Låt säga det finns 5 frågor totalt. Vi har också räknat ut att just dina distanser till Vänsterpartiets (V) alla svar är [3,4,2,3,4].
// Varje fråga får då procenten:
//   1 - (3/4) = 0.25
//   1 - (4/4) = 0
//   1 - (2/4) = 0.50
//   1 - (3/4) = 0.25
//   1 - (4/4) = 0

// Medelvärdet av alla procent tal är då:    (0.25 + 0 + 0.50 + 0.25 + 0) / 5 =  0.2 = 20%
// Alltså håller du med V med 20%!
// Ifall dina distanser hade varit 0 på alla (alltså [0,0,0,0,0]) så hade du med samma metod räknat du att du håller med ett sånt parti 100%.
