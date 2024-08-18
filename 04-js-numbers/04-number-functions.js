let num = 10;

console.log(num); // 10
console.log(num.toString()); // '10'

console.log(typeof num); // number
console.log(typeof num.toString()); // string

console.log(num + 5); // 15
console.log(num.toString() + 5); // 105


// .toFixed() vs .toPrecision()
console.log((1.1452).toPrecision(3)); // 1.15
console.log((1.1452).toPrecision(4)); // 1.145
console.log((1.1452).toPrecision(2)); // 1.1

console.log((10.957).toFixed(2)); // 10.96
console.log((10.957).toPrecision(2)); // 11



// converting other values (data types) to numbers
let n1 = '5', n2 = '3';

console.log(n1 + n2); // 53
console.log(Number(n1) + Number(n2)); // 8
console.log(parseInt(n1) + parseInt(n2)); // 8
console.log(parseFLoat(n1) + parseFloat(n2)); // 8

// cannot convert string such as n2 = 'abc' as that will result in NaN

let num1 = '5.1', num2 = '5.2';

console.log(Number(num1) + Number(num2));
console.log(parseInt(num1) + parseInt(num2));
console.log(parseFloat(num1) + parseFloat(num2));

// isFinite()
console.log(isFinite(5)); // true
console.log(isFinite(Infinity)); // false
console.log(isFinite(-Infinity)); // false


// isInteger(), isSafeInteger()
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

console.log(Number.isInteger(5)); // true
console.log(Number.isInteger(5.1)); // false
console.log(Number.isInteger(5238476394857239459872348953978597)); // true
console.log(Number.isSafeInteger(5238476394857239459872348953978597)); // false
console.log(Number.isSafeInteger(523847436345)); // true; less than the MAX_SAFE_INTEGER