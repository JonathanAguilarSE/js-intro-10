console.log('\n---------------TASK01---------------\n');
// function repeatingX(str) {
//     let splitStr = str.toLowerCase().split("");
//     // console.log(splitStr)

//     for (let i = 0; i < splitStr.length; i++) {
//         if (splitStr[i] === 'x' && (splitStr[i + 1]) === 'x') return true;
//     }

//     return false;
// }
const repeatingX = (str) => str.toLowerCase().includes('xx')

console.log(repeatingX("xTechxGlobalx")) // false
console.log(repeatingX("Hello Xx World")) // true
console.log(repeatingX("x x")) // false
console.log(repeatingX("")) // false
console.log(repeatingX("xxxxx")) // true


console.log('\n---------------TASK02---------------\n');
// const isPerfectSquare = (num) => num === Math.pow(Math.sqrt(num), 2)
const isPerfectSquare = (num) => Math.sqrt(num) % 1 === 0

console.log(isPerfectSquare(25)) // true
console.log(isPerfectSquare(24)) // false
console.log(isPerfectSquare(0)) // true
console.log(isPerfectSquare(1)) // true
console.log(isPerfectSquare(-1)) // false
console.log(isPerfectSquare(144)) // true


console.log('\n---------------TASK03---------------\n');
function convertTemperature(num, str) {
    if (str === 'Celsius') {
        return (num * (9/5)) + 32;
    } else if (str === 'Fahrenheit') {
        return (num - 32) * (5/9);
    }
}

console.log(convertTemperature(100, "Celsius")) // 212
console.log(convertTemperature(32, "Fahrenheit")) // 0
console.log(convertTemperature(0, "Celsius")) // 32
console.log(convertTemperature(212, "Fahrenheit")) // 100
console.log(convertTemperature(-40, "Celsius")) // -40
console.log(convertTemperature(-40, "Fahrenheit")) // -40


console.log('\n---------------TASK04---------------\n');
function sumOfEvenNumbers(arr) {
    return arr.reduce((sum, num) => {
        if (num % 2 === 0) sum += num

        return sum
    }, 0)
}

console.log(sumOfEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // 30
console.log(sumOfEvenNumbers([2, 4, 6, 8, 10, 12, 14, 16, 18, 20])) // 110
console.log(sumOfEvenNumbers([1, 3, 5, 7, 9, 11, 13, 15, 17, 19])) // 0
console.log(sumOfEvenNumbers([])) // 0
console.log(sumOfEvenNumbers([1, 2, 3, 4, 5])) // 6
console.log(sumOfEvenNumbers([10, 20, 30, 40, 50])) // 150


console.log('\n---------------TASK05---------------\n');
const capsOdds = (arr) => arr.map((str, i) => i % 2 !== 0 ? str.toUpperCase() : str);

console.log(capsOdds(["Hello", "World"])) // ["Hello", "WORLD"]
console.log(capsOdds(["Jan", "Feb", "Mar", "Apr"])) // ["Jan", "FEB", "Mar", "APR"]
console.log(capsOdds(["Apple", "Banana", "123", "456", "Peach", "Kiwi"])) // ["Apple", "BANANA", "123", "456", "Peach", "KIWI"]
console.log(capsOdds([])) // []
console.log(capsOdds(["John !@#$%", "^&*() Doe"])) // ["John !@#$%", "^&*() DOE"]