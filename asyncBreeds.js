// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, callback) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    // CHANGE 1: Pass data back via a callback instead of a return
    console.log('Callback: I have the data!')
    if (!error) {
      callback(data); 
    } else {
      callback(undefined); // if not an error pass our data we read via callback
    }
  });
}
// Change2" value now comes back via callback, not return value

// we try to get the return value
breedDetailsFromFile('Bombay', (bombay) => {
  console.log('Return Value: ', bombay);
});

module.exports = breedDetailsFromFile;