const arr1 = [1, 2, 3];

const arr2 = arr1;

console.log(arr1, arr2);

arr1.push(4);

console.log(arr1); // [1, 2, 3, 4]
console.log(arr2); // [1, 2, 3, 4]


let str1 = 'John';
let str2 = str1;

console.log(str1);
console.log(str2);

str1 = 'James';

console.log(str1);
console.log(str2);



// Copying your array to prevent immutability
const numbers1 = [1, 2, 3, 4, 5];
const numbers2 = [...numbers1];

console.log(numbers1); // [ 1, 2, 3, 4, 5 ]
console.log(numbers2); // [ 1, 2, 3, 4, 5 ]

numbers1.push(6);

console.log(numbers1); // [ 1, 2, 3, 4, 5, 6 ]
console.log(numbers2); // [ 1, 2, 3, 4, 5 ]


// Copying your array to prevent mutability by using loops
const booleans1 = [true, false, true];
const booleans2 = [];

booleans1.forEach(element => booleans2.push(element));

console.log(booleans1);
console.log(booleans2);

booleans1.push('hello');

console.log(booleans1);
console.log(booleans2);


// Spread operator or loops doe snot work in case of nested arrays or objects
const groups1 = ['John', ['Alex', 'Mariia'], ['John', 'Jane']];

const groups2 = [...groups1];

console.log(groups1);
console.log(groups2);

groups1.push('Mark');
groups1[1][1] = 'Jessica';

console.log(groups1);
console.log(groups2);

// We call this copying wiht loops or spread operator as SHALLOW COPY
// DEEP COPY: safer way to prevent mutability and cna be achieved using JSON