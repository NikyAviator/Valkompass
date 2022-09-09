const Question = require('./Question');
const promptly = require('promptly');
const Person = require('./Person');
const DataHandler = require('./DataHandler');

module.exports = class Valkompassen {
  async mainMenu() {
    let person = new Person();
    let question = new Question();
    let dataHandler = new DataHandler();
    let menuChoice = await promptly.prompt(`
    VÄLKOMMEN TILL TILLVALKOMPASSEN 2022! Välj ett av följande alternativ:
      1. Starta spelet!
      2. Visa resultat/historik.
      3. Rensa dina resultat/historik.
      4. Avsluta programmet:
      
    `);
    switch (menuChoice) {
      case '1':
        const name = await person.getName();
        const answers = await question.questions();
        dataHandler.writeResultsToJSON(name, answers);
        break;
      case '2':
        dataHandler.deSerializeResults();
        this.mainMenu();
        break;
      case '3':
        dataHandler.removeStoredResults();
        this.mainMenu();
        break;
      case '4':
        console.log('Avslutar programmet!');
        process.exit();

      default:
        console.log('Fel input, försök igen:');
        this.mainMenu();
        break;
    }
  }
};
