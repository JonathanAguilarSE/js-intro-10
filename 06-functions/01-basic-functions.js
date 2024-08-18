/*
Create a function that prints 'Hi" when invoked"
*/

// this is a void zero argument function - returns nothing
function sayHi(){
    console.log('Hi');
}

sayHi(); // 'Hi'


/*
Create  function thats a str as an argument and it returns 'Hello {name}!'

sayHello('Alex')    -> 'Hello, Alex!
*/

function sayHello(name){
    return `Hello, ${name}!`;
}

let result = sayHello('Enso');

console.log(result); // 'Hello, Enso!'

console.log(sayHello('John')); // 'Hello, John!'
console.log(sayHello(5)); // 'Hello, 5!'



// exercise 1
function greet(greeting, name){
    console.log(`${greeting}, ${name}!`);
}

greet('Hello', 'John');
greet('Good morning', 'Sam');


// exercise 2
function sum(num1, num2){
    return num1 + num2
}

console.log(sum(2, 4));
console.log(sum(3, 7));
console.log(sum(70, 30));

/*
function sum(num1, num2){
    let result = num1 + num2;
    return result;
}

console.log(sum(4, 6));

THIS IS ANOTHER WAY TO WRITE THE FUNCTION
*/

/*
Write a function that takes multiple numbers as arguments
Return the max and min numbers as an array (min is at index 0 and max is at index 1)

minMax(2, 4, 6, 9) -> [2, 9]
minMax(5, 10, -5, -1) -> [-5, 10]
*/


// exercise 3
function product(number1, number2, number3){
    return number1 * number2 * number3;
}

console.log(product(1, 3, 5)); // 15
console.log(product(2, 3, 10)); // 60


// exercise 4
function isEven(n1){
    if (n1 % 2 === 0){
        return true;
    } else {
        return false};
}

console.log(isEven(2));
console.log(isEven(5));

// OR another way to write this same function with same result

function isEven(num){
    return num % 2 === 0;
}

console.log(isEven(2))
console.log(isEven(5))

// exercise 5
function initials(fname, lname){
    return `'${fname[0]}.${lname[0]}.'`;
}

console.log(initials('John', 'Doe'));


// exercise 6
function inits(fullname) {
    return fullname[0].toUpperCase() + fullname[fullname.indexOf(' ') + 1].toUpperCase();
}

console.log(inits('jonathan Aguilar'));
console.log(inits('mandy lam'));


// OR another way to write this same function with same result

function inits(fullname) {
    const words = fullname.split(' ');
    return (words[0][0] + words[1][0]).toUpperCase();
}

console.log(inits('jonathan Aguilar'));
console.log(inits('louis aguilar'));





/*
Write a function that takes 2 number arguments and return a random number between these numbers
Both numbers are included 
Be careful as the numbers given can be different considering min, max

getRandomNumber(3, 5)       -> 
getRandomNumber(5, 3)       -> 
getRandomNumber(-5, 15)     -> 
*/

function getRandomNumber(min, max) {
    let newMin = Math.min(min, max);
    let newMax = Math.max(min, max);

    return Math.floor(Math.random() * (newMax - newMin + 1)) + newMin
}

console.log(getRandomNumber(5, 8));