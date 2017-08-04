const allResults = require('./allLabResults.json');
const readlineSync = require('readline-sync')

const findLastThreeResults = (results) => {
  let inputID = ''
  let patientID, name;

  while (inputID !== 'end') {
    inputID = readlineSync.question('Please enter a result ID (type end to exit): ')

    if (inputID === 'end') {
      return 'Goodbye!'
    }

    // find patient ID and name using given result id

    var resultsOrderedByDate = results.filter((result) => {
      if (result.result_id === parseInt(inputID)) {
        patientID = result.patient_id;
        name = result.name;
      }
    })

    // sort results of the same lab name and patient ID by date from oldest to most recent
    if (patientID && name) {
      var resultsOrderedByDate = results.filter((result) => {
        return patientID === result.patient_id && name === result.name;
      }).sort((a,b) => {
        return new Date(a.date) - new Date(b.date);
      })

      // return the three most recent results along with result ID
      var lastThreeResults = {
        "last_three_values": [
          resultsOrderedByDate[resultsOrderedByDate.length - 1],
          resultsOrderedByDate[resultsOrderedByDate.length - 2],
          resultsOrderedByDate[resultsOrderedByDate.length - 3]
        ],
        "result_id": inputID
      }
      // print out last three values
      inputID = '';
      patientID = '';
      name = ''
      return lastThreeResults;
    } else {
      inputID = '';
      console.log('No results found, please try again');
    }
  }
}

// console.log(findLastThreeResults(allResults));

module.exports = {
  findLastThreeResults: findLastThreeResults
}
