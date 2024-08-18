const { getRandomNumber } = require('../utils/MathHelper.js');

/*
Generate a random nnumber bewteen 1 and 10 (both inclusive)
And check if the number is 7
If it is 7, print true
Otherwise print false

PSEUDO CODE
1. Generate a random number
2. Check if it is 7 or not
3. Depending on the condition print the results.
*/

let r1 = getRandomNumber(1, 10);

console.log('Random number =', r1);

if(r1 === 7) {
    console.log(true);
} else {
    console.log(false);;
}

// console.log(r1 === 7);

// r1 === 7 ? console.log(true) : console.log(false);

// let result = r1 === 7 ? true : false;
// console.log(result);



// another way of using ternary operator for assignment especially if you are going to store data/value in a variable depending on condition
let gender = 'male';

let name = gender === 'female' ? 'Jane' : 'John';

console.log(name);



/*
Generate a random number between 1 and 10
Print EVEN if the number is EVEN
Print ODD if the number is ODD

5   -> 'ODD'
8   -> 'EVEN'
*/

let r2 = getRandomNumber(1, 10);

console.log('Random number is =', r2);

r2 % 2 === 0 ? console.log('Even') : console.log('Odd');