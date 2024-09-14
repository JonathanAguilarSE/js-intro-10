console.log('\n---------------TASK01---------------\n');
const noSpace = (str) => str.trim().split(' ').filter(word => word).join('');

console.log(noSpace(''));
console.log(noSpace('JavaScript')); // JavaScript
console.log(noSpace('   Hello   ')); // Hello
console.log(noSpace('    Hello World    ')); // HelloWorld
console.log(noSpace('Tech Global')); /// TechGlobal



console.log('\n---------------TASK02---------------\n');
function replaceFirstLast(str){
    str = str.trim();
    if(str.length < 2) return '';
    return str.split('').at(-1) + str.slice(1,-1) + str[0];
}

console.log(replaceFirstLast(''));
console.log(replaceFirstLast('Hello')); // oellH
console.log(replaceFirstLast('Tech Global')); // lech GlobaT
console.log(replaceFirstLast('A'));
console.log(replaceFirstLast('    A    '));



console.log('\n---------------TASK03---------------\n');
const hasVowel = (str) => str.toLowerCase().split().map(char => '1234567890'.includes(char) || 'aeiou'.includes(char) ? false : true).toString();

console.log(hasVowel('')); // false
console.log(hasVowel('JavaScript')); // true
console.log(hasVowel('Tech Global')); // true
console.log(hasVowel('1234')); // false
console.log(hasVowel('ABC')); // true



console.log('\n---------------TASK04---------------\n');
function checkAge(yearOfBirth){
    let date = new Date();
    let year = date.getFullYear();
    let age = year - yearOfBirth;
    // console.log(year);
    if(age < 16 && age > 0) return 'AGE IS NOT ALLOWED';
    else if(age > 120 || age < 0) return 'AGE IS NOT VALID';
    return 'AGE IS ALLOWED';
}

console.log(checkAge(2015)); // AGE IS NOT ALLOWED
console.log(checkAge(2007)); // AGE IS ALLOWED
console.log(checkAge(2050)); // AGE IS NOT ALLOWED
console.log(checkAge(1920)); // AGE IS ALLOWED
console.log(checkAge(1800)); // AGE IS NOT VALID
console.log(checkAge(2026)); // AGE IS NOT VALID

console.log('\n---------------TASK05---------------\n');
function averageOfEdges(num1, num2, num3){
    let min = Math.min(num1, num2, num3);
    let max = Math.max(num1, num2, num3);
    return (min + max) / 2;
}

console.log(averageOfEdges(0, 0, 0)); // 0
console.log(averageOfEdges(0, 0, 6)); // 3
console.log(averageOfEdges(-2, -2, 10)); // 4
console.log(averageOfEdges(-3, 15, -3)); // 6
console.log(averageOfEdges(10, 13, 20)); // 15


console.log('\n---------------TASK06---------------\n');
function noA(arr){
    return arr.map(word => {
        // return word.replace(word, '###');
        if(word.toLowerCase().startsWith('a')) return '#'.repeat(3);
        return word;
    })
}

console.log(noA(["javascript", "hello", "123", "xyz"])); // [ 'javascript', 'hello', '123', 'xyz' ]
console.log(noA(["apple", "123", "ABC", "javascript"])); // [ '###', '123', '###', 'javascript' ]
console.log(noA(["apple", "abc", "ABC", "Alex", "A"])); // [ '###', '###', '###', '###', '###' ]


console.log('\n---------------TASK07---------------\n');
function no3And5(arr){
    return arr.map(number => {
        if(number % 3 === 0 && number % 5 === 0) return 101;
        if(number % 3 === 0) return 100;
        if(number % 5 === 0) return 99;
        return number;
    })
}

console.log(no3And5([7, 4, 11, 23, 17])); // [ 7, 4, 11, 23, 17 ]
console.log(no3And5([3, 4, 5, 6])); // [ 100, 4, 99, 100 ]
console.log(no3And5([10, 11, 12, 13, 14, 15])); // [ 99, 11, 100, 13, 14, 101 ]



console.log('\n---------------TASK08---------------\n');
function countPrimes(arr){
    return arr.filter(number => {
        if(number <= 1 || number % 2 === 0 && number !== 2) return false;
        // if(number === 2) return true; // write it in the same conditional perhaps? -- worked
        for(let i = 3; i <= Math.sqrt(number); i++){
            if(number % i === 0) return false;
        }
        return true;
    }).length;
}

console.log(countPrimes([-10, -3, 0, 1])); // 0
console.log(countPrimes([7, 4, 11, 23, 17])); // 4
console.log(countPrimes([41, 53, 19, 47, 67])); // 5
console.log(countPrimes([41, 53, 19, 47, 67, 2])); // 6
console.log(countPrimes([2])); // 1



console.log('\n---------------TASK09---------------\n');
function removeDuplicates(arr){  
    return arr.reduce((newArr, element) => {
        if(!newArr.includes(element)){
            newArr.push(element);
        }
        return newArr;
    }, [])
}

// From chatGPT, just wow - must learn this
// function removeDuplicates(arr){
//     return[...new Set(arr)];
// }

// function removeDuplicates(arr){
//     return arr.filter((element, index) => arr.indexOf(element) === index);
// }

console.log(removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60])); // [ 10, 20, 35, 60, 70 ]
console.log(removeDuplicates([1, 2, 5, 2, 3])); // [ 1, 2, 5, 3 ]
console.log(removeDuplicates([0, -1, -2, -2, -1])); // [ 0, -1, -2 ]
console.log(removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"])); // [ 'abc', 'xyz', '123', 'ab', 'ABC' ]
console.log(removeDuplicates(["1", "2", "3", "2", "3"])); // [ '1', '2', '3' ]



console.log('\n---------------TASK010---------------\n');
function isDateFormatValid(str){
    if(!str) return false;

    if (!str.includes('/')) return false;

    const dateFormat = str.split('/'); // should give 3 elements
    if(dateFormat.length !== 3) return false;

    const [month, day, year] = dateFormat; // destructuring at its finest

    if(month.length !== 2 || month < '01' || month > '12') return false;
    if(day.length !== 2 || day < '01' || day > '31') return false;
    if(year.length !== 4) return false;
    
    return true;
}

console.log(isDateFormatValid("")); // false
console.log(isDateFormatValid("15/30/2020")); // false
console.log(isDateFormatValid("10-30-2020 ") ); // false
console.log(isDateFormatValid("10.30.2020") ); // false
console.log(isDateFormatValid("5/30/2020") ); // false
console.log(isDateFormatValid("05/30/2020") ); // true
console.log(isDateFormatValid("10/2/2020") ); // false
console.log(isDateFormatValid("10/02/2020") ); // true



console.log('\n---------------TASK011---------------\n');
function secondMax(arr){
    let dupsRemoved = arr.reduce((newArr, number) => {
        if(!newArr.includes(number)){
            newArr.push(number);
        }
        return newArr;
    }, []);
    let sortedArr = dupsRemoved.sort((a, b) => a - b)
    if(sortedArr.length === 1) return sortedArr[0];
    return sortedArr.at(-2);
}

console.log(secondMax([7, 4, 4, 4, 23, 23, 23])); // 7
console.log(secondMax([3, 4, 5, 6])); // 5
console.log(secondMax([10])); // 10



console.log('\n---------------TASK012---------------\n');
function secondMin(arr){
    let dupsRemoved = arr.reduce((newArr, number) => {
        if(!newArr.includes(number)){
            newArr.push(number);
        }
        return newArr;
    }, []);
    let sortedArr = dupsRemoved.sort((a, b) => b - a);
    if(sortedArr.length === 1) return sortedArr[0];
    return sortedArr.at(-2);
}

console.log(secondMin([7, 4, 4, 4, 23, 23, 23])); // 7
console.log(secondMin([3, 4, 5, 6])); // 4
console.log(secondMin([10])); // 10




console.log('\n---------------TASK013---------------\n');
/*
Requirement: 
Write a method named mostRepeated() takes an array argument and returns the most counted element from the array.

NOTE: Assume that you will not be given empty array and the count of one element will always be more than the others.

Examples:
mostRepeated([4, 7, 4, 4, 4, 23, 23, 23]) 			-> 4
mostRepeated(["pen", "pencil", "pen", "123", "abc", "pen", "pencil"]) 	-> "pen"
mostRepeated([10]) 					-> 10
mostRepeated(["TechGlobal"]) 				-> "TechGlobal"
*/
function mostRepeated(arr){
    let mostRepeatedElement = arr[0];
    let maxCount = 0;

    for(let i = 0; i < arr.length; i++){
        let count = 0

        for(let j = 0; j < arr.length; j++){
            if(arr[i] === arr[j]){
                count++
            }
        }
        if(count > maxCount){
            maxCount = count;
            mostRepeatedElement = arr[i];
        }
    }
    return mostRepeatedElement;
}

console.log(mostRepeated([4, 7, 4, 4, 4, 23, 23, 23])); // 4
console.log(mostRepeated(["pen", "pencil", "pen", "123", "abc", "pen", "pencil"])); // pen
console.log(mostRepeated([10])); // 10
console.log(mostRepeated(["TechGlobal"])); // TechGlobal