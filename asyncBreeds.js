// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, cb) {
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    // CHANGE: Pass data into callback if there's no error
    !error ? cb(data) : cb(undefined);
  });
};

module.exports = breedDetailsFromFile;