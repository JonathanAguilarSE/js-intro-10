console.log('\n---Swap First & Last Characters---');
function replaceFirstLast(str){
    return str.trim().length < 2 ? '' : str.trim().at(-1) + str.trim().slice(1, str.length -1) + str.trim()[0]
}

console.log(replaceFirstLast(''));
console.log(replaceFirstLast('Hello'));
console.log(replaceFirstLast('Tech Global'));
console.log(replaceFirstLast('A'));
console.log(replaceFirstLast('     A     '));


console.log('\n---Swap First & Last Word---');
function swapFirstLastWord(str){
    // return str.trim().split(' ').length < 2 ? '' : str.trim().split(' ').slice(-1) + ' ' + str.trim().split(' ').slice(1, -1).join(' ') + ' ' + str.trim().split(' ')[0]
    return str.trim().split(' ').length < 2 ? '' : str.trim().split(' ').slice(-1) + str.slice(str.indexOf(' '), str.lastIndexOf(' ')) + ' ' + str.trim().split(' ')[0]
}

console.log(swapFirstLastWord('Hello World'));
console.log(swapFirstLastWord('I like JavaScript'));
console.log(swapFirstLastWord('foo bar foo bar'));
console.log(swapFirstLastWord(''));
console.log(swapFirstLastWord('   '));
console.log(swapFirstLastWord('Hello'));


console.log('\n---Factorial---');
function factorial(n){
    if(n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(0));
console.log(factorial(1));


console.log('\n---Array Factorial---');
function arrFactorial(arr){
    const factorial = num => num <= 1 ? 1 : num * factorial(num - 1);
    return arr.map(factorial);
}
// function arrFactorial(arr){
//     return arr.map(num => {
//         let product = 1;
//         for(let i = num; i >= 1; i--){
//             product *= i
//         }
//         return product;
//     })
// }

console.log(arrFactorial([1, 2, 3, 4]));
console.log(arrFactorial([0, 5]));
console.log(arrFactorial([5, 0, 6]));
console.log(arrFactorial([]));


console.log('\n---Remove Extra Spaces---');
function removeExtraSpaces(str){
    return str.split(' ').filter(word => word).join(' ');
}

console.log(removeExtraSpaces('Hello'));
console.log(removeExtraSpaces('        Hello     World   '));
console.log(removeExtraSpaces('      JaveScript is      fun'));
console.log(removeExtraSpaces(''));


console.log('\n---First Duplicate Element---');
function firstDuplicate(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr.includes(arr[i], i + 1)) return arr[i];
    }
    return -1;
}

console.log(firstDuplicate([3, 7, 10, 0 , 3, 10]));
console.log(firstDuplicate([5, 7, 7, 0, 5, 10]));
console.log(firstDuplicate([5, '5', 3, 7, 4]));
console.log(firstDuplicate([123, 'abc', '123', 3, 'abc']));
console.log(firstDuplicate([1, 2, 3]));
console.log(firstDuplicate(['foo', 'abc', '123', 'bar']));



console.log('\n---Find All Duplicate Elements---');
function getDuplicates(arr){
    let dup = [];
    for(let i = 0; i < arr.length; i++){
        if(arr.includes(arr[i], i + 1) && !dup.includes(arr[i])) dup.push(arr[i]);
    }
    return dup;
}

console.log(getDuplicates([0, -4, -7, 0, 5, 10, 45, -7, 0]));
console.log(getDuplicates([1, 2, 5, 0, 7]));
console.log(getDuplicates(['A', 'foo', '12', 12, 'bar', 'a', 'a', 'foo']));
console.log(getDuplicates(['foo', '12', 12, 'bar', 'a']));


console.log('\n---Reverse String Words---');
function reverseStringWords(str){
    return str.trim().split('').toReversed().join('');
}

console.log(reverseStringWords('Hello World'));
console.log(reverseStringWords('I like JavaScript'));
console.log(reverseStringWords('Hello'));
console.log(reverseStringWords(''));
console.log(reverseStringWords('  '));


console.log('\n---Add Two Arrays---');
function add(arr1, arr2){
    if(arr2.length > arr1.length) [arr1, arr2] = [arr2, arr1];
    return arr1.map((value, i) => value + (arr2[i] || 0));
}

console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2]));
console.log(add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]));
console.log(add([-5, 6, -3, 11], [5, -6, 3, -11]));


console.log("\n-----Fizz Buzz-----\n");
function fizzBuzz2(num){
    const newArr = [];
    for (let i = 1; i <= num; i++){
        if (i % 3 === 0 && i % 5 === 0) newArr.push("FizzBuzz");
        else if (i % 3 === 0) newArr.push("Fizz");
        else if (i % 5 === 0) newArr.push("Buzz");
        else newArr.push(i);
    }
    return newArr;
}

console.log(fizzBuzz2(3));
console.log(fizzBuzz2(5));
console.log(fizzBuzz2(10));
console.log(fizzBuzz2(15));
console.log(fizzBuzz2(2));


console.log('\n---Palindrome---');
function isPalindrome(str){
    return str.trim().toLowerCase() === str.trim().toLowerCase().split('').toReversed().join('');
}

console.log(isPalindrome('Hello'));
console.log(isPalindrome('civic'));
console.log(isPalindrome('abba'));
console.log(isPalindrome('ab a'));
console.log(isPalindrome('123454321'));
console.log(isPalindrome('A'));
console.log(isPalindrome(''));


console.log('\n---Remove Duplicates---');
function removeDuplicates(arr){
    return arr.filter((element, index) => arr.indexOf(element) === index);
}

console.log(removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60]));
console.log(removeDuplicates([1, 2, 5, 2, 3]));
console.log(removeDuplicates([0, -1, -2, -2, -1]));
console.log(removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"]));
console.log(removeDuplicates(["1", "2", "3", "2", "3"]));


console.log('\n---Prime Number---');
function isPrime(num){
    if(num <= 1) return false;
    if(num === 2) return true;
    if(num % 2  === 0) return false;
    
    for(let i = 3; i < Math.sqrt(num); i +=2){
        if(num % i === 0) return false;
    }
    return true;
}

console.log(isPrime(5));
console.log(isPrime(2));
console.log(isPrime(29));
console.log(isPrime(-5));
console.log(isPrime(0));
console.log(isPrime(1));
console.log(isPrime(3));


console.log("\n-----Find Biggest Number-----\n");
function findBiggestNumber(str){
    const numbers = str.split('').map(char => !isNaN(char) && char !== ' ' ? char : ' ').join('').split(' ').filter(num => num.trim() !== '').map(element => Number(element));

    return numbers.length > 0 ? Math.max(...numbers) : 0;
}

console.log(findBiggestNumber("abc$")); // 0
console.log(findBiggestNumber("a1b4c  6#$")); // 6
console.log(findBiggestNumber("ab110c045d$")); // 110
console.log(findBiggestNumber("525")); // 525
console.log(findBiggestNumber("3 for 10 dollars$")); // 10


console.log("\n-----Find Sum Numbers-----\n");
function findSumNumbers(str){
    return str.split('').map(char => !isNaN(char) && char !== ' ' ? char : ' ').join('').split(' ').filter(num => num).reduce((sum, num) => sum += Number(num), 0);
}

console.log(findSumNumbers("abc$")); // 0
console.log(findSumNumbers("a1b4c  6#$")); // 11
console.log(findSumNumbers("ab110c045d$")); // 155
console.log(findSumNumbers("525")); // 525
console.log(findSumNumbers("3 for 10 dollars$")); // 13


console.log("\n-----Is Power of 3-----\n");
function isPowerOf3(num){
    if (num < 1) return false;

    while (num % 3 === 0){
        num /= 3;
    }
    return num === 1;
}

console.log(isPowerOf3(1));
console.log(isPowerOf3(2));
console.log(isPowerOf3(3));
console.log(isPowerOf3(27));
console.log(isPowerOf3(100));
console.log(isPowerOf3(81));
console.log(isPowerOf3(9));
console.log(isPowerOf3(12));

console.log("\n-----Fibonacci Series 1-----\n");
function fibonacciSeries1(n){
    if (n === 1) return [0];
    let arr = [0, 1];

    for (let i = 2; i < n; i++){
        arr.push(arr[i - 1] + arr[i - 2]);

    }
    return arr;
}

console.log(fibonacciSeries1(3)); // [0, 1, 1]
console.log(fibonacciSeries1(5)); // [ 0, 1, 1, 2, 3 ]
console.log(fibonacciSeries1(7)); // [0, 1, 1, 2, 3, 5, 8]
console.log(fibonacciSeries1(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(fibonacciSeries1(1)); // [0]
console.log(fibonacciSeries1(2));  // [0, 1]


console.log("\n-----Fibonacci Series 2-----\n");
function fibonacciSeries2(n){
    if (n === 1) return 0;
    let arr = [0, 1];

    for (let i = 2; i < n; i++){
        arr.push(arr[i - 1] + arr[i - 2])
    }

    return arr[arr.length - 1];
}

console.log(fibonacciSeries2(2)); // 1
console.log(fibonacciSeries2(4)); // 2
console.log(fibonacciSeries2(8)); // 13
console.log(fibonacciSeries2(9)); // 21
console.log(fibonacciSeries2(1)); // 0


console.log("\n-----Find Uniques-----\n");
function findUniques(arr1, arr2){
    if (arr1.length < 1 && arr2.length < 1) return [];
    const allValues = new Set(arr1.concat(arr2));
    // console.log(allValues);

    const duplicates = new Set();
    // console.log(duplicates);

    for (const num of arr1){
        if (arr2.includes(num)){
            duplicates.add(num);
        }
    }
    const uniqueValues = [...allValues].filter(num => !duplicates.has(num));

    return uniqueValues;
}

console.log(findUniques([], []));
console.log(findUniques([], [1, 2, 3, 2]));
console.log(findUniques([1, 2, 3, 4], [3, 4, 5, 5]));
console.log(findUniques([8, 9], [9, 8, 9]));
console.log(findUniques([-1, -2], [1, 2]));


console.log('\n---------------Reverse Number---------------\n');
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


console.log('\n---------------Is Armstrong---------------\n');
function isArmstrong(num){
    const digits = String(num).split('')
    return num === digits.reduce((sum, strNumber) => {
        return sum += Math.pow(Number(strNumber), digits.length);
    }, 0);
}
console.log(isArmstrong(153)) // true
console.log(isArmstrong(123)) // false
console.log(isArmstrong(1634)) // true
console.log(isArmstrong(1111)) // false


console.log('\n---------------Is Anagram---------------\n');
function isAnagram(str1, str2) {
    if (str1.trim().toLowerCase() === str2.trim().toLowerCase()) return false;

    let modStr1 = str1.toLowerCase().replaceAll(' ', '').split('').sort().join('');
    let modStr2 = str2.toLowerCase().replaceAll(' ', '').split('').sort().join('');

    return modStr1 === modStr2
}

console.log(isAnagram('Apple', 'Peach')); // false
console.log(isAnagram('listen', 'silent')); // true
console.log(isAnagram('astronomer', 'moon starer')); // true
console.log(isAnagram('CINEMA', 'iceman')); // true
console.log(isAnagram('123', '1234')); // false
console.log(isAnagram('abc', 'abc')); // false


console.log('\n---------------Count Palindrome---------------\n');
const countPalindrome = (str) => !str ? 0 : str.toLowerCase().split(' ').filter(word => word === word.split('').reverse().join('')).length;

console.log(countPalindrome("mom and Dad")); // 2
console.log(countPalindrome("See you at noon")); // 1
console.log(countPalindrome("Kayak races attracts racecar drivers")); // 2
console.log(countPalindrome("")); // 0
console.log(countPalindrome("No palindrome here")); // 0


console.log('\n---------------Can Form String---------------\n');
function canFormString(str1, str2){
    let arr1 = str1.toLowerCase().split('').filter(char => char !== ' ')
    let arr2 = str2.toLowerCase().split('').filter(char => char !== ' ')
    
    for (let i = 0; i < arr2.length; i++){
        if (arr1.includes(arr2[i])) arr1.splice(arr1.indexOf(arr2[i]), 1);
        else return false;
    }
    return true;
    
    // let word1 = str1.toLowerCase().split('');
    
    // return str2.toLowerCase().split('').filter(char => char !== ' ').every(char => {
    //     let index = word1.indexOf(char);
    //     if (index !== -1) {
    //         word1.splice(index, 1);
    //         return true;
    //     }
    //     return false;
    // })
}

console.log(canFormString('Hello', 'Hi')) // false
console.log(canFormString('programming', 'gaming')) // true
console.log(canFormString('halogen', 'hello')) // false
console.log(canFormString('CONVERSATION', 'voices rant on')) // true
console.log(canFormString('12', '123')) // false


console.log('\n---------------Count Occurrence---------------\n');
function countOccurrence(str1, str2){
    let arrOfOccurrences = [];

    for (let char of str2){
        arrOfOccurrences.push(str1.split('').filter(c => c.toLowerCase() === char.toLowerCase()).length);
    }
    return arrOfOccurrences.sort()[0];
}

console.log(countOccurrence('Javascript', 'Java')) // 1
console.log(countOccurrence('Hello', 'World')) // 0
console.log(countOccurrence('Can I can a can', 'anc')) // 3
console.log(countOccurrence('Hello', 'l')) // 2
console.log(countOccurrence('IT conversations', 'IT')) // 2