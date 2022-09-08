const Question = require('./Question');
const promptly = require('promptly');
const Person = require('./Person');

let person = new Person();
let question = new Question();

// async function start() {
//   await person.getName();
//   const answers = await question.questions();
// }
async function start() {
  await person.getName();
  const answers = await question.questions();
}
start().catch((error) => console.log(error));
