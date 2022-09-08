module.exports = class DataHandler {
  writeResultsToJSON(Namn, resultat) {
    let today = new Date().toISOString().slice(0, 10);
    let obj = {
      resultat: resultat,
      Datum: today,
      Namn,
    };
    console.log(obj);
  }
};
