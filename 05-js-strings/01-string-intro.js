let fname= 'John';
let lname = 'Doe';

let fullname1 = fname + ' ' + lname; // traditional concatenation with + operator
let fullname2 = `${fname} ${lname}`; // concatenation using backticks (string templates || template literals) after ES6
let fullname3 = fname.concat(' ').concat(lname); // concatenation using concat() funciton

fname.concat(' '.concat(lname)); // this is another way to use concat() function


console.log(fullname1); // 'John Doe'
console.log(fullname2); // 'John Doe'
console.log(fullname3); // 'John Doe'

/*
concat() function
TASK: combine strings together
RETURN: returns a new string
ARGUMENTS: takes a string or multiple strings as an argument/parameter
CHANGE ORIGINAL VALUE: does not modify the original values
STATIC or NON-STATIC: non-static function
*/

console.log('Hello'.concat(', ', 'Batch-10', 9));

console.log(typeof ''); //
