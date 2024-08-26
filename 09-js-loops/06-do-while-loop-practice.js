const { getRandomNumber } = require('../utils/MathHelper.js');



let attempts = 0;
let written = 3;
let guess;
do {
  guess = getRandomNumber(1, 10);
  attempts++;
} while (guess !== written);
let time = attempts > 1 ? 'times' : 'time';
console.log(`We have got ${written} after ${attempts} ${time}!`);



// Generate an even number bt 1 and 10
// Calculate how many attempts it takes to generate it
let attempts1 = 0
let randNum;
do {
    randNum = getRandomNumber(1, 10);
    attempts1++;
} while (randNum % 2 !== 0);
let time1 = attempts1 > 1 ? 'attempts' : 'attempt';
console.log(`We finally found ${randNum} and it took ${attempts1} ${time1}`);



// Generate an odd number bt 1 and 10
// Calculate how many attempts it takes to generate it
let att = 0
let ranNum = 0;

while(ranNum % 2 === 0) {
    ranNum = getRandomNumber(1, 10);
    att++;
}
let time2 = attempts1 > 1 ? 'attempts' : 'attempt';
console.log(`We finally found an odd number and it took ${attempts1} ${time2}`);