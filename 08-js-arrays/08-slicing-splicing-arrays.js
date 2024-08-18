const animals = [ 'Cat', 'Dog', 'Cow', 'Monkey', 'Bird' ];

const animalsPartial1 = animals.slice(0, 3);
const animalsPartial2 = animals.slice(2, 4);

console.log(animals);
console.log(animals);


// Get the last 3 elements [ 'Cow', 'Monkey', 'Bird' ]
const animalsLast3a = animals. slice(2); // If array does not change
const animalsLast3b = animals. slice(-3); // more dynamic

console.log(animalsLast3a); // [ 'Cow', 'Monkey', 'Bird' ]
console.log(animalsLast3b); // [ 'Cow', 'Monkey', 'Bird' ]


console.log(animals.slice(2, 10)); // []
console.log(animals.slice(2, 3)); // [ 'Cow' ]


const numbers = [ 5, -2, 10, 20, 50, -10 ]

console.log(Math.min(numbers.slice(0, 3))); // NaN
console.log(Math.min(...numbers.slice(0, 3))); // -2
console.log(Math.max(...numbers.slice(0, 3))); // 10

const result = [...numbers.slice(3), ...numbers.slice(0, 3)];
console.log(result); // [ 20, 50, -10, 5, -2, 10 ]


// Splice
// pop() -> removes last element
// shift() -> removes the first element
// push() -> adds element to the end
// unshift() -> add element to the start
const cities = ['Chicago', 'Rome', 'Berlin'];

// Adding an element in the middle of the array
cities.splice(1, 0, 'LA'); // returns []

console.log(cities); // [ 'Chicago', 'LA', 'Rome', 'Berlin' ]

// Adding multiple elements in th emiddle of the array
cities.splice(2, 0, 'Miami', 'Paris'); // returns []

console.log(cities); // [ 'Chicago', 'LA', 'Miami', 'Paris', 'Rome', 'Berlin' ]

// Removing elelentnsform the middle of the array
cities.splice(4,1); // returns [ 'Rome']

console.log(cities); // [ 'Chicago', 'LA', 'Miami', 'Paris', 'Berlin' ]

// Remove some elements and add new ones instead
cities.splice(1, 2, 'Des Plaines', 'Porto', 'Brugge'); // [ 'LA', 'Miami' ]

console.log(cities); //[ 'Chicago', 'Des Plaines', 'Porto', 'Brugge', 'Paris', 'Berlin' ]
