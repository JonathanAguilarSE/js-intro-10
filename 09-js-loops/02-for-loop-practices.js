// Output the numbers from 1 to 10 (both inclusive) -> 1 2 3 4 5...
for (let i = 1; i <= 10; i++){
    console.log(i);
}


// Output the numbers from 100 to 0 (both inclusive) –> 100 99 98 97 96 ….
for (let i = 100; i >= 0; i--){
    console.log(i);
}


// Output all the even numbers from 0 to 50 (both inclusive) -> 0 2 4 6 8 ….
for (let i = 0; i <= 50; i++){
    if(i % 2 === 0) console.log(i);
}
// OR
for (let i = 0; i <= 50; i += 2){
    console.log(i);
}


// Output all the numbers divisible by 5 from 0 to 50 (both inclusive) -> 0 5 10 ….
for (let i = 0; i <= 50; i++){
    if(i % 5 === 0) console.log(i);
}
// OR
for (let i = 0; i <= 50; i += 5){
    console.log(i);
}


// Find sum of the numbers from 1 to 5 (both inclusive) -> 15
let result = 0
for(let i = 1; i <= 5; i++){
    result += i;
}
console.log(result);

// Find sum of the numbers from 10 to 15 (both inclusive) -> 75
let initialResult = 0
for(let i = 10; i <= 15; i++){
    initialResult += i;
}
console.log(initialResult);


// Find the product of all the numbers from 1 to 6 (both inclusive) -> 1 * 2 * 3 * 4 * 5 * 6 = 720
let result1 = 1
for(let i = 1; i <= 6; i++){
    result1 *= i;
}
console.log(result1);


// Output each character from TechGlobal School -> T e c h G l o b a l   S c h o o l
let str = 'TechGlobal School';
for (let i = 0; i < str.length; i++) { // watch out for length when using either < or <=
    console.log(str[i]);
}
// OR
// let str = 'TechGlobal School';
// for(let char of str){
//     // char.split(' ');
//     console.log(...char);
// }


// Count the total occurrences of letter o in TechGlobal School  -> 3
let s = 'TechGlobal School';
let count = 0
for (let i = 0; i < s.length; i++) { // watch out for length when using either < or <=
    if(s[i] === 'o') count++;
}
console.log(count);
// OR; but this way is not neat and more complex than it has to be
let str1 = 'TechGlobal School';
let resultFinal = []
for(let char of str1.toLowerCase()){
    let oInWord = char.includes('o');
    if(oInWord === true) resultFinal.push(oInWord);
    // console.log(resultFinal.push(oInWord))
}
console.log(resultFinal.length);


// Output all the odd numbers from 1 to Random Number (both inclusive) -> 1 3 5 7 9 ….
for(let i = 1; i <= (Math.floor(Math.random() * (20 - 10 + 1)) + 10); i++){
    if(i % 2 !== 0) console.log(i);
}


/*
Generate a random number bt 1 to 10 (both inclusive
Find the product of all the numbers starting from 1 to randomly generated random

5       -> 1 * 2 * 3 * 4 * 5 -> 120
6       -> 1 * 2 * 3 * 4 * 5 * 6 -> 720
3       -> 1 * 2 * 3 -> 6
*/
let counter = 1
for(let i = 1; i <= (Math.floor(Math.random() * (10 - 1 + 1)) + 1); i++){
    counter *= i
}
console.log(counter);


/*
Print all the numbers between 2 random numbers in the range of 1 to 10 (both inclusive) in ascending order

ran1 ran2
7, 5    -> 5 6 7
4, 8    -> 4 5 6 7 8
5, 5    -> 5
*/
let ran1 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
let ran2 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;

console.log(`The random numbers are = ${ran1} and ${ran2}`);

let newMin = Math.min(ran1, ran2);
let newMax = Math.max(ran1, ran2);

for( let i = newMin; i <= newMax; i++){
    console.log(i)
}