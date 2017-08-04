const allResults = require('./allLabResults.json');

const lastThreeValues = require('./lastThreeValues.js')

const readLineSync = require('readline-sync');

var inputID = readLineSync.question('Please enter a result ID:');

console.log(lastThreeValues.findLastThreeResults(inputID, allResults));