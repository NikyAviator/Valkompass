const Valkompassen = require('./Valkompassen');
let valkompassen = new Valkompassen();

async function start() {
  valkompassen.mainMenu();
}
start().catch((error) => console.log(error));
