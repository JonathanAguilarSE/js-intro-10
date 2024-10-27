console.log('\n---------------TASK01---------------\n');
const countPalindrome = (str) => !str ? 0 : str.toLowerCase().split(' ').filter(word => word === word.split('').reverse().join('')).length;

console.log(countPalindrome("mom and Dad")); // 2
console.log(countPalindrome("See you at noon")); // 1
console.log(countPalindrome("Kayak races attracts racecar drivers")); // 2
console.log(countPalindrome("")); // 0
console.log(countPalindrome("No palindrome here")); // 0


console.log('\n---------------TASK02---------------\n');
function sum(arr, bool){
    if (bool === true) {
        return arr.reduce((sum, num, index) => {
            if (index % 2 === 0) sum += num;
            return sum;
        }, 0)
    }
    else if (bool === false) {
        return arr.reduce((sum, num, index) => {
            if (index % 2 !== 0) sum += num;
            return sum;
        }, 0)
    }
}

console.log(sum([1, 5, 10], true)) // 11
console.log(sum([3, 7, 2, 5, 10], false)) // 12
console.log(sum([-1, 1, -2, 2], true)) // -3
console.log(sum([0, -1, 15, 1], false)) // 0
console.log(sum([1, 2, 3, 4, -4], true)) // 0


console.log('\n---------------TASK03---------------\n');
function nthChars(str, num){
    return str.split('').reduce((acc, char, index) => {
        if ((index + 1) % num === 0){
            acc.push(char);
        }
        return acc;
    }, []).join('')
}

console.log(nthChars('Java', 2)) // aa
console.log(nthChars('JavaScript', 5)) // St
console.log(nthChars('Java', 3)) // v
console.log(nthChars('Hi', 4)) // 
console.log(nthChars('0123456789', 2)) // 13579


console.log('\n---------------TASK04---------------\n');
function canFormString(str1, str2){
    let word1 = str1.toLowerCase().split('');
    
    return str2.toLowerCase().split('').filter(char => char !== ' ').every(char => {
        let index = word1.indexOf(char);
        if (index !== -1) {
            word1.splice(index, 1);
            return true;
        }
        return false;
    })
}

console.log(canFormString('Hello', 'Hi')) // false
console.log(canFormString('programming', 'gaming')) // true
console.log(canFormString('halogen', 'hello')) // false
console.log(canFormString('CONVERSATION', 'voices rant on')) // true
console.log(canFormString('12', '123')) // false


console.log('\n---------------TASK05---------------\n');
function isAnagram(str1, str2) {
    let word1 = str1.toLowerCase().split('');
    
    return str2.toLowerCase().split('').filter(char => char !== ' ').every(char => {
        let index = word1.indexOf(char);
        if (index !== -1) {
            word1.splice(index, 1);
            return true;
        }
        return false;
    })
}

console.log(isAnagram('Apple', 'Peach')); // false
console.log(isAnagram('listen', 'silent')); // true
console.log(isAnagram('astronomer', 'moon starer')); // true
console.log(isAnagram('CINEMA', 'iceman')); // true
console.log(isAnagram('123', '1234')); // false


console.log('\n---------------TASK06---------------\n');
function count(arr, bool){
    return arr.reduce((acc, num) => {
        if (bool === true && num % 2 === 0) {
            acc.push(num)
        } else if (bool === false && num % 2 !== 0) {
            acc.push(num)
        }
        return acc;
    }, []).length
}

console.log(count([1, 5, 10], true)) // 1
console.log(count([3, 7, 2, 5, 10], false)) // 3
console.log(count([-1, 1, -2, 2], true)) // 2
console.log(count([0, -1, 15, 1], false)) // 3
console.log(count([1, 2, 3, 4, -4], true)) // 3


console.log('\n---------------TASK07---------------\n');
function sumDigitsDoubled(str){
    if (!str.split('').some(char => char >= '0' && char <= '9')) return -1;
    return str.split('').filter(char => char >= '0' && char <= '9').reduce((sum, num) => {
        return sum += (Number(num) * 2);
    }, 0)
}

console.log(sumDigitsDoubled('Javascript')) // -1
console.log(sumDigitsDoubled('23abc45')) // 28
console.log(sumDigitsDoubled('Hi-23')) // 10
console.log(sumDigitsDoubled('ab12')) // 6
console.log(sumDigitsDoubled('n0numh3r3')) // 12


console.log('\n---------------TASK08---------------\n');
function countOccurrences(str1, str2){
    let counter = 0;
    let window = [];
    const sortedStr2 = str2.split('').sort().join('');

    for (const char of str1) {
        if (str2.includes(char)) {
            window.push(char);

            if (window.length === str2.length) {
                if (window.slice().sort().join('') === sortedStr2) {
                    counter++;
                }
                window.shift();
            }
        } else {
            window = [];
        }
    }

    return counter;
}

console.log(countOccurrences('Javascript', 'Java')) // 1
console.log(countOccurrences('Hello', 'World')) // 0
console.log(countOccurrences('Can I can a can', 'anc')) // 3
console.log(countOccurrences('Hello', 'l')) // 2
console.log(countOccurrences('IT conversations', 'IT')) // 2


console.log(['c','a','b'].slice().sort().join('')) // false