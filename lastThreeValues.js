var initialResults = require('./initial_lab_results.json');
var testResults = require('./test.json');

const findLastThreeResults = function(results, inputID) {
  let patientID, name;

  results.filter((result) => {
    if (result.result_id === inputID) {
      patientID = result.patient_id;
      name = result.name;
    }
  })

  var resultsOrderedByDate = results.filter((result) => {
    return patientID === result.patient_id && name === result.name;
  }).sort((a,b) => {
    return new Date(a.date) - new Date(b.date);
  })

  var lastThreeResults = {
    "last_three_values": [
      resultsOrderedByDate[resultsOrderedByDate.length - 1],
      resultsOrderedByDate[resultsOrderedByDate.length - 2],
      resultsOrderedByDate[resultsOrderedByDate.length - 3]
    ],
    "result_id": inputID
  }

  return lastThreeResults;
}

console.log(findLastThreeResults(initialResults, 126));
