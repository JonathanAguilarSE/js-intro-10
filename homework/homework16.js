console.log('\n---------------TASK01---------------\n');
const toInitials = (fullName) => `${fullName.split(" ")[0][0].toUpperCase()}. ${fullName.split(" ")[1][0].toUpperCase()}.`

console.log(toInitials("Joe Doe")); // J. D.
console.log(toInitials("Alex Reyes")); // A. R.
console.log(toInitials("Tom Cruise")); // T. C.
console.log(toInitials("Bruce Willis")); // B. W.
console.log(toInitials("Ja Le")); // J. L.


console.log('\n---------------TASK02---------------\n');
const hasNumbers = (str) => str.trim().split("").some(char => /[0-9]/.test(char))

console.log(hasNumbers("")); // false
console.log(hasNumbers("John is 34 years old")); // true
console.log(hasNumbers("Hello 3")); // true
console.log(hasNumbers("125$")); // true
console.log(hasNumbers("  a  ")); // false
console.log(hasNumbers("     ")); // false
console.log(hasNumbers("!@#$%^&*()_+")); // false


console.log('\n---------------TASK03---------------\n');
const elementLength = (arr) => arr.map(e => e.length)

console.log(elementLength([ "Hello", "World" ])); // [ 5, 5 ]
console.log(elementLength([ "Apple", "Banana", "Orange", "Pear" ,])); // [ 5, 6, 6, 4 ]
console.log(elementLength([ "BMW", "Mercedes", "Audi" ])); // [ 3, 8, 4 ]
console.log(elementLength([])); // []
console.log(elementLength([ "Trampoline", "", "Tennis", "Basketball" ])); // [ 10, 0, 6, 10 ]


console.log('\n---------------TASK04---------------\n');
function isArraySumEvenOrOdd(arr) {
    // console.log(arr.length)
    // if (arr.length === 0) return "even";
    
    const result = arr.reduce((sum, num) => {
        sum += num;
        return sum
    }, 0)
    return arr.length === 0 || result % 2 === 0 ? "even" : "odd"
}

console.log(isArraySumEvenOrOdd([])); // even
console.log(isArraySumEvenOrOdd([ 0, -1, -5 ])); // even
console.log(isArraySumEvenOrOdd([ 7, 1, 8, 1 ])); // odd
console.log(isArraySumEvenOrOdd([ 0, 0 ])); // even
console.log(isArraySumEvenOrOdd([ 1, 1, 1, 1, 1 ])); // odd


console.log('\n---------------TASK05---------------\n');
const reverse = (str) => str.split("").reverse().join("")

console.log(reverse("Hello World")); // dlroW olleH
console.log(reverse("TechGlobal")); // labolGhceT
console.log(reverse("Basketball is fun")); // nuf si llabteksaB
console.log(reverse("")); // 
console.log(reverse("Apples 456")); // 654 selppA


console.log('\n---------------TASK06---------------\n');
const reverseWords = (str) => str.split(" ").map(e => e.split("").reverse().join("")).join(" ")

console.log(reverseWords("Hello World")); // olleH dlroW
console.log(reverseWords("TechGlobal")); // labolGhceT
console.log(reverseWords("Basketball is fun")); // llabteksaB si nuf
console.log(reverseWords("")); // 
console.log(reverseWords("Apples 456")); // selppA 654