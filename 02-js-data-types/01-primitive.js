// string

let name = 'John';
console.log(name);
console.log(typeof name);


// number

let num1 = 10; // absolute number
let num2 = 3.14; // floating/decimal number

console.log(num1, num2);

console.log(typeof num1, typeof num2);

// boolean : are used with if - else conditions
let isRainy = false;
let isAuthenticated = true;

let result = '5' === 5;

let isUsernameCorrect = 'admin' === 'johndoe';

console.log(isRainy); // false
console.log(isAuthenticated); // true
console.log(result); // false
console.log(isUsernameCorrect); // false

console.log(typeof isAuthenticated); // boolean
console.log(typeof result); // boolean


// undefined vs null
let className1;
let className2 = undefined;

let courseName = null;

console.log(className1);
console.log(className2);
console.log(courseName);

console.log(typeof className1);
console.log(typeof className2);
console.log(typeof courseName);


// changing types
let address = 'Chicago';
console.log(typeof address);

address = 12345;
console.log(typeof address);

// bigint
let n1 = 4989874398568934756n;
let n2 = BigInt('4989874398568934756');

console.log(n1);
console.log(n2);

console.log(typeof n1);
console.log(typeof n2);

// symbol

