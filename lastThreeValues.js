const findLastThreeResults = (inputID, results) => {
  let patientID, name;

    // find patient ID and name using given result id
    results.filter((result) => {
      if (result.result_id === parseInt(inputID)) {
        patientID = result.patient_id;
        name = result.name;
      }
    })

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
      return lastThreeResults;
    } else {
      return 'No results found.'
    }

}

// console.log(findLastThreeResults(allResults));

module.exports = {
  findLastThreeResults: findLastThreeResults
}
