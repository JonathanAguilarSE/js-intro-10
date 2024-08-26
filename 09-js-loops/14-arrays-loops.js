const numbers = [3, 4, 7, 3, 2, 2, 7];

console.log('<----------TASK01---------->');
// Find the sum of the numbers that has even index -> 3 + 7 + 2 + 7 -> 19
let sum = 0;

for(let i = 0; i <= numbers.length - 1; i++){
    if(i % 2 === 0) sum += numbers[i];
}
console.log(sum);


console.log('<----------TASK02---------->');
// Find the multiplication of numbers that has odd index -> 4 * 3 * 2 -> 24
let product = 1;
for(let i = 1; i <= numbers.length - 1; i++){
    if(i % 2 !== 0) product *= numbers[i];
}
console.log(product);