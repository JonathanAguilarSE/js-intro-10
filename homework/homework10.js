console.log('\n---------------TASK01---------------\n');
function calculateTotalPrice1(items){
    const prices = {
        apple: 2.00,
        orange: 3.29,
        mango: 4.99,
        pineapple: 5.25
    }

    const totalPrice = Object.keys(items).reduce((total, item) => {
        return total + (prices[item] || 0) * items[item];
    }, 0)

    return totalPrice.toFixed(2);
}

console.log(calculateTotalPrice1({apple: 3, mango: 1})); // 10.00
console.log(calculateTotalPrice1({apple: 2, pineapple: 1, orange: 3})); // 19.12
console.log(calculateTotalPrice1({apple: 0, mango: 0, orange: 0})); // 0
console.log(calculateTotalPrice1({apple: 1, pineapple: 1, orange: 0, mango: 1})); // 12.24


console.log('\n---------------TASK02---------------\n');
function calculateTotalPrice2(items){
    const prices = {
        Apple: 2.00,
        Orange: 3.29,
        Mango: 4.99,
        Pineapple: 5.25
    }

    const totalPrice = Object.keys(items).reduce((total, item) => {
        const quantity = items[item];

        if (item === 'Apple') {
            const fullPriceApple = Math.floor(quantity / 2);
            const halfPriceApple = quantity - fullPriceApple;
            return total + (fullPriceApple * prices.Apple) + (halfPriceApple * prices.Apple * 0.5);
        }
        else if (item === 'Mango') {
            const freeMango = quantity - Math.floor(quantity / 4);
            return total + (freeMango * prices.Mango);
        }
        else if (prices[item]) {
            return total + (quantity * prices[item]);
        }
        
        return total;
    }, 0)

    return totalPrice.toFixed(2);
}

console.log(calculateTotalPrice2({Apple: 3, Mango: 5})); // 23.96
console.log(calculateTotalPrice2({Apple: 4, Mango: 8, Orange: 3})); // 45.81
console.log(calculateTotalPrice2({Apple: 0, Pineapple: 0, Orange: 0})); // 0
console.log(calculateTotalPrice2({Apple: 4, Pineapple: 1, Orange: 1, Mango: 3})); // 29.51


console.log('\n---------------TASK03---------------\n');
function nthWord(str, num){
    const words = str.split(' ');

    if (num > 0 && num <= words.length) {
        return words[num - 1];
    }

    return '';
}

console.log(nthWord("I like programming languages", 2)) // like
console.log(nthWord("QA stands for Quality Assurance", 4)) // Quality
console.log(nthWord("Hello World", 3)) // ''
console.log(nthWord("Javascript", 1)) // Javascript
console.log(nthWord("", 1)) // ''


console.log('\n---------------TASK04---------------\n');
function isArmstrong(num){
    const digits = String(num).split('')
    return num === digits.reduce((sum, number) => {
        return sum += Math.pow(Number(number), digits.length);
    }, 0);
}
console.log(isArmstrong(153)) // true
console.log(isArmstrong(123)) // false
console.log(isArmstrong(1634)) // true
console.log(isArmstrong(1111)) // false


console.log('\n---------------TASK05---------------\n');
function reverseNumber(num){
    let reversed = 0;

    while (num > 0) {
        reversed = reversed * 10 + (num % 10);
        num = Math.floor(num / 10);
    }

    return reversed;
}

console.log(reverseNumber(371)); // 173
console.log(reverseNumber(123)); // 321
console.log(reverseNumber(12)); // 21
console.log(reverseNumber(0)); // 0
console.log(reverseNumber(111)); // 111


console.log('\n---------------TASK06---------------\n');
const doubleOrTriple = (arr, bool) => bool === true ? arr.map(num => num * 2) : arr.map(num => num * 3);

console.log(doubleOrTriple([1, 5, 10], true)); // [ 2, 10, 20 ]
console.log(doubleOrTriple([3, 7, 2], false)); // [ 9, 21, 6 ]
console.log(doubleOrTriple([-1, -2], true)); // [ -2, -4 ]
console.log(doubleOrTriple([0], false)); // [ 0 ]
console.log(doubleOrTriple([-1, 0, 1], true)); // [ -2, 0, 2 ]


console.log('\n---------------TASK07---------------\n');
const splitString = (str, num) => str.length < num || str.length % num !== 0 ? '' : str.slice(0, num) + ' ' + str.slice(num);


console.log(splitString('JavaScript', 5)); // JavaS cript
console.log(splitString('Java', 2)); // Ja va
console.log(splitString('Automation', 3)); // ''
console.log(splitString('Hello', 6)); // ''
console.log(splitString('12', 1)); // 1 2