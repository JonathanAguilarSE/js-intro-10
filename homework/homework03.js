const { getRandomNumber } = require('../utils/MathHelper.js');

console.log('\n---------------TASK01---------------\n');
let num1A = getRandomNumber(1, 100);
let num1B = getRandomNumber(1, 100);
let num1C = getRandomNumber(1, 100);
let task1Avg = ((num1A + num1B + num1C) / 3).toFixed(2);

console.log(`The three generated numbers are: ${num1A}, ${num1B}, ${num1C}`);

if (task1Avg >= 50) {
    console.log(`The mean is ${task1Avg}, which is greater or equal to 50: ${true}`);
} else {
    console.log(`The mean is ${task1Avg}, which is greater or equal to 50: ${false}`);
}



console.log('\n---------------TASK02---------------\n');
let num2A = getRandomNumber(1, 3);
let num2B = getRandomNumber(1, 3);
let num2C = getRandomNumber(1, 3);

console.log(`The three generated numbers are: ${num2A}, ${num2B}, ${num2C}`);

if (num2A === num2B && num2A === num2C) {
    console.log('TRIPLE MATCH');
} else if (num2A === num2B || num2A === num2C || num2B === num2C) {
    console.log('DOUBLE MATCH');
} else {
    console.log('NO MATCH')
}



console.log('\n---------------TASK03---------------\n');
function hasA(randomString3) {
    if (randomString3.toLowerCase().includes('a')) {
        return `The string '${randomString3}' contains 'A/a', which is ${true}`;
    } else {
        return `The string '${randomString3}' does not contain 'A/a', which is ${false}`;
    }
}

console.log(hasA('Tech'));
console.log(hasA('Global'));
console.log(hasA(''));
console.log(hasA('Apple'));



console.log('\n---------------TASK04---------------\n');
function doubleOrTripleWord(randomString4) {
    if (randomString4.length % 2 === 0) {
        return randomString4 + randomString4 + randomString4;
    } else {
        return randomString4 + randomString4;
    }
}

console.log(doubleOrTripleWord('Tech'));
console.log(doubleOrTripleWord('Apple'));
console.log(doubleOrTripleWord(''));
console.log(doubleOrTripleWord(' '));
console.log(doubleOrTripleWord('1'));
console.log(doubleOrTripleWord('22'));



console.log('\n---------------TASK05---------------\n');
function firstWord(randomString5) {
    if (randomString5 === '') {
        return '';
    } else {
        return randomString5.split(' ')[0];
    }
}

console.log(firstWord('Hello World'));
console.log(firstWord('I like JavaScript'));
console.log(firstWord('Hello'));
console.log(firstWord(''));
console.log(firstWord('    '));



console.log('\n---------------TASK06---------------\n');
function lastWord(randomString6) {
    if (randomString6 === '') {
        return '';
    } else {
        return randomString6.split(' ').at(-1);
    }
}

console.log(lastWord('Hello World'));
console.log(lastWord('I like JavaScript'));
console.log(lastWord('Hello'));
console.log(lastWord(''));
console.log(lastWord('    '));



console.log('\n---------------TASK07---------------\n');
function firstlastWord(randomString7) {
    return randomString7 == '' ? '' : randomString7.split(' ')[0] + randomString7.split(' ').at(-1);
}

console.log(firstlastWord('Hello World'));
console.log(firstlastWord('I like JavaScript'));
console.log(firstlastWord('Hello'));
console.log(firstlastWord(''));
console.log(firstlastWord('  '));



console.log('\n---------------TASK08---------------\n');
function startVowel(randomString8) {
    let newRandomString8 = randomString8.toLowerCase()[0];
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.includes(newRandomString8);
}

console.log(startVowel('Hello'));
console.log(startVowel('Apple'));
console.log(startVowel('orange'));
console.log(startVowel(''));
console.log(startVowel('  '));
console.log(startVowel('123'));



console.log('\n---------------TASK09---------------\n');
function swap4(randomString9) {
    if(randomString9.length >= 8) {
        return randomString9.slice(-4) + randomString9.slice(4, randomString9.length - 4) + randomString9.slice(0, 4);
    } else {
        return '';
    }
}

console.log(swap4('abc'));
console.log(swap4('JavaScript'));
console.log(swap4('TechGlobal'));
console.log(swap4(''));
console.log(swap4('   '));
console.log(swap4('Apple'));



console.log('\n---------------TASK10---------------\n');
function swapFirstLastWord(randomString10) {
    if(randomString10.trim().split(' ').length >= 2) {
        // newRandomString10 = randomString10.trim();
        return randomString10.split(' ').at(-1) + randomString10.slice(randomString10.indexOf(' '), randomString10.lastIndexOf(' ')) + ' ' + randomString10.split(' ')[0]
    } else {
        return '';
    }
}

// may have to get rid of the white spaces => play with .trim() don't forget
console.log(swapFirstLastWord('Hello World'));
console.log(swapFirstLastWord('I like JavaScript'));
console.log(swapFirstLastWord('foo bar foo bar'));
console.log(swapFirstLastWord(''));
console.log(swapFirstLastWord('   '));
console.log(swapFirstLastWord('Hello'));
console.log(swapFirstLastWord('Hello   '));