const Question = require('./Question');
const promptly = require('promptly');
const Person = require('./Person');

// let valkompassen = new Valkompassen(questionData);
// valkompassen(questionData);

let person = new Person();
let question = new Question();

person.getName();
const answers = question.questions();
