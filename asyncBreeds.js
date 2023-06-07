const fs = require("fs");

// Add callback functionToRunWhenThingsAreDone
const breedDetailsFromFile = function(breed, functionToRunWhenThingsAreDone) {
  console.log("breedDetailsFromFile: Calling readFile...");
  fs.readFile(`./data/${breed}.txt`, "utf8", (error, data) => {
    console.log("In readFile's Callback: it has the data.");

    // Pass data into callback instead of returning it directly
    if (!error) functionToRunWhenThingsAreDone(data);
  });
};

// Move the console.log into a new function
const printOutCatBreed = (breed) => {

  // Print out details correctly
  console.log("Return Value: ", breed);
};

// Now passing two arguments into breedDetailsFromFile, the breed string and a callback function
breedDetailsFromFile("Bombay", printOutCatBreed);


// Incorrect Logic

// const breedDetailsFromFile = function(breed) {
//   console.log('breedDetailsFromFile: Calling readFile...');
//   fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
//     console.log("In readFile's Callback: it has the data.");
//     // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile
//     if (!error) return data;
//   });
//   // ISSUE: Attempting to return data out here will also not work.
//   //        Currently not returning anything from here, so breedDetailsFromFile function returns undefined
// };

// // Try to get the return value
// const bombay = breedDetailsFromFile('Bombay');
// console.log('Return Value: ', bombay); // => Will NOT print out details, instead returns undefined