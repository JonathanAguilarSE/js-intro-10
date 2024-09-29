console.log("\n-----Task01-----\n");
function fizzBuzz1(num){
    if (num % 3 === 0 && num % 5 === 0) return "FizzBuzz";
    else if (num % 3 === 0) return "Fizz";
    else if (num % 5 === 0) return "Buzz";
    else return num
}

console.log(fizzBuzz1(0));
console.log(fizzBuzz1(1));
console.log(fizzBuzz1(3));
console.log(fizzBuzz1(5));
console.log(fizzBuzz1(30));
console.log(fizzBuzz1(10));
console.log(fizzBuzz1(15));
console.log(fizzBuzz1(-15));


console.log("\n-----Task02-----\n");
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


console.log("\n-----Task03-----\n");
function findSumNumbers(str){
    // let sum = 0;
    // let currNum = '';

    // for (let char of str){
    //     if (!isNaN(char) && char !== ' '){
    //         currNum += char;
    //     } else if (currNum){
    //         sum += Number(currNum);
    //         currNum = '';
    //     };
    // }
    // if(currNum){
    //     sum += Number(currNum);
    // }
    // return sum;
    return str.split('').map(char => !isNaN(char) && char !== ' ' ? char : ' ').join('').split(' ').filter(num => num).reduce((sum, num) => sum += Number(num), 0);
}

console.log(findSumNumbers("abc$")); // 0
console.log(findSumNumbers("a1b4c  6#$")); // 11
console.log(findSumNumbers("ab110c045d$")); // 155
console.log(findSumNumbers("525")); // 525
console.log(findSumNumbers("3 for 10 dollars$")); // 13


console.log("\n-----Task04-----\n");
function findBiggestNumber(str){
    const numbers = str.split('').map(char => !isNaN(char) && char !== ' ' ? char : ' ').join('').split(' ').filter(num => num.trim() !== '').map(element => Number(element));

    return numbers.length > 0 ? Math.max(...numbers) : 0;
}

console.log(findBiggestNumber("abc$")); // 0
console.log(findBiggestNumber("a1b4c  6#$")); // 6
console.log(findBiggestNumber("ab110c045d$")); // 110
console.log(findBiggestNumber("525")); // 525
console.log(findBiggestNumber("3 for 10 dollars$")); // 10

console.log("\n-----Task05-----\n");
function countOccurrencesOfCharacters(str){
    if(!str) return str;
    
}

console.log(countOccurrencesOfCharacters(''));
console.log(countOccurrencesOfCharacters('abc'));
console.log(countOccurrencesOfCharacters('abbcca'));
console.log(countOccurrencesOfCharacters('aaAAa'));
console.log(countOccurrencesOfCharacters('www'));

console.log("\n-----Task06-----\n");
console.log("\n-----Task07-----\n");
console.log("\n-----Task08-----\n");
console.log("\n-----Task09-----\n");