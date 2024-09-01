const numbers = [0, 10, -4, 5, 2, -3];

// Find first positive
// Find first negative

// let firstPos;

// for(const number of numbers){
//     if(number > 0){
//         firstPos = number;
//         break;
//     }
// }

let firstPos = numbers.find((number) => number > 0); // 10

let firstPosIndex = numbers.findIndex((number) => number > 0); // 1



const cities = ['Rome', 'Kyiv', 'Berlin', 'Brugge', 'LA'];
// Find the first element that has 4 letters -> Rome
// Find the last element that has 6 letters -> Brugge
// Find the index of LA -> 4
// Find the first element which has i -> Kyiv
// Find the last element that has 4 letters -> Kyiv

let firstElement = cities.find((city) => city.length === 4);
console.log(firstElement);

let lastElement = cities.findLast((city) => city.length === 6);
console.log(lastElement);

let indexLA = cities.findIndex((city) => city.includes('LA'));
console.log(indexLA);

let firstI = cities.find((city) => city.toLowerCase().includes('i'));
console.log(firstI);

let lastElementWith4 = cities.findLast((city) => city.length === 4);
console.log(lastElementWith4);