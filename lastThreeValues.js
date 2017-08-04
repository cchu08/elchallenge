var initialResults = require('./test.json');

var testFunction = function(results, inputID) {
  let patientID, name;
  initialResults.filter((result) => {
    if (result.result_id === inputID) {
      patientID = result.patient_id;
      name = result.name;
    }
  })
  console.log(patientID, 'should match 1000180');
}

testFunction(initialResults, 217029);