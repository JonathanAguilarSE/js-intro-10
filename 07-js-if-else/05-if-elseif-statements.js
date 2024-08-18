// If - else if - else if - else
// these are also known as ladder statement

const { getRandomNumber } = require('../utils/MathHelper.js');

let number = getRandomNumber(1, 4);

console.log('Random number is =', number);

if(number === 1) {
    console.log('ONE');
} else if(number === 2) {
    console.log('TWO');
} else if(number === 3) {
    console.log('THREE');
} else if(number === 4) {
    console.log('FOUR');
} else {
    throw Error('The method created a number that is not in the given range');
}


let result = number === 1 ? 'ONE' : number === 2 ? 'TWO' : number === 3 ? 'THREE' : 'FOUR';

console.log(result);