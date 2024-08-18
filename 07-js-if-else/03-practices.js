/*
English exam
Passing score is 60 or above

We will write a program to check if we pass the exam or failed.

60 or above -> PASS
else -> FAIL
*/

let exam_score = '87';

if (typeof exam_score === 'number') { // OR if (Number(exam_score)) -> will check for NaN
    if (exam_score < 0 || exam_score > 100) {
        throw Error('This is not a valid exam score!');
    } else {
        if (exam_score >= 60) {
            console.log('PASS');
        } else {
            console.log('FAIL');
        }
    }
} else {
    throw Error('The input provided is not a number!');
}

// if you execute a single line of code within if or else blocks, then you may omit the curly braces.
// BUT ONLY if one line

if (exam_score >60) console.log('PASS');
else console.log('FAIL');



if (true) console.log('Hello');
else {
    console.log('A')
    console.log('B')
}


/*
Retirement age is 65

We will write a program to check if we can be retired or not.

age is greater than or equal 65 -> YOU CAN GET RETIRED
else -> YOU CANNOT GET RETIRED!!!
*/

let age = 25;
let age1 = 65;
let age2 = 66;

if (age2 >= 65) {
    console.log('YOU CAN GET RETIRED');
} else {
    console.log('YOU CANNOT GET RETIRED!!!');
}

// Ternary operator: used for short if-else statements
age >= 65 ? console.log('YOU CAN GET RETIRED') : console.log('YOU CANNOT GET RETIRED!!!');

// condition ? expression_true : expression_false;



let fname = 'Alex';
let first = true;

if (first == true) {
    console.log(fname[0]);
} else {
    console.log(fname.at(-1));
}

first ? console.log(fname[0]) : console.log(fname.at(-1));



