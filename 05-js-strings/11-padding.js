let n1 = '123', n2 = '5', n3 = '5000';

console.log(n1.padStart(4, ' '));
console.log(n2.padStart(4, ' '));
console.log(n3.padStart(4, ' '));


let s1 = 'Hello', s2 = 'Hi', s3 = 'JavaScript';

console.log(s1.padEnd(10, ' '));
console.log(s2.padEnd(10, ' '));
console.log(s3.padEnd(10, ' '));


/*
padStart()
TASK: fills the string (at the beginning) with repeating characters unitl reaching out to a specified length
RETURN: returns a new string
ARGUMENTS: 2 args; the first is the new desired length, and the second is what you would like to fill the string with
CHANGE ORIGINAL VALUE: does not modify the original value
STATIC or NON-STATIC: non-static method

padEnd()
TASK: fills the string (at the end) with repeating characters unitl reaching out to a specified length
RETURN: returns a new string
ARGUMENTS: 2 args; the first is the new desired length, and the second is what you would like to fill the string with
CHANGE ORIGINAL VALUE: does not modify the original value
STATIC or NON-STATIC: non-static method
*/

let s = 'TechGlobal';

console.log(s.slice(s.indexOf('l'), s.lastIndexOf('l')).replace('O', '###').toUpperCase());
console.log(s.slice(s.indexOf('l'), s.lastIndexOf('l')).toUpperCase().replace('O', '###'));