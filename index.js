const Question = require('./Question');
const questionData = require('./data.json');
const Valkompassen = require('./Valkompassen');
const promptly = require('promptly');
const Person = require('./Person');
const compareWithParties = require('./Result');
// let valkompassen = new Valkompassen(questionData);
// valkompassen(questionData);

let person = new Person();
let question = new Question();
person.getName();
const answers = question.questions();
compareWithParties(answers);
