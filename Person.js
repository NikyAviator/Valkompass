const promptly = require('promptly');
module.exports = class Person {
  constructor(name) {
    // expecting userName
    this.name = name;
  }

  async getName() {
    const name = await promptly.prompt('Namn: ');
    console.log(
      `Välkommen ${name}, till Valkompassen 2022! Nedan kommer 30 st frågor. Svara med siffror`
    );
    return name;
  }
};
