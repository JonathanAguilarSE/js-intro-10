// 1. let

let firstName = 'John';

console.log(firstName); // 'John'

firstName = 'James';

console.log(firstName); // 'James'


// 2. const stands for constant value

const pi = 3.14

console.log(pi);

pi = 10 // Error message

console.log(pi); // Not executed


// 3. var

var lastName = 'Doe';

console.log(lastName);

lastName = 'Smith';

console.log(lastName); // var is the old let, variables can be reassigned

//Another difference between let and const
let city = 'Chicago'; // variable initialization = decalre a variable and assign a value

let country; // declaring a variable or variable declaration
country = 'US'; // value assignment to a variable


// const firstMonth; // not allowed; constant must always be initialized
// firstMonth = 'January'; // variable initialization

const firstMonth = 'January'; // const MUST be initialized


// let is oging to be undefined if it is declared but not assigned with any value
// let numberOfStudentsInBatch10; // undefined
// console.log(numberOfStudentsInBatch10);

let numberOfStudentsInBatch10 = 20;
console.log(numberOfStudentsInBatch10); //20