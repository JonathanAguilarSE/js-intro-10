console.log('\n---------------TASK01---------------\n');
const makeNegative = (num) => num <= 0 ? num : num * -1;

console.log(makeNegative(10)); // -10
console.log(makeNegative(-7)); // -7
console.log(makeNegative(0)); // 0
console.log(makeNegative(0.45)); // -0.45


console.log('\n---------------TASK02---------------\n');
function isSumEvenOrOdd(num1, num2, num3){
    const sumOfNums = [num1, num2, num3].reduce((sum, num) => {
        sum += num
        return sum
    }, 0);
    if (sumOfNums % 2 === 0) return "even";
    return "odd";
}

console.log(isSumEvenOrOdd(0, 1, 4)); // odd
console.log(isSumEvenOrOdd(0, -1, -5)); // even
console.log(isSumEvenOrOdd(0, 0, 0)); // even
console.log(isSumEvenOrOdd(7, 1, 9)); // odd
console.log(isSumEvenOrOdd(1, 1, 1)); // odd


console.log('\n---------------TASK03---------------\n');
const decimal2 = (arr) => arr.map(num => Number.isInteger(num) ? num : num.toFixed(2));

console.log(decimal2([94.356, 8.9752])); // [ 94.36, 8.98 ]
console.log(decimal2([76.62, 128.4, 84] )); // [ 76.62, 128.4, 84 ]
console.log(decimal2([20987, 3.53245, 12.345, 32.9] )); // [ 20987, 3.53, 12.35, 32.90 ]
console.log(decimal2([])); // []
console.log(decimal2([4.35623, 8.9742])); // [ 4.36, 8.97 ]


console.log('\n---------------TASK04---------------\n');
const myPow = (x, n) => (n === 0) ? 1 : x ** n;

console.log(myPow(3, 3)); // 27
console.log(myPow(10, 1)); // 10
console.log(myPow(100, 0)); // 1
console.log(myPow(1, 1)); // 1
console.log(myPow(4, 2)); // 16
console.log(myPow(0, 0)); // 1
console.log(myPow(5, 3)); // 125


console.log('\n---------------TASK05---------------\n');
function findLongestWord(str){
    // if (!str.trim()) return "";

    return str.trim().split(" ").filter(e => e !== "").reduce((longestWord, word) => {
        if(word.length > longestWord.length) longestWord = word;
        
        return longestWord;
    }, "");

    // if (!str.trim()) return "";
    // let arrOfWords = str.trim().split(" ");
    // let longestWord = "";
    // for (let word of arrOfWords){
        //     if (word.length > longestWord.length) longestWord = word;
        // }
        // return longestWord;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")) // jumped
console.log(findLongestWord("This is a sample string for testing")) // testing
console.log(findLongestWord("One two ten")) // One
console.log(findLongestWord("")) //
console.log(findLongestWord("     ")) //