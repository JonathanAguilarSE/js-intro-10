// Output all the even numbers from 0 to 50 (both inclusive) -> 0 2 4 6 8 …. 50
let num = 0;
while(num <= 50) {
    if(num % 2 ===0) console.log(num);
    num++;
}



// Count all the even numbers between 1 and 10 (both inclusive) -> 2, 4, 6, 8, 10 -> 5
let num1 = 1;
const count = [];
while(num1 <= 10) {
    if(num1 % 2 === 0) count.push(num1);
    num1++;
}
console.log(`There are ${count.length} even numbers`);
//OR
// while(num1 <10) {
//     if(num1 % 2 === 0) 
// }



// Find sum of the numbers starting from 3 to 7 (both inclusive) -> 3 + 4 + 5 + 6 + 7 -> 25
let num2 = 3;
let initial = 0;
while(num2 <= 7) {
    initial += num2;
    num2++;
}
console.log(initial);

