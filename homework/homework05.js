console.log('\n---------------TASK01---------------\n');
function countPos(arr){
    return arr.filter((element) => element > 0).length;
}

console.log(countPos([-45, 0, 0, 34, 5, 67])); // 3
console.log(countPos([-23, -4, 0, 2, 5, 90, 123]));
console.log(countPos([0, -1, -2, -3]));


console.log('\n---------------TASK02---------------\n');
function countA(str){
    return str.toLowerCase().split('').filter((char) => char === 'a').length;
}

console.log(countA("TechGlobal is a QA bootcamp")); // 4
console.log(countA("QA stands for Quality Assurance")); // 5
console.log(countA("Cypress")); // 0


console.log('\n---------------TASK03---------------\n');
function countVowels(str){
    return str.toLowerCase().split('').filter((char) => 'aeiou'.includes(char)).length;
}

console.log(countVowels("Hello")); // 2
console.log(countVowels("Hello World")); // 3
console.log(countVowels("JavaScript is fun")); // 5
console.log(countVowels("")); // 0

console.log('\n---------------TASK04---------------\n');
function countConsonants(str){
    return str.toLowerCase().split('').filter((char) => char >= 'a' && char <= 'z' && !('aeiou'.includes(char))).length;
    // return str.toLowerCase().split('').filter((char) => /[a-z]/.test(char) && !('aeiou'.includes(char))).length;
}

console.log(countConsonants("Hello")); // 3
console.log(countConsonants("Hello World")); // 8
console.log(countConsonants("JavaScript is fun")); // 12
console.log(countConsonants("")); // 0


console.log('\n---------------TASK05---------------\n');
function countWords(str){
    return str.trim().split(' ').length;
    // return str.trim().split(' ').map((word) => word).length;
}

console.log(countWords('     Javascript is fun     ')); // 3
console.log(countWords('Cypress is an UI automation tool.   ')); // 6
console.log(countWords('1 2 3 4')); // 4


console.log('\n---------------TASK06---------------\n');
function factorial(number){
    let product = 1
    for(let i = number; i >= 1; i--){
        product *= i;
    };
    return product;
}

console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(0));
console.log(factorial(1));


console.log('\n---------------TASK07---------------\n');
function isPalindrome(str){
    return str.toLowerCase() === str.toLowerCase().split('').reverse().join('');
}

console.log(isPalindrome('Hello')); // false
console.log(isPalindrome('Kayak')); // true
console.log(isPalindrome('civic')); // true
console.log(isPalindrome('abba')); // true
console.log(isPalindrome('ab a')); // false
console.log(isPalindrome('123454321')); // true
console.log(isPalindrome('A')); // true
console.log(isPalindrome('')); // true


console.log('\n---------------TASK08---------------\n');
function countMultipleWords(arr){
    return arr.filter((element) => element.trim().includes(' ')).length;
}

console.log(countMultipleWords([ "foo", "", "    ", "foo bar", "     foo" ])); // 1
console.log(countMultipleWords([ "foo", "bar", "foobar", "     foobar   " ])); // 0
console.log(countMultipleWords([ "f o o", "b a r", "foo bar", "     foo bar   " ])); // 4
console.log(countMultipleWords([ ])); // 0


console.log('\n---------------TASK09---------------\n');
function count3OrLess(str){
    return str.trim().split(' ').filter((word) => word.length <= 3 && word.length > 0).length;
}

console.log(count3OrLess('Hello')); // 0
console.log(count3OrLess('Hi John')); // 1
console.log(count3OrLess('JavaScript is fun')); // 2
console.log(count3OrLess('My name is john Doe')); // 3
console.log(count3OrLess('')); // 0


console.log('\n---------------TASK10---------------\n');
function isPrime(number){
    if(number <= 1) return false;
    if(number === 2) return true;
    if(number % 2 === 0) return false;
    for(let i = 3; i <= Math.sqrt(number); i += 2){
        if(number % i === 0) return false;
    }
    return true;
}

console.log(isPrime(5)); // true
console.log(isPrime(2)); // true
console.log(isPrime(29)); // true
console.log(isPrime(-5)); // false
console.log(isPrime(0)); // false
console.log(isPrime(1)); // false
console.log(isPrime(4)); // false


console.log('\n---------------TASK11---------------\n');
function add(arr1, arr2){
    let sum = [];
    let max = Math.max(arr1.length, arr2.length);
    for(let i = 0; i < max; i++){
        let num1 = arr1[i] === undefined ? 0 : arr1[i];
        let num2 = arr2[i] === undefined ? 0 : arr2[i];
        sum.push(num1 + num2);
    }
    return sum;
}

console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2])); // [9, 3, 2, 7, 5, 10]
console.log(add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34])); // [16, 11, 9,  3, 2, 7, 5, 10, 34]​
console.log(add([-5, 6, -3, 11], [5, -6, 3, -11])); // [0, 0, 0, 0]


console.log('\n---------------TASK12---------------\n');
function removeExtraSpaces(str){
    return str.split(' ').filter(word => word).join('');
}

console.log(removeExtraSpaces('Hello'));
console.log(removeExtraSpaces('      Hello    World     '));
console.log(removeExtraSpaces('     JavaScript is          fun'));
console.log(removeExtraSpaces(''));

// console.log(('      Hello    World     '.split(' ')));

/*
found through research that regex could be a best use case example to utilize here
SYNTAX:
string.replace(/\s+/g, " "); // replaces all spaces within a string
string.replace(/^\s+|\s+$/g, ""); // replaces all spaces within and leading and trailing
 */


console.log('\n---------------TASK13---------------\n');
function findClosestTo10(arr){
    let closestTo10 = null;
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 10) continue;
        if(closestTo10 === null) closestTo10 = arr[i];
        else{
        let currentDist = Math.abs(10 - arr[i]);
        let closestDist = Math.abs(10 - closestTo10);
        if((currentDist < closestDist) || (currentDist === closestDist && arr[i] < closestTo10)) closestTo10 = arr[i];
        }
    }
    return closestTo10;
}

console.log(findClosestTo10([10, -13, 5, 70, 15, 57])); // 5
console.log(findClosestTo10([10, -13, 8, 12, 15, -20])); // 8
console.log(findClosestTo10([0, -1, -2])); // 0

/*
this is a chatgpt solution that I wanted to see if reduce, filter, or mapping was utilized.

function findClosestTo10(arr) {
    return arr
        .filter(num => num !== 10) // Exclude 10 from the array
        .reduce((closest, current) => {
            let currentDistance = Math.abs(10 - current);
            let closestDistance = Math.abs(10 - closest);

            if (currentDistance < closestDistance || (currentDistance === closestDistance && current < closest)) {
                return current;
            }

            return closest;
        });
}
*/


console.log('\n---------------TASK14---------------\n');
function isEmailValid(str){
    if(str.includes(' ')) return false;
    
    const emailStructure = str.split('@'); // [ element1, element2 ] if there is only 1 '@' present
    if(emailStructure.length !== 2) return false;

    const [emailName, domain] = emailStructure;

    const domainStructure = domain.split('.');
    if(domainStructure.length !== 2) return false;

    const [domainName , domainExtension] = domainStructure;

    if(emailName.length < 2 || domainName.length < 2 || domainExtension < 2) return false;

    return true;
}

console.log(isEmailValid("")); // false
console.log(isEmailValid("@gmail.com")); // false
console.log(isEmailValid("johndoe@yahoo")); // false
console.log(isEmailValid("johndoe@.com")); // false
console.log(isEmailValid("a@outlook.com")); // false
console.log(isEmailValid("johndoe@a.com")); // false
console.log(isEmailValid("johndoe@@gmail.com")); // false
console.log(isEmailValid("johndoe@gmail.com")); // true


console.log('\n---------------TASK15---------------\n');
function isPasswordValid(str){
    // if(!str) return false; // will return false for ALL falsy values but don't need to use this for now
    if(str.includes(' ')) return false;

    if(str.length < 8 || str.length > 16) return false;

    let hasDigit = false;
    let hasUpper = false;
    let hasLower = false;
    let hasSpecialChar = false;

    for(const char of str){
        let charASCII = char.charCodeAt(0);

        if(charASCII >= 48 && charASCII <= 57) hasDigit = true;
        if(charASCII >= 65 && charASCII <= 90) hasUpper = true;
        if(charASCII >= 97 && charASCII <= 122) hasLower = true;
        if(!(charASCII >= 48 && charASCII <= 57 || charASCII >= 65 && charASCII <= 90 || charASCII >= 97 && charASCII <= 122)) hasSpecialChar = true;
        
    }
    return hasDigit && hasUpper && hasLower && hasSpecialChar;
}

console.log(isPasswordValid('')); // false
console.log(isPasswordValid('abcd')); // false
console.log(isPasswordValid('abcd1234')); // false
console.log(isPasswordValid('Abcd1234')); // false
console.log(isPasswordValid('Chicago12345US!#$%')); // false
console.log(isPasswordValid('Abcd1234$')); // true
console.log(isPasswordValid('Chicago123$')); // true
console.log(isPasswordValid('Test1234#')); // true









let str = 'howdy@@yahoo.com'
console.log(str.split('@').length); // [ 'howdy', '', 'yahoo.com' ] -> 3

let str1 = 'yahoo.com'
console.log(str1.split('.')); // [ 'yahoo', 'com' ]