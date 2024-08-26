const numbers = [-7, -2, 0, -2, 0, 5, 5, 10, 100, 0];


console.log('<----------TASK01---------->');
// Count how many positive numbers you have in the array -> 4
let countPos = 0

for(const number of numbers){
    if(number > 0) countPos++;
}
console.log(countPos);

console.log('<----------TASK02---------->');
// Count how many negative numbers you have in the array -> 3
let countNeg = 0

for(const number of numbers){
    if(number < 0) countNeg++;
}
console.log(countNeg);


console.log('<----------TASK03---------->');
// Count how many even numbers you have in the array -> 7
let evenCount = 0;

for(const number of numbers){
    if(number % 2 === 0) evenCount++;
}
console.log(evenCount);

console.log('<----------TASK04---------->');
// Count how many odd but non-negative numbers you in the array -> 2
let oddNonNeg = 0;
for(const number of numbers){
    if(number > 0 && number % 2 !== 0) oddNonNeg++;
}
console.log(oddNonNeg);