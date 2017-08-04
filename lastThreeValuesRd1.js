const initialResults = require('./lab_results/initial_lab_results.json');

const lastThreeValues = require('./lastThreeValues.js')

console.log(lastThreeValues.findLastThreeResults(initialResults));