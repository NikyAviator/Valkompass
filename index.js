const Question = require('./Question');
const promptly = require('promptly');
const Person = require('./Person');
const DataHandler = require('./DataHandler');
let person = new Person();
let question = new Question();

async function start() {
  const name = await person.getName();
  const answers = await question.questions();
  let dataHandler = new DataHandler();
  dataHandler.writeResultsToJSON(name, answers);
}
start().catch((error) => console.log(error));
