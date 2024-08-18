console.log('\n---------------TASK01---------------\n');
// function tripleWord(randStr1) {
//     return randStr1 + randStr1 + randStr1;
// }

function tripleWord(randStr1) {
    return randStr1.repeat(3);
}
// utilizing string function .repeat()

console.log(tripleWord('Tech'));
console.log(tripleWord('Global'));



console.log('\n---------------TASK02---------------\n');
function has4(randStr2) {
    return randStr2.length >= 4;
}

console.log(has4('Tech'));
console.log(has4('Global'));
console.log(has4(''));
console.log(has4('12345'));
console.log(has4('abc'));



console.log('\n---------------TASK03---------------\n');
function celciusToFahrenheit(randNumb3) {
    return (randNumb3 * 9) / 5 + 32;
}

console.log(celciusToFahrenheit(20));
console.log(celciusToFahrenheit(25));
console.log(celciusToFahrenheit(0));
console.log(celciusToFahrenheit(-10));



console.log('\n---------------TASK04---------------\n');
function kgToPounds(randNumb4) {
    return randNumb4 * 11 / 5;
}

console.log(kgToPounds(1));
console.log(kgToPounds(20));
console.log(kgToPounds(75));
console.log(kgToPounds(100));
// although the formula is simply kg * 2.2, we get a float when we use 100 as an argument, of 220.00000003.
// to avoid this we multiply 2.2 until it becomes a whole number and then divide by the number of times we multiplied, which would be 5 in this case.
// this fixes the floating deicmal issue while still leaving us with 2.2 when we use 1 as an argument.


console.log('\n---------------TASK05---------------\n');
function rectangleArea(x, y) {
    return x * y;
}

function rectanglePerimeter(x, y) {
    return 2 * (x + y);
}

console.log(rectangleArea(5, 4));
console.log(rectangleArea(3, 7));
console.log(rectangleArea(6, 10));

console.log(rectanglePerimeter(5, 4));
console.log(rectanglePerimeter(3, 7));
console.log(rectanglePerimeter(6, 10));



console.log('\n---------------TASK06---------------\n');
function squareArea(x) {
    return x * x;
}

function squarePerimeter(x) {
    return 4 * x;
}

console.log(squareArea(5));
console.log(squareArea(3));
console.log(squareArea(6));

console.log(squarePerimeter(5));
console.log(squarePerimeter(3));
console.log(squarePerimeter(6));
