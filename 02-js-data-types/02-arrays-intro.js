let favNumber = 7;
let firstKidName = 'Alex';

let cars = [ 'Toyota', 'Tesla', 'Honda', 'BMW' ];
let numbers = [ 7, 6, 5, 25, 100 ];

console.log(cars);
console.log(numbers);

console.log(cars[2]);

cars[0] = 'GMC'; // updating existing elements with new values

// getting the size of an array
// length is an array porpoerty which returns back the total number of elements in the array
console.log(cars.length);
console.log(numbers.length);

const students = [ 'Alex', 'John', 'Jane', 'Mariia' ];

students[-1]; // undefined
students[4]; // undefined

students[7] = 'Jessie';

console.log(students);

// creating an array with the constructor
const array = new Array( 'Mariaa', 25, null, undefined, Symbol('Hello'), 25n );
const array2 = [ 'Mariaa', 25, null, undefined, Symbol('Hello'), 25n ];

// accessing the first and last element in the array dynamically
const nums = [ 10, 20, 30, 40 ];

let first = nums[0];
let last = nums[ nums.length - 1 ];

console.log(first);
console.log(last);
