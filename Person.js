module.exports = class Person {
  constructor(settings) {
    // expecting userName
    Object.assign(this, settings);
  }
};
