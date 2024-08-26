const numbers = [3, 4, 7, 3, 2, 2, 7];

console.log('<----------TASK01---------->');
//Find the sum of all numbers       -> 28
//Find the average of the numbers   -> 4

let sum = 0;
const avg = [];

for(const number of numbers){
    sum += number;
}

console.log(sum);
console.log(sum/numbers.length);


console.log('<----------TASK02---------->');
// Find the product of all numbers but startign from the index of 3 -> 28
let prodOfNums = 1
for(let i = 3; i < numbers.length; i++){
    prodOfNums *= numbers[i];
}

console.log(prodOfNums);

// OR
// let prodOfNums = 1
// for(const number of numbers.slice(3)){
//     prodOfNums *= number;
// }

// console.log(prodOfNums);