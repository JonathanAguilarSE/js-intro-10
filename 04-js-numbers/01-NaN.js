console.log(NaN);

console.log(3 * '5'); // 15
console.log(3 + '5'); // '35'
console.log(3 - '2'); // 1

console.log(5 * 'abc'); // NaN
console.log(NaN + 'Hello'); // 'NaNHello'

// isNan() is a function-metho dused to check if an expression evaluates to number or not
console.log(isNaN(5)); // false
console.log(isNaN(10 * true)); // false
console.log(isNaN(10 * 'Hello')); // true

console.log(isNaN('John')); // true
console.log(isNaN(true)); // false

console.log(isNaN('false')); // true

console.log(isNaN(NaN)); // true

console.log(typeof(NaN)); // number
console.log(typeof isNaN(NaN)); // booelean