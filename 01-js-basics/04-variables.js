let myFavoriteBook = 'Amok'; // Convention - not a written rule but followed by all the programmers for readability

// You can use digits in your variable name anywhere but the first character
let myFavoriteBook1 = 'My name is Red';

// you cannot use special characters in your variable names except the _ and currencies
let myCar = 'Toyota';
let $my_balance = 100;

// You cannot use reserved keywords as variable names
// let class = 'Math'; // Error: Compiler error
let _class = 'Math';



let name1;
let name2;
let name3;

// Same as

let number1, number2, number3;

// const firstDay, secondDay, thirdDay; //Will not work because const must be initialized
const firstDay = 'Sunday', secondDay = 'Monday', thirdDay = 'Tuesday';

// Also allowed; some variables are defined and others not
let num1 = 10, num2, num3 = 25.5, num4;

const name, age;            // false
let n1 = 45, n2;            // true
const num11 = 45, num12;      // false
let x, let y;               // false / error
let a; let b;               // true but not preferred
let i1; i2;                 // false because of i2
