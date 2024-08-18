/*
Assume that you are given a string of any length

Get the last 5 character it
*/

let str1 = '';
console.log(str1.slice(-5));
console.log(str1.slice(str1.length -5));
console.log(str1.substring(str1.length - 5));


/*
Assume that you are given a string of any length

Get the first 3 characters and the last 3 characters
Then, concatenate these in a new string
*/

let randomWord = 'saturday';
let first3 = randomWord.slice(0, 3);
let last3 = randomWord.slice(-3);

console.log(first3 + last3);