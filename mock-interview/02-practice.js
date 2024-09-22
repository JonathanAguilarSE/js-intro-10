console.log('---Double or Triple Word---');
function duobleOrTripleWord(str){
    if(str === ' ') return str;
    return str.length % 2 === 0 ? str.repeat(3) : str.repeat(2);
}

console.log(duobleOrTripleWord('Techy'))
console.log(duobleOrTripleWord('Tech'))
console.log(duobleOrTripleWord(''))
console.log(duobleOrTripleWord(' '))


console.log('\n---First Last Word---');
function firstLastWord(str){
    if(str === '') return '';
    return str.trim().split(' ').length <= 1 ? str + str : str.trim().split(' ')[0] + str.trim().split(' ').at(-1);
}

console.log(firstLastWord(''));
console.log(firstLastWord('    '));
console.log(firstLastWord('I like JavaScript'));
console.log(firstLastWord('Hello'));


console.log('\n---Has Vowel---');
function hasVowel(str){
    return str.trim().toLowerCase().split('').some(char => 'aeiou'.includes(char));
}

console.log(hasVowel('Hello'));
console.log(hasVowel('orange'));
console.log(hasVowel('12345'));
console.log(hasVowel('aei'));
console.log(hasVowel(''));
console.log(hasVowel('   '));


console.log('\n---Start Vowel---');
function startVowel(str){
    return 'aeiou'.includes(str.trim().toLowerCase()[0]);
}


console.log(startVowel('Hello'));
console.log(startVowel('orange'));
console.log(startVowel('12345'));
console.log(startVowel('aei'));
console.log(startVowel(''));
console.log(startVowel('   '));


console.log('\n---Average of Edges---');
function averageOfEdges(num1, num2, num3){
    let min = Math.min(num1, num2, num3);
    let max = Math.max(num1, num2, num3);
    
    return (min + max) / 2;
}

console.log(averageOfEdges(0, 0, 0));
console.log(averageOfEdges(0, 0, 6));
console.log(averageOfEdges(-2, -2, 10));


console.log('\n---First & Last Letter---');
function replaceFirstLast(str){
    return str.trim().length < 2 ? '' : str.trim().at(-1) + str.trim().slice(1, str.length -1) + str.trim()[0]
}

console.log(replaceFirstLast(''));
console.log(replaceFirstLast('Hello'));
console.log(replaceFirstLast('Tech Global'));
console.log(replaceFirstLast('A'));
console.log(replaceFirstLast('     A     '));


console.log('\n---First & Last 4 Chars---');
function swap4(str){
    return str.trim().length < 8 ? '' : str.trim().slice(-4) + str.trim().slice(4, -4) + str.trim().slice(0, 4)
}

console.log(swap4('abc'));
console.log(swap4('JavaScript'));
console.log(swap4('TechGlobal'));
console.log(swap4(''));


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


console.log('\n---Count Positive Numbers---');
function countPos(arr){
    return arr.filter(number => number > 0).length
}

console.log(countPos([-45, 0, 0, 34, 5, 67]));
console.log(countPos([-23, -4, 0, 2, 5, 90, 123]));
console.log(countPos([0, -1, -2, -3]));


console.log('\n---Even Numbers---');
function getEvens(num1, num2){
    let evens = [];
    let min = Math.min(num1, num2);
    let max = Math.max(num1, num2);
    // if(min % 2 !== 0) min += 1; wil start the min at the first even number if the min is an odd, then you can increase += 2 in the for loop
    for(let i = min; i <= max; i++){
        if(i % 2 === 0) evens.push(i)
    }
    return evens;
}

console.log(getEvens(2, 7));
console.log(getEvens(17, 5));
console.log(getEvens(4, 4));
console.log(getEvens(3, 3));


console.log('\n---Divisible by 5---');
function getMultipleOf5(num1, num2){
    let multiplesOf5 = [];
    let min = Math.min(num1, num2);
    let max = Math.max(num1, num2);
    for(let i = min; i <= max; i++){
        if(i % 5 === 0) multiplesOf5.push(i);
    }
    if(num2 > num1) return multiplesOf5;
    return multiplesOf5.sort((a, b) => b - a);
}

console.log(getMultipleOf5(3, 17));
console.log(getMultipleOf5(23, 5));
console.log(getMultipleOf5(5, 5));
console.log(getMultipleOf5(2, 4));


console.log('\n---Count Negative Numbers---');
function countNeg(arr){
    return arr.filter(number => number < 0).length;
}

console.log(countNeg([-45, 0, 0, 34, 5, 67]));
console.log(countNeg([-23, -4, 0, 2, 5, 90, 123]));
console.log(countNeg([0, -1, -2, -3]));


console.log('\n---Count Negative Numbers---');
function countA(str){
    return str.toLowerCase().split('').filter(char => char === 'a').length;
}

console.log(countA('TechGlobal is a QA bootcamp'));
console.log(countA('QA stands for Quality Assurance'));
console.log(countA('Cypress'));


console.log('\n---Count Words---');
function countWords(str){
    return str.trim().split(' ').length;
}

console.log(countWords('     JavaScript is fun     '));
console.log(countWords('Cypress is a UI aotumaiton tool'));
console.log(countWords('1 2 3 4'));


console.log('\n---Factorial---');
function factorial(n){
    if(n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(0));
console.log(factorial(1));


console.log('\n---3 Words or Less---');
function count3OrLess(str){
    return str.trim().split(' ').filter(word => word.length <= 3 ? word : '').length;
}

console.log(count3OrLess('Hello'));
console.log(count3OrLess('Hi John'));
console.log(count3OrLess('JavaScript is fun'));
console.log(count3OrLess('My name is John Doe'));
console.log(count3OrLess(''));


console.log('\n---Remove Extra Spaces---');
function removeExtraSpaces(str){
    return str.split(' ').filter(word => word).join(' ');
}

console.log(removeExtraSpaces('Hello'));
console.log(removeExtraSpaces('        Hello     World   '));
console.log(removeExtraSpaces('      JaveScript is      fun'));
console.log(removeExtraSpaces(''));


console.log('\n---Middle Integer---');
function middleInt(num1, num2, num3){
    return [num1, num2, num3].sort((a, b) => a - b)[1];
}

console.log(middleInt(1, 2, 2));
console.log(middleInt(5, 5, 8));
console.log(middleInt(5, 3, 5));
console.log(middleInt(1, 1, 1));
console.log(middleInt(-1, 25, 10));


console.log('\n---First Duplicate Element---');
function firstDuplicate(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr.includes(arr[i], i + 1)) return arr[i];
    }
    return -1;
}
// function firstDuplicate(arr){
//     for(let i = 0; i < arr.length; i++){
//         if(arr.indexOf(arr[i]) !== i) return arr[i];
//     }
//     return -1;
// }
// function firstDuplicate(arr){
//     for(let i = 0; i < arr.length; i++){
//         for(let j = i + 1; j < arr.length; j++){
//             if(arr[i] === arr[j]){
//                 return arr[i];
//             }
//         }
//     }
//     return -1;
// }

console.log(firstDuplicate([3, 7, 10, 0 , 3, 10]));
console.log(firstDuplicate([5, 7, 7, 0, 5, 10]));
console.log(firstDuplicate([5, '5', 3, 7, 4]));
console.log(firstDuplicate([123, 'abc', '123', 3, 'abc']));
console.log(firstDuplicate([1, 2, 3]));
console.log(firstDuplicate(['foo', 'abc', '123', 'bar']));


console.log('\n---Get All Duplicates---');
function getDuplicates(arr){
    let dup = [];
    for(let i = 0; i < arr.length; i++){
        if(arr.includes(arr[i], i + 1) && !dup.includes(arr[i])) dup.push(arr[i]);
    }
    return dup;
}
// function getDuplicates(arr){
//     return arr.filter((element, index) => arr.indexOf(element) !== index && arr.lastIndexOf(element) === index);
// }
// This works but will only return the last duplicate checked i.e. [ -7, 0 ] instead of [ 0, -7 ]

console.log(getDuplicates([0, -4, -7, 0, 5, 10, 45, -7, 0]));
console.log(getDuplicates([1, 2, 5, 0, 7]));
console.log(getDuplicates(['A', 'foo', '12', 12, 'bar', 'a', 'a', 'foo']));
console.log(getDuplicates(['foo', '12', 12, 'bar', 'a']));


console.log('\n---Count Vowels---');
function countVowels(str){
    return str.trim().toLowerCase().split('').filter(char => 'aeiou'.includes(char)).length;
}

console.log(countVowels('Hello'));
console.log(countVowels('JavaScript is fun'));
console.log(countVowels(''));


console.log('\n---Reverse String Words---');
function reverseStringWords(str){
    return str.trim().split('').toReversed().join('');
}

console.log(reverseStringWords('Hello World'));
console.log(reverseStringWords('I like JavaScript'));
console.log(reverseStringWords('Hello'));
console.log(reverseStringWords(''));
console.log(reverseStringWords('  '));


console.log('\n---Count Consonants---');
function countConsonants(str){
    return str.trim().toLowerCase().split('').filter(char => char >= 'a' && char <= 'z' && !'aeiou'.includes(char)).length;
}

console.log(countConsonants('Hello'));
console.log(countConsonants('Hello World'));
console.log(countConsonants('JavaScript is fun'));
console.log(countConsonants(''));



console.log('\n---Count Multiple Words---');
function countMultipleWords(arr){
    return arr.filter(word => word.trim().indexOf(' ') !== -1).length;
}

console.log(countMultipleWords(['foo', '', '     ', 'foo bar', 'foo']));
console.log(countMultipleWords(['foo', 'bar', 'foobar', '       foobar   ']));
console.log(countMultipleWords(['f o o', 'b a r', 'foo bar', '     foo bar   ']));
console.log(countMultipleWords([]));


console.log('\n---FizzBuzz---');
function fizzBuzz(num1, num2){
    let result = [];
    let min = Math.min(num1, num2);
    let max = Math.max(num1, num2);
    for(let i = min; i <= max; i++){
        if(i % 3 === 0 && i % 5 === 0) {
            result.push('FizzBuzz');
        } else if(i % 3 === 0){
            result.push('Fizz');
        } else if(i % 5 ===0){
            result.push('Buzz');
        } else result.push(i);
    }
    return result.join(' | ');
}

console.log(fizzBuzz(13, 18));
console.log(fizzBuzz(12, 5));
console.log(fizzBuzz(5, 5));
console.log(fizzBuzz(9, 6));


console.log('\n---Palindrome---');
function isPalindrome(str){
    return str.trim().toLowerCase() === str.trim().toLowerCase().split('').toReversed().join('');
}

console.log(isPalindrome('Hello'));
console.log(isPalindrome('civic'));
console.log(isPalindrome('ab a'));
console.log(isPalindrome('A'));
console.log(isPalindrome(''));


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
/*
function isPrime(number){
    if(number <= 1) return false;
    if(number === 2 || number === 3) return true;
    if(number % 2 === 0 || number % 3 === 0) return false;
    
    let d = 5;
    while(d < number){
        if(number % d === 0) return false;
        d += 2;
    }
    return true;
}
*/

console.log(isPrime(5));
console.log(isPrime(2));
console.log(isPrime(29));
console.log(isPrime(-5));
console.log(isPrime(0));
console.log(isPrime(1));


console.log('\n---Add Two Arrays---');
function add(arr1, arr2){
    if(arr2.length > arr1.length) [arr1, arr2] = [arr2, arr1];
    return arr1.map((value, i) => value + (arr2[i] || 0));
}

console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2]));
console.log(add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]));
console.log(add([-5, 6, -3, 11], [5, -6, 3, -11]));


console.log('\n---No Elements With A---');
function noA(arr){
    return arr.map(word => word.toLowerCase().startsWith('a') ? word.replace(word, '###') : word);
}

console.log(noA(["javascript", "hello", "123", "xyz"]));
console.log(noA(["apple", "123", "ABC", "javascript"]));
console.log(noA(["apple", "abc", "ABC", "Alex", "A"]));


console.log('\n---No Elements Divisible By 3 And 5---');
function no3And5(arr){
    let newArr= [];
    for(const num of arr){
        if(num % 3 === 0 && num % 5 === 0) newArr.push(101);
        else if(num % 3 === 0) newArr.push(100);
        else if(num % 5 === 0) newArr.push(99);
        else newArr.push(num);
    }
    return newArr;
}

console.log(no3And5([7, 4, 11, 23, 17]));
console.log(no3And5([3, 4, 5, 6]));
console.log(no3And5([10, 11, 12, 13, 14, 15]));


console.log('\n---No Elements Equal 13---');
function no13(arr){
    return arr.map(num => num === 13 ? 0 : num);
}

console.log(no13([1, 2, 3, 4]));
console.log(no13([13, 2, 3]));
console.log(no13([13, 13, 13, 13]));
console.log(no13([]));


console.log('\n---Remove Duplicates---');
function removeDuplicates(arr){
    return arr.filter((element, index) => arr.indexOf(element) === index);
}
// function removeDuplicates(arr){
//     let newArr = [];
//     for(let i = 0; i < arr.length; i++){
//         if(!arr.includes(arr[i], i + 1) && !newArr.includes(arr[i])) newArr.push(arr[i]);
//     }
//     return newArr;
// }
        
console.log(removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60]));
console.log(removeDuplicates([1, 2, 5, 2, 3]));
console.log(removeDuplicates([0, -1, -2, -2, -1]));
console.log(removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"]));
console.log(removeDuplicates(["1", "2", "3", "2", "3"]));
        
        
console.log('\n---No Digits---');
function noDigit(str){
    return str.trim().split('').filter(char => !'1234567890'.includes(char)).join('');
}

console.log(noDigit(''));
console.log(noDigit('JavaScript'));
console.log(noDigit('123Hello'));
console.log(noDigit('123Hello World149'));
console.log(noDigit('123Tech456Global149'));


console.log('\n---No Vowels---');
function noVowel(str){
    return str.trim().split('').filter(char => !'aeiouAEIOU'.includes(char)).join('');
}

console.log(noVowel('TechGlobal'));
console.log(noVowel('AEOxyz'));
console.log(noVowel('JavaScript'));
console.log(noVowel(''));
console.log(noVowel('125$'));


console.log('\n---Sum of Digits---');
function sumOfDigits(str){
    return str.trim().split('').reduce((sum, char) => sum + (char >= '0' && char <= '9' ? Number(char) : 0), 0)
}
// function sumOfDigits(str){
//     return str.trim().split('').reduce((sum, char) => {
//         if(char >= '0' && char <= '9'){
//             let num = Number(char);
//             sum += num;
//         }
//         return sum;
//     }, 0)
// }

console.log(sumOfDigits('JavaScript')); // 0
console.log(sumOfDigits('John\'s age is 29')); // 11
console.log(sumOfDigits('$125.00')); // 8
console.log(sumOfDigits('')); // 0


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