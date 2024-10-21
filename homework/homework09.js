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
    if (!str) return str;
    let result = '';
    let count = 1;
    for (let i = 0; i < str.length; i++){
        if (str[i] === str[i + 1]) {
        count++;
        } else {
            result += count + str[i];
            count = 1;
        }
    }
    return result;
}

console.log(countOccurrencesOfCharacters(''));
console.log(countOccurrencesOfCharacters('abc'));
console.log(countOccurrencesOfCharacters('abbcca'));
console.log(countOccurrencesOfCharacters('aaAAa'));
console.log(countOccurrencesOfCharacters('www'));

console.log("\n-----Task06-----\n");
function fibonacciSeries1(n){
    if (n === 1) return [0];
    let arr = [0, 1];

    for (let i = 2; i < n; i++){
        arr.push(arr[i - 1] + arr[i - 2]);

    }
    return arr;
}

console.log(fibonacciSeries1(3));
console.log(fibonacciSeries1(5));
console.log(fibonacciSeries1(7));
console.log(fibonacciSeries1(8));
console.log(fibonacciSeries1(1));
console.log(fibonacciSeries1(2));

console.log("\n-----Task07-----\n");
function fibonacciSeries2(n){
    if (n === 1) return 0;
    let arr = [0, 1];

    for (let i = 2; i < n; i++){
        arr.push(arr[i - 1] + arr[i - 2])
    }

    return arr[arr.length - 1];
}

console.log(fibonacciSeries2(2));
console.log(fibonacciSeries2(4));
console.log(fibonacciSeries2(8));
console.log(fibonacciSeries2(9));
console.log(fibonacciSeries2(1));

console.log("\n-----Task08-----\n");
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

console.log("\n-----Task09-----\n");
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




/*
- by default '.this' keyword is implicitly defined by its context within an object
- in some cases it has no context and makes no reference to any property
- all 3 are primarily used to control what '.this' keyword refers to between a function and an object, so that a reference/connection occur
- call & apply behave similarly but their difference lies in how they accept additional arguments. Call written with individual arguments, and apply has arguments passed as an array
- bind is used when you want to create a new function where the 'this' context is fixed permenently
- call & apply invoke functions immediately, bind does not.
*/

const cat = {
    name: "Fluffy",
    speak(sound, task){
        return `${this.name} says ${sound} and ${task}`;
    }
}

//bind
// console.log(cat.speak("Meow"));

// const catSpeak = cat.speak;
// console.log(catSpeak("Meow"));

// const catSpeak = cat.speak.bind(cat);
// console.log(catSpeak("Meow"));

// const catMeows = cat.speak.bind(cat, "Meow");
// console.log(catMeows());

// const catSpeak2 = catSpeak.bind(undefined);
// console.log(catSpeak2("Meow"));


//call
const catSpeak = cat.speak;
console.log(catSpeak.call(cat, "Meow", "eats"));


// //apply
// const catSpeak = cat.speak;
// console.log(catSpeak.apply(cat, ["Meow", "eats"]));