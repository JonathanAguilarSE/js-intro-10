console.log(!true || 2 <= 2 || false);
console.log(!(3>1&&!true) && 5 != 5);

console.log('Hello' && true);
console.log(0 && true); // false
console.log(5 && true); // true; any number aside from 0 is true. 0 is false.

console.log(false || '');