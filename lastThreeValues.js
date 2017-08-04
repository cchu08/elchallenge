var initialResults = require('./initial_lab_results.json');
var testResults = require('./test.json');

const findPatientIDandName = function(results, inputID) {
  let patientID, name;
  results.filter((result) => {
    if (result.result_id === inputID) {
      patientID = result.patient_id;
      name = result.name;
    }
  })
  // console.log(patientID, 'should match', 1000000);
  // console.log('name', name, 'should match HDL');

}

// findPatientIDandName(initialResults, 126);

const resultsWithPatientIDandName = function(results, inputID) {
  let patientID, name;

  results.filter((result) => {
    if (result.result_id === inputID) {
      patientID = result.patient_id;
      name = result.name;
    }
  })

  console.log(patientID, 'should match', 1000000);
  console.log('name', name, 'should match HDL');

  var resultsOrderedByDate = results.filter((result) => {
    return patientID === result.patient_id && name === result.name;
  }).sort((a,b) => {
    return new Date(a.date) - new Date(b.date);
  })

  var lastThreeValues = [
    resultsOrderedByDate[resultsOrderedByDate.length - 1],
    resultsOrderedByDate[resultsOrderedByDate.length - 2],
    resultsOrderedByDate[resultsOrderedByDate.length - 3]
  ]

  return lastThreeValues;
}

console.log(resultsWithPatientIDandName(initialResults, 126));
