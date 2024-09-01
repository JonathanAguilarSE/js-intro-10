const numbers = [10, 5, 100, 77, 50, 65, 0];
// Find all the numbers that are 50 or more -> [100, 77, 50, 65]

const over50 = numbers.filter((number) => number >= 50);
console.log(over50);


const fruits = [ 'Orange', 'Apple', 'Red apple', 'Pineapple', 'Kiwi'];
// Find all the fruits that has apple -> [ 'Apple', 'Red apple', 'Pineapple' ]
// Count how many elements has a      -> 4
// Count how many elements has i      -> 2

const includesApple = fruits.filter((fruit) => fruit.toLowerCase().includes('apple'));
console.log(includesApple);

const containsA = fruits.filter((fruit) => fruit.toLowerCase().includes('a'));
console.log(containsA.length);

const containsI = fruits.filter((fruit) => (fruit.toLowerCase().includes('i'))).length;
console.log(containsI);
