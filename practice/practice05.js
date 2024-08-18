const { getRandomNumber } = require('../utils/MathHelper.js');



console.log('\n---------------TASK01---------------\n');
let t1Num = getRandomNumber(1, 100);

console.log(t1Num);

if(t1Num <= 50) {
    console.log(`${t1Num} is in 1st half`);
    if(t1Num <= 25) console.log(`${t1Num} is in the 1st quarter`);
        else console.log(`${t1Num} is in the 2nd quarter`);
} else {
    console.log(`${t1Num} is in the 2nd half`);
    if(t1Num <= 75) console.log(`${t1Num} is in the 3rd quarter`);
        else console.log(`${t1Num} is in the 4th quarter`);
}



console.log('\n---------------TASK02---------------\n');
let t2Num1 = getRandomNumber(1, 100);
let t2Num2 = getRandomNumber(1, 100);
let t2Num3 = getRandomNumber(1, 100);

console.log(t2Num1, t2Num2, t2Num3);

if((t2Num1 % 2 === 0) && (t2Num2 % 2 === 0) && (t2Num3 % 2 === 0)) console.log(true);
else console.log(false);



console.log('\n---------------TASK03---------------\n');
let char = '$';

let asciiChar = char.charCodeAt(0);

if(asciiChar === 32) console.log(`${char} is a whitespace`);
    else if(asciiChar >= 48 && asciiChar <=57) console.log(`${char} is a digit`);
    else if((asciiChar >= 65 && asciiChar <= 90) || (asciiChar >= 97 && asciiChar <= 122)) console.log(`${char} is a letter`)
else console.log(`${char} is a special character`);



console.log('\n---------------TASK04---------------\n');
function hasBlue(str) {
    return str.toLowerCase().includes('blue');
}



console.log('\n---------------TASK05---------------\n');
function startT(str) {
    return str.toLowerCase().startsWith('t');
}

