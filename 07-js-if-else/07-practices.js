const { getRandomNumber } = require('../utils/MathHelper.js');

/*
Generate a random number between -10 and 10 (both inclusive)
Print "The number is POSITIVE" if the generated number is more than zero
Print "The number is NEGATIVE" if the generated number is less than zero
Print "The number is ZERO" if the generated number is zero
*/
console.log('\n---------------TASK-1-----------------\n');

let r1 = getRandomNumber(-10, 10);

console.log('Random number is =', r1);

// Way 1 - my way
if(r1 === 0) {
    console.log('The number is ZERO');
} else if (r1 > 0) {
    console.log('The number is POSITIVE');
} else {
    console.log('The number is NEGATIVE');
}

// Way 2 - short-hand way
if(r1 > 0) console.log('The number is POSITIVE');
else if (r1 < 0) console.log('The number is NEGATIVE');
else console.log('The number is ZERO');

// Way 3 - nested if-else statement way - the if-else condition is within an else block     *** makes it more interesting ***
if(r1 > 0) {
    console.log('The number is POSITIVE');
} else {
    if(r1 < 0) {
        console.log('The number is NEGATIVE');
    } else {
        console.log('The number is ZERO');
    }
}



/*
Generate a random number between 1 and 12 (both inclusive) are considered as months
1 January
.
.
12 December

Print "Winter" if the generated number is 12, 1, or 2
Print "Spring" if the generated number is 3, 4, or 5
Print "Summer" if the generated number is 6, 7, 8
Print "Fall" if the generated number is 9, 10, 11
*/

console.log('\n---------------TASK-2-----------------\n');

let r2 = getRandomNumber(1, 12);

console.log('Random month is =', r2);

if(r2 === 12 || r2 === 1 || r2 === 2) {
    console.log('Winter');
} else if(r2 === 3 || r2 === 4 || r2 === 5) {
    console.log('Spring');
} else if(r2 === 6 || r2 === 7 || r2 === 8) {
    console.log('Summer');
} else {
    console.log('Fall');
}

/*  THIS WILL NOT WORK
    r2 === 1 || 2 || 3
*/

// another way
if(r2 >= 3 && r2 <= 5) console.log('Spring');
else if(r2 >= 6 && r2 <= 8) console.log('Summer');
else if(r2 >= 9 && r2 <= 11) console.log('Fall');
else console.log('Winter');



function startE(name) {
    if(name[0] === 'E' || name[0] === 'e') return true;
    return false;
}

console.log(startE('Eagle'))
console.log(startE('edward'))
console.log(startE('angel'))
console.log(startE('134'))
console.log(startE(''))



/*
Write a function called divisible5 and it takes a number as an argument
It will return true if the number is divisible by 5
It will return false if the number is NOT divisible by 5

divisible5(7)       -> false
divisible5(0)       -> true
divisible5(10)      -> true
divisible5(99)      -> false
*/
function divisible5(number) {
    if (number % 5 === 0) return true;
    return false;
}

// another way to write the return in the function code block
// return number % 5 ===0; omitting additional braces since this is a simpple true or false condition

console.log(divisible5(7));
console.log(divisible5(0));
console.log(divisible5(10));
console.log(divisible5(125));
console.log(divisible5(99));



/*
Write a function called fooBar which takes a number and return a string or a number.
if the given number is divisible by 5 -> return 'foo'
if the given number is divisible by 7 -> return 'bar'
if the given number is divisible both by 5 and 7 -> return 'foobar'
if the numbers is not divisible by 5 or 7 -> return the same number back

fooBar(2)   -> 2
fooBar(3)   -> 3
fooBar(5)   -> 'foo'
fooBar(10)  -> 'foo'
fooBar(14)  -> 'bar'
forBar(0)   -> 'foobar'
fooBar(35)  -> 'foobar'
fooBar(70)  -> 'foobar'
*/

function fooBar(number1) {
    if(number1 % 5 === 0 && number1 % 7 === 0) console.log('foobar');
    else if(number1 % 5 === 0) console.log('foo');
    else if(number1 % 7 === 0 && number1 % 7 === 0) console.log('bar');
    else console.log(number1);
}

/*
another way to solve this task - nested statements
function fooBar(number) {
    if (number % 5 === 0 && number % 7 === 0) return 'foobar';
    else if (number % 7 === 0) return 'bar';
    else if (number % 5 === 0) return 'foo';
    return number;
}
*/

fooBar(2)
fooBar(3)
fooBar(5)
fooBar(10)
fooBar(14)
fooBar(0)
fooBar(35)
fooBar(70)



/*
Write a function called getGrade which takes a number as the score and return a letter as a grade
0-100

90-100          -> 'A'
80-89           -> 'B'
70-79           -> 'C'
60-69           -> 'D'
less than 60    -> 'F'

getGrade(90) -> 'A' 
getGrade(89) -> 'B' 
getGrade(80) -> 'B' 
getGrade(79) -> 'C' 
getGrade(70) -> 'C' 
getGrade(69) -> 'D' 
getGrade(60) -> 'D' 
getGrade(59) -> 'F' 
getGrade(95) -> 'A' 
getGrade(83) -> 'B' 
getGrade(23) -> 'F' 
getGrade(67) -> 'D'
*/

function getGrade(number2) {
    if(number2 >= 90) return 'A';
    else if(number2 >= 80) return 'B';
    else if(number2 >= 70) return 'C';
    else if(number2 >= 60) return 'D';
    return 'F';
}

console.log(getGrade(10));
console.log(getGrade(45));
console.log(getGrade(65));
console.log(getGrade(77));
console.log(getGrade(94));
