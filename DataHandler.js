// https://stackoverflow.com/questions/53054756/javascript-appending-object-to-json-file
const fs = require('fs');
module.exports = class DataHandler {
  writeResultsToJSON(Namn, resultat) {
    let today = new Date(
      Date.now() - new Date().getTimezoneOffset() * 60 * 1000
    )
      .toISOString()
      .split('T')
      .join(' ')
      .split('.')[0];

    //check if file exist
    if (!fs.existsSync('results.json')) {
      //create new file if not exist
      fs.closeSync(fs.openSync('results.json', 'w'));
    }

    // read file
    const file = fs.readFileSync('results.json');
    const obj = {
      Namn,
      date: today,
      resultat,
    };

    //check if file is empty
    if (file.length == 0) {
      //add data to json file
      fs.writeFileSync('results.json', JSON.stringify([obj]));
    } else {
      //append data to jso file
      let resultJson = fs.readFileSync('results.json', 'utf-8');
      let result = JSON.parse(resultJson);
      result.push(obj);
      //add json element to json object
      resultJson = JSON.stringify(result);

      fs.writeFileSync('results.json', resultJson);
    }
  }

  serializeResults() {}
};
