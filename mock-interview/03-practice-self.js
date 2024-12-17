const replaceFirstLast = (str) => (str.trim().length < 2) ? '' : str[str.length-1] + str.slice(1, -1) + str[0]

console.log(replaceFirstLast(''));
console.log(replaceFirstLast('Hello'));
console.log(replaceFirstLast('Tech Global'));
console.log(replaceFirstLast('A'));
console.log(replaceFirstLast('     A     '));

function swapFirstLastWord(str){
    if(str.trim().split(' ').length < 2) return ''

    return str.split(' ').at(-1) + str.slice(str.indexOf(' '), str.lastIndexOf(' ')) + ' ' + str.split(' ')[0]
}

console.log(swapFirstLastWord('Hello World'));
console.log(swapFirstLastWord('I like JavaScript'));
console.log(swapFirstLastWord('foo bar foo bar'));
console.log(swapFirstLastWord(''));
console.log(swapFirstLastWord('   '));
console.log(swapFirstLastWord('Hello'));

function factorial(n){
    // if(n === 0) return 1
    
    let product = 1
    
    for(let i = n; i >= 1; i--){
        product *= i
    }
    return product
}

console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(0));
console.log(factorial(1));

console.log('look here')
function arrFactorial(arr){
    return arr.map(e => {
        let product = 1
        for(let i = e; i > 0; i--){
            product *= i
        }
        return product
    })
}

console.log(arrFactorial([1, 2, 3, 4]));
console.log(arrFactorial([0, 5]));
console.log(arrFactorial([5, 0, 6]));
console.log(arrFactorial([]));



function removeExtraSpaces(str){
    return str.split(' ').filter(e => e !== '').join(' ')
}

console.log(removeExtraSpaces('Hello'));
console.log(removeExtraSpaces('        Hello     World   '));
console.log(removeExtraSpaces('      JaveScript is      fun'));
console.log(removeExtraSpaces(''));


function firstDuplicate(arr){
    for (let i = 0; i < arr.length; i++){
        if (arr.includes(arr[i], i + 1)) return arr[i]
    }
    return -1
}

console.log(firstDuplicate([3, 7, 10, 0 , 3, 10]));
console.log(firstDuplicate([5, 7, 7, 0, 5, 10]));
console.log(firstDuplicate([5, '5', 3, 7, 4]));
console.log(firstDuplicate([123, 'abc', '123', 3, 'abc']));
console.log(firstDuplicate([1, 2, 3]));
console.log(firstDuplicate(['foo', 'abc', '123', 'bar']));


function getDuplicates(arr){
    let duplicates = []
    for (let i = 0; i < arr.length; i++){
        if (arr.includes(arr[i], i + 1) && !duplicates.includes(arr[i])) duplicates.push(arr[i])
    }
    return duplicates
    // return arr.reduce((duplicates, el, i) => {
    //     if (arr.includes(arr[i], i + 1) && !duplicates.includes(arr[i])) duplicates.push(el)

    //     return duplicates
    // }, [])
}

console.log(getDuplicates([0, -4, -7, 0, 5, 10, 45, -7, 0]));
console.log(getDuplicates([1, 2, 5, 0, 7]));
console.log(getDuplicates(['A', 'foo', '12', 12, 'bar', 'a', 'a', 'foo']));
console.log(getDuplicates(['foo', '12', 12, 'bar', 'a']));


const reverseStringWords = (str) => str.trim().split(' ').map(word => word.split('').reverse().join('')).join(' ')

console.log(reverseStringWords('Hello World'));
console.log(reverseStringWords('I like JavaScript'));
console.log(reverseStringWords('Hello'));
console.log(reverseStringWords(''));
console.log(reverseStringWords('  '));


function add(arr1, arr2){
    if (arr2.length > arr1.length) [arr1, arr2] = [arr2, arr1]
    return arr1.map((num, i) => num + (arr2[i] || 0))
}

console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2]));
console.log(add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]));
console.log(add([-5, 6, -3, 11], [5, -6, 3, -11]));

function fizzBuzz(num){
    let result = []
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) result.push("FizzBuzz")
        else if (i % 3 === 0) result.push("Fizz")
        else if (i % 5 === 0) result.push("Buzz")
        else result.push(i)
    }
    return result
}

console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(10));
console.log(fizzBuzz(15));
console.log(fizzBuzz(2));

function isPalindrome(str){
    return str.trim().toLowerCase() === str.trim().toLowerCase().split('').reverse().join('')
}

console.log(isPalindrome('Hello'));
console.log(isPalindrome('Kayak'));
console.log(isPalindrome('civic'));
console.log(isPalindrome('abba'));
console.log(isPalindrome('ab a'));
console.log(isPalindrome('123454321'));
console.log(isPalindrome('A'));
console.log(isPalindrome(''));

function removeDuplicates(arr){
    let noDups = new Set(arr)

    return [...noDups]
}

console.log(removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60]));
console.log(removeDuplicates([1, 2, 5, 2, 3]));
console.log(removeDuplicates([0, -1, -2, -2, -1]));
console.log(removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"]));
console.log(removeDuplicates(["1", "2", "3", "2", "3"]));
console.log(removeDuplicates(["1", "2", "3", "1", "1"]));

function isPrime(num){
    if (num === 2) return true
    if (num <= 1 || num % 2 === 0) return false

    for (let i = 3; i < num; i++){
        if(num % i === 0) return false
    }
    return true
}

console.log(isPrime(5));
console.log(isPrime(2));
console.log(isPrime(29));
console.log(isPrime(-5));
console.log(isPrime(0));
console.log(isPrime(1));
console.log(isPrime(18));
console.log(isPrime(7));
console.log(isPrime(31));
console.log(isPrime(3));

console.log('LOOK HERE')
function findBiggestNumber(str){
    let result = str.replaceAll(/[\D]/g, ' ').split(' ').filter(e => e !== '').sort((a, b) => b - a)

    return result.length > 0 ? result[0] : 0
}

console.log(findBiggestNumber("abc$")); // 0
console.log(findBiggestNumber("a1b4c  6#$")); // 6
console.log(findBiggestNumber("ab110c045d$")); // 110
console.log(findBiggestNumber("525")); // 525
console.log(findBiggestNumber("3 for 10 dollars$")); // 10


function findSumNumbers(str){
    return str.replaceAll(/[\D]/g, ' ').split(' ').filter(e => e !== '').reduce((sum, strNum) => sum += Number(strNum), 0)
}

console.log(findSumNumbers("abc$")); // 0
console.log(findSumNumbers("a1b4c  6#$")); // 11
console.log(findSumNumbers("ab110c045d$")); // 155
console.log(findSumNumbers("525")); // 525
console.log(findSumNumbers("3 for 10 dollars$")); // 13

function isPowerOf3(num){
    if (num < 1) return false

    while (num % 3 === 0){
        num /= 3
    }
    return num === 1
}

console.log(isPowerOf3(1));
console.log(isPowerOf3(2));
console.log(isPowerOf3(3));
console.log(isPowerOf3(27));
console.log(isPowerOf3(100));
console.log(isPowerOf3(81));
console.log(isPowerOf3(9));
console.log(isPowerOf3(6));

function fibonacciSeries1(n){
    if(n === 1) return [0]
    let sequence = [0, 1]
    for (let i = 2; i < n; i++){
        sequence[i] = sequence[i - 1] + sequence[i - 2]
    }
    return sequence
}

console.log(fibonacciSeries1(3)); // [0, 1, 1]
console.log(fibonacciSeries1(5)); // [ 0, 1, 1, 2, 3 ]
console.log(fibonacciSeries1(7)); // [0, 1, 1, 2, 3, 5, 8]
console.log(fibonacciSeries1(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(fibonacciSeries1(1)); // [0]
console.log(fibonacciSeries1(2));  // [0, 1]


function fibonacciSeries2(n) {
    if(n === 1) return 0
    let sequence = [0, 1]
    for (let i = 2; i < n; i++){
        sequence[i] = sequence[i -1] + sequence[i - 2]
    }
    return sequence.at(-1)
}

console.log(fibonacciSeries2(2)); // 1
console.log(fibonacciSeries2(4)); // 2
console.log(fibonacciSeries2(8)); // 13
console.log(fibonacciSeries2(9)); // 21
console.log(fibonacciSeries2(1)); // 0


function findUniques(arr1, arr2){
    const concatArr = arr1.concat(arr2)
    const filteredArr = concatArr.filter(num => !(arr1.includes(num) && arr2.includes(num)))

    const set = new Set(filteredArr)
    return [...set]
}

console.log(findUniques([], []));
console.log(findUniques([], [1, 2, 3, 2]));
console.log(findUniques([1, 2, 3, 4], [3, 4, 5, 5]));
console.log(findUniques([8, 9], [9, 8, 9]));
console.log(findUniques([-1, -2], [1, 2]));

function reverseNumber(num){
    let reversed = 0;

    while (num > 0) {
        reversed = (reversed * 10) + (num % 10);
        num = Math.floor(num / 10);
    }

    return reversed;
}

console.log(reverseNumber(371)); // 173
console.log(reverseNumber(123)); // 321
console.log(reverseNumber(12)); // 21
console.log(reverseNumber(0)); // 0
console.log(reverseNumber(111)); // 111


const isArmstrong = (num) => num === String(num).split('').reduce((total, e) => total += Math.pow(e, String(num).length), 0)

console.log(isArmstrong(153)) // true
console.log(isArmstrong(123)) // false
console.log(isArmstrong(1634)) // true
console.log(isArmstrong(1111)) // false


const isAnagram = (str1, str2) => str1 !== str2 ? str1.toLowerCase().split('').filter(e => e !== ' ').sort().join('') ===  str2.toLowerCase().split('').filter(e => e !== ' ').sort().join('') : false

console.log(isAnagram('Apple', 'Peach')); // false
console.log(isAnagram('listen', 'silent')); // true
console.log(isAnagram('astronomer', 'moon starer')); // true
console.log(isAnagram('CINEMA', 'iceman')); // true
console.log(isAnagram('123', '1234')); // false
console.log(isAnagram('abc', 'abc')); // false


const countPalindrome = (str) => (!str) ? 0 : str.split(' ').filter(word => word.toLowerCase() === word.toLowerCase().split('').reverse().join('')).length

console.log(countPalindrome("mom and Dad")); // 2
console.log(countPalindrome("See you at noon")); // 1
console.log(countPalindrome("Kayak races attracts racecar drivers")); // 2
console.log(countPalindrome("")); // 0
console.log(countPalindrome("No palindrome here")); // 0


function canFormString(str1, str2){
    let arr1 = str1.trim().toLowerCase().split('').filter(e => e !== ' ')
    let arr2 = str2.trim().toLowerCase().split('').filter(e => e !== ' ')

    for (let i = 0 ; i < arr2.length; i++) {
        if (arr1.includes(arr2[i])) arr1.splice(arr1.indexOf(arr2[i]), 1)
            else return false
    }
    return true
}

console.log(canFormString('Hello', 'Hi')) // false
console.log(canFormString('programming', 'gaming')) // true
console.log(canFormString('halogen', 'hello')) // false
console.log(canFormString('CONVERSATION', 'voices rant on')) // true
console.log(canFormString('12', '123')) // false


function countOccurrence(str1, str2){
    let arrOfOccurrences = []

    for (let char of str2){
        arrOfOccurrences.push(str1.split('').filter(c => c.toLowerCase() === char.toLowerCase()).length)
    }
    return arrOfOccurrences.sort((a, b) => a - b)[0]
}

console.log(countOccurrence('Javascript', 'Java')) // 1
console.log(countOccurrence('Hello', 'World')) // 0
console.log(countOccurrence('Can I can a can', 'anc')) // 3
console.log(countOccurrence('Hello', 'l')) // 2
console.log(countOccurrence('IT conversations', 'IT')) // 2