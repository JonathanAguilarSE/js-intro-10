console.log('\n---------------TASK01---------------\n');
let str1 = '5', str2 = '2';

console.log(`
let str1 = '5', str2 = '2';

Expected Results:
The sum of ${str1} and ${str2} is = ${Number(str1) + Number(str2)}
The product of ${str1} and ${str2} is = ${Number(str1) * Number(str2)}
The division of ${str1} and ${str2} is = ${Number(str1) / Number(str2)}
The subtraction of ${str1} and ${str2} is = ${Number(str1) - Number(str2)}
The remainder of ${str1} and ${str2} is = ${Number(str1) % Number(str2)}
The exponentiation of ${str1} and ${str2} is = ${Number(str1) ** Number(str2)}
`)


console.log('\n---------------TASK02---------------\n');
let s1 = '200', s2 = '-50';

console.log(`
let s1 = '200', s2 = '-50';

Expected Results:
The greatest value is = ${Number(Math.max(s1, s2))}
The smallest value is = ${Number(Math.min(s1, s2))}
The average is = ${(Number(s1) + Number(s2)) / 2}
The absolute difference is = ${Number(Math.abs(s1 - s2))}
`)


console.log('\n---------------TASK03---------------\n');
let ranNum1 = Math.floor(Math.random() * 50) + 1;
let ranNum2 = Math.floor(Math.random() * 50) + 1;

console.log(`
The 2 random numbers are: ${ranNum1} & ${ranNum2}

Expected Output:
The absolute difference between numbers is = ${Math.abs(ranNum1 - ranNum2)}
`)


console.log('\n---------------TASK04---------------\n');
let r1 = Math.floor(Math.random() * 50 ) + 1;
let r2 = Math.floor(Math.random() * 50 ) + 1;
let r3 = Math.floor(Math.random() * 50 ) + 1;
let r4 = Math.floor(Math.random() * 50 ) + 1;
let r5 = Math.floor(Math.random() * 50 ) + 1;

console.log(`
The 5 random numbers are: ${r1}, ${r2}, ${r3}, ${r4} & ${r5}

Expected Output:
The max value = ${Math.max(r1, r2, r3, r4, r5)}
The min value = ${Math.min(r1, r2, r3, r4, r5)}
`)

console.log('\n---------------TASK05---------------\n');
let ran1 = Math.floor(Math.random() * 51 ) + 50;
let ran2 = Math.floor(Math.random() * 51 ) + 50;
let ran3 = Math.floor(Math.random() * 51 ) + 50;

console.log(`
The 3 random numbers are: ${ran1}, ${ran2} & ${ran3}

Expected Output:
The number 1 = ${ran1}
The number 2 = ${ran2}
The number 2 = ${ran3}
The sum of numbers is = ${ran1 + ran2 + ran3}
`)


console.log('\n---------------TASK06---------------\n');
let num1 = Math.floor(Math.random() * 100) + 1;
let num2 = Math.floor(Math.random() * 100) + 1;
let num3 = Math.floor(Math.random() * 100) + 1;

// console.log(num1);
// console.log(num2);
// console.log(num3);

if (num1 > 25 && num2 > 25 && num3 > 25){
    console.log(`
The 3 generated numbers are: ${num1}, ${num2} & ${num3}.
    `)
    console.log('True, all numbers are greater than 25');
    } else {
        console.log(`
The 3 generated numbers are: ${num1}, ${num2} & ${num3}.
        `)
        console.log('False, not all numbers are greater than 25')
}


console.log('\n---------------TASK07---------------\n');
let name = 'David';

console.log(`
let name = 'David';

Expected Output:
The length of the name is = ${name.length}
The first character in the name is = ${name[0]}
The last character in the name is = ${name.slice(-1)}
The first 3 characters in the name are = ${name.slice(0, 3)}
The last 3 characters in the name are = ${name.slice(-3)}
`)