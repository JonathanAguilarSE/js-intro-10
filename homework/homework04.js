console.log('\n---------------TASK01---------------\n');
for(let i = 1; i <= 100; i++){
    if(i % 7 === 0) console.log(i);
}


console.log('\n---------------TASK02---------------\n');
for(let i = 1; i <= 50; i++){
    if(i % 2 === 0 && i % 3 === 0) console.log(i);
}


console.log('\n---------------TASK03---------------\n');
for(let i = 100; i >= 50; i--){
    if(i % 5 === 0) console.log(i);
}


console.log('\n---------------TASK04---------------\n');
for(let i = 0; i <= 7; i++){
    console.log(`The square of ${i} is ${i * i}`);
}


console.log('\n---------------TASK05---------------\n');
let sum = 0;

for(let i = 1; i <= 10; i++){
    sum += i;
}
console.log(sum);


console.log('\n---------------TASK06---------------\n');
let randNum = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
// let randNum = 5;
let product = 1;

for(let i = 1; i <= randNum; i++){
    product *= i;
}
console.log(product);


console.log('\n---------------TASK07---------------\n');
let attempts = 0;
let randomNumber;

do{
    randomNumber = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    attempts++;
} while(randomNumber % 5 !== 0);
let time = attempts > 1 ? 'attempts' : 'attempt';
console.log(`The random number is ${randomNumber} and it took ${attempts} ${time}`);


console.log('\n---------------TASK08---------------\n');
const countries = ['Germany', 'Argentina', 'Ukraine', 'Romania'];

console.log(countries);
console.log(countries.sort());


console.log('\n---------------TASK09---------------\n');
const cartoonDogs = ['Scooby Doo', 'Snoopy', 'Blue', 'Pluto', 'Dino', 'Sparky'];

console.log(cartoonDogs);
let plutoThere = cartoonDogs.includes('Pluto') ? true : false;
console.log(plutoThere);


console.log('\n---------------TASK10---------------\n');
const cartoonCats = ['Garfield', 'Tom', 'Sylvester', 'Azrael'];

console.log(cartoonCats.sort());
let garfieldFelixThere = cartoonCats.includes('Garfield') && cartoonCats.includes('Felix') ? true : false;
console.log(garfieldFelixThere);


console.log('\n---------------TASK11---------------\n');
const numbers = [10.5, 20.75, 70, 80, 15.75];

console.log(numbers);
for(const number of numbers){
    console.log(number);
}


console.log('\n---------------TASK12---------------\n');
const supplies = ['Pen', 'notebook', 'Book', 'paper', 'bag', 'pencil', 'Ruler'];

console.log(supplies);


let startsWithBOrP = 0
for(let i = 0; i <= supplies.length - 1; i++){
    if(supplies[i].toLowerCase().startsWith('b') || supplies[i].toLowerCase().startsWith('p')) startsWithBOrP++;
}
console.log(`Elements starting with 'B' or 'P' = ${startsWithBOrP}`);


let includesBOrP = 0;
for(let i = 0; i <= supplies.length - 1; i++){
    if(supplies[i].toLowerCase().includes('book') || supplies[i].toLowerCase().includes('pen')) includesBOrP++;
}
console.log(`Elements having 'book' or 'pen' = ${includesBOrP}`);


console.log('\n---------------TASK13---------------\n');
const numbers1 = [3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78];

console.log(numbers1);


let greaterThan10 = 0;
for(const number of numbers1){
    if(number > 10) greaterThan10++;
}
console.log(`Elements that are more than 10 = ${greaterThan10}`);


let lessThan10 = 0;
for(const number of numbers1){
    if(number < 10) lessThan10++;
}
console.log(`Elements that are less than 10 = ${lessThan10}`);


let also10 = 0;
for(const number of numbers1){
    if(number === 10) also10++;
}
console.log(`Elements that are less than 10 = ${also10}`);


console.log('\n---------------TASK14---------------\n');
let firstArr = [5, 8, 13, 1, 2];
let secondArr = [9, 3, 67, 1, 0];
let thirdArr = [];

console.log('1st array is =', firstArr);
console.log('2nd Array is =', secondArr);


for(let i = 0; i <= firstArr.length - 1; i++){
    thirdArr.push(Math.max(firstArr[i], secondArr[i]));
}
console.log('3rd array is =', thirdArr);


console.log('\n---------------TASK15---------------\n');
function firstDuplicate(arr){
    for(let i = 0; i <= arr.length - 1; i++){
        for(let j = i + 1; j <= arr.length - 1; j++){
            if(arr[i] === arr[j]){
                return arr[i];
            }
        }  
    }
    return -1;
}
console.log(firstDuplicate([3, 7, 10, 0, 3, 10])); // 3
console.log(firstDuplicate([5, 7, 7, 0, 5, 10])); // 5
console.log(firstDuplicate([123, 'abc', '123', 3, 'abc'])); // abc
console.log(firstDuplicate([1, 2, 3])); // -1


console.log('\n---------------TASK16---------------\n');
function getDuplicates(arr){
    let newArr = [];

    for(let i = 0; i <= arr.length - 1; i++){
        for(let j = i + 1; j <= arr.length - 1; j++){
            if(arr[i] === arr[j] && !newArr.includes(arr[i])){
                newArr.push(arr[i]);
            }
        }
    }
    return newArr;
}
// OR
// function getDuplicates(arr){
//     let dup = []
//     for(let i = 0; i <= arr.length - 1; i++){

//         if(arr.includes(arr[i], i+1) && !dup.includes(arr[i])) dup.push(arr[i])
//     }
//     return dup;
// }


console.log(getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ])); // [ 0, -7 ]
console.log(getDuplicates([ 1, 2, 5, 0, 7 ])); // []
console.log(getDuplicates(['A', 'foo', '12' , 12, 'bar', 'a', 'a', 'foo' ])); // [ 'foo', 'a' ]
console.log(getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ])); // []



console.log('\n---------------TASK17---------------\n');
function reverseStringWords(str){
    str = str.trim();
    let words = str.split(' ');

    let reversedWords = words.map(word => word.split('').reverse().join(''));

    return reversedWords.join(' ');
}

console.log(reverseStringWords("Hello World"));
console.log(reverseStringWords("I like JavaScript"));
console.log(reverseStringWords("Hello"));
console.log(reverseStringWords(""));
console.log(reverseStringWords("    "));


console.log('\n---------------TASK18---------------\n');
function getEvens(a, b){
    let max = Math.max(a, b);
    let min = Math.min(a, b);
    let evenNumbers = [];

    for(let i = min; i <= max; i++){
        if(i % 2 === 0) evenNumbers.push(i);
    }
    return evenNumbers;
}
console.log(getEvens(2, 7)); // [ 2, 4, 6 ]
console.log(getEvens(17, 5)); // [ 6, 8, 10, 12, 14, 16 ]
console.log(getEvens(4, 4)); // [ 4 ]
console.log(getEvens(3, 3)); // []


console.log('\n---------------TASK19---------------\n');
function getMultipleOf5(a, b){
    let max = Math.max(a, b);
    let min = Math.min(a, b);
    let multiplesOf5 = [];

    for(let i = min; i <= max; i++){
        if(i % 5 === 0) multiplesOf5.push(i);
    }
    if(a > b) multiplesOf5.reverse();            
    return multiplesOf5;
}
console.log(getMultipleOf5(3, 17)); // [ 5, 10, 15 ]
console.log(getMultipleOf5(23, 5)); // [ 20, 15, 10, 5 ]
console.log(getMultipleOf5(5, 5)); // [ 5 ]
console.log(getMultipleOf5(2, 4)); // []


console.log('\n---------------TASK20---------------\n');
function fizzBuzz(a, b){
    let min = Math.min(a, b);
    let max = Math.max(a, b);
    let newArr = [];

    for(let i = min; i <= max; i++){
        newArr.push(i);
    }
    
    for(let i = 0; i <= newArr.length - 1; i++){
        if(newArr[i] % 3 === 0 && newArr[i] % 5 === 0){
            newArr[i] = 'FizzBuzz';
        } else if(newArr[i] % 3 === 0){
            newArr[i] = 'Fizz';
        } else if(newArr[i] % 5 === 0){
            newArr[i] = 'Buzz';
        }
    }
    return newArr.toString().split(',').join(' | ');
}

console.log(fizzBuzz(13, 18)); // 13 | 14 | FizzBuzz | 16 | 17 | Fizz
console.log(fizzBuzz(12, 5)); // Buzz | Fizz | 7 | 8 | Fizz | Buzz | 11 | Fizz
console.log(fizzBuzz(5, 5)); // Buzz
console.log(fizzBuzz(9, 6)); // Fizz | 7 | 8 | Fizz