console.log('-----Task01-----');
const hasUpperCase = (str) => str[0] >= 'A' && str[0] <= 'Z';

console.log(hasUpperCase("javascript")); // false
console.log(hasUpperCase("John")); // true
console.log(hasUpperCase("$125.0")); // false
console.log(hasUpperCase("")); // false


console.log('-----Task02-----');
const noDigit = (str) => str.split('').filter(char => !(char >= '0' && char <= '9')).join('');

console.log(noDigit("")); // 
console.log(noDigit("Javascript")); // Javascript
console.log(noDigit("123Hello")); // Hello
console.log(noDigit("123Hello World149")); // Hello World
console.log(noDigit("123Tech456Global149")); // TechGlobal


console.log('-----Task03-----');
const noVowel = (str) => str.split('').filter(char => !('aeiouAEIOU'.includes(char))).join('');

console.log(noVowel("TechGlobal")); // TchGlbl
console.log(noVowel("AEOxyz")); // xyz
console.log(noVowel("Javascript")); // Jvscrpt
console.log(noVowel("")); // 
console.log(noVowel("125$")); //125$


console.log('-----Task04-----');
const no13 = (arr) => arr.map(num => num === 13 ? 0 : num);

console.log(no13([1, 2, 3 ,4])); // [ 1, 2, 3, 4 ]
console.log(no13([13, 2, 3])); // [ 0, 2, 3 ]
console.log(no13([13, 13, 13 , 13, 13])); // [ 0, 0, 0, 0, 0 ]
console.log(no13([])); // []


console.log('-----Task05-----');
const middleInt = (num1, num2, num3) => [num1, num2, num3].sort((a, b) => a - b)[1];

console.log(middleInt(1, 2, 2)); // 2
console.log(middleInt(5, 5, 8)); // 5
console.log(middleInt(5, 3, 5)); // 5
console.log(middleInt(1, 1, 1)); // 1
console.log(middleInt(-1, 25, 10)); // 10


console.log('-----Task06-----');
function sumOfDigits(str){
    return str.split('').filter(char => char >= '0' && char <= '9').reduce((sum, number) => {
        sum += Number(number);
        return sum
    }, 0);
}

console.log(sumOfDigits("Javascript")); // 0
console.log(sumOfDigits("John's age is 29")); // 11
console.log(sumOfDigits("$125.0")); // 8
console.log(sumOfDigits("")); // 0


console.log('-----Task07-----');
function arrFactorial(arr){
    return arr.map(num => {
        // if(num === 0 || num === 1) return 1;   => is this line even needed if 0 still gives me 1?, why though.
        let product = 1;
        for(let i = num; i > 0; i--){
            product *= i;
        }
        return product;
    })
}

console.log(arrFactorial([1, 2, 3 ,4]));
console.log(arrFactorial([0, 5]));
console.log(arrFactorial([5 , 0, 6]));
console.log(arrFactorial([]));


console.log('-----Task08-----');
function categorizeCharacters(str){
    const newArr = ['', '', ''];
    for(const char of str) {
        if((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) newArr[0] += char;
        else if(char >= '0' && char <= '9') newArr[1] += char;
        else newArr[2] += char;
    }
    return newArr;
}

console.log(categorizeCharacters("1234")); // [ '' , '1234', '' ] 
console.log(categorizeCharacters("abc123$#%")); // [ 'abc', '123', '$#%' ]
console.log(categorizeCharacters("12ab$%3c%")); // [ 'abc', '123', '$%%' ]