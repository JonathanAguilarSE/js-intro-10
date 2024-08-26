const nums = [ 1, 5, 7, 2, 3, 4, 9, 4, 5, 2, 1, 0, 10, 3, 5 ];

console.log('<----------TASK01---------->');
// Find the sum of first 3 and last 3 elements -> 31
let sum = 0;
for(const num of nums.slice(0, 3)){
    sum += num;
}

for(const num of nums.slice(-3)){
    sum += num;
}
console.log(sum);
 // OR 
sum = 0;

for(const num of [...nums.slice(0,3), ...nums.slice(-3)]){
    sum += num;
}
console.log(sum);