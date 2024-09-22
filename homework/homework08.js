console.log('-----Task01-----');
const hasLowerCase = (str) => str.trim().split('').some(char => char >= 'a' && char <= 'z');

console.log(hasLowerCase(''));
console.log(hasLowerCase('JAVASCRIPT'));
console.log(hasLowerCase('hello'));
console.log(hasLowerCase('125$'));
console.log(hasLowerCase('   a   '));


console.log('-----Task02-----');
const noZero = (arr) => arr.filter(num => num !== 0);

console.log(noZero([1]));
console.log(noZero([1, 1, 10]));
console.log(noZero([0, 1, 10]));
console.log(noZero([0, 0, 0]));
console.log(noZero([10, 100, 0]));


console.log('-----Task03-----');
const numberAndSquare = (arr) => arr.map(num => [num, num ** 2]);

console.log(numberAndSquare([1, 2, 3]));
console.log(numberAndSquare([0, 3, -6]));
console.log(numberAndSquare([1, 4]));
console.log(numberAndSquare([0, 0, 0]));
console.log(numberAndSquare([0, 1, -10]));


console.log('-----Task04-----');
const containsValue = (arr, str) => arr.some(word => word === str);

console.log(containsValue(["abc", "foo", "javascript"], "hello"));
console.log(containsValue(["abc", "def", "123"], "Abc"));
console.log(containsValue(["abc", "def", "123", "Javascript", "Hello"], "123"));


console.log('-----Task05-----');
function reverseSentence(str){
    if(str.trim().split(' ').length < 2) return 'There is not enough words!';
    let firstLetter = str.trim().split(' ').toReversed().join(' ')[0].toUpperCase();
    let restOfSentence = str.trim().split(' ').toReversed().join(' ').slice(1).toLowerCase();
    return firstLetter + restOfSentence;
}
// function reverseSentence(str){
//     if(str.trim().split(' ').length < 2) return 'There is not enough words!';
//     return str.trim().split(' ').toReversed().join(' ');
// }

console.log(reverseSentence('Hello'));
console.log(reverseSentence('JavaScript is fun'));
console.log(reverseSentence('This is a sentence'));


console.log('-----Task06-----');
const removeStringSpecialsDigits = (str) => str.trim().split('').filter(char => char >= 'a' && char <= 'z' || char >= 'A' && char <= 'Z' || char === ' ').join('');

console.log(removeStringSpecialsDigits('123Javascript #$%is fun'));
console.log(removeStringSpecialsDigits('Cypress'));
console.log(removeStringSpecialsDigits('Automation123#$%'));


console.log('-----Task07-----');
const removeArraySpecialsDigits = (arr) => arr.map(word => word.trim().split('').filter(char => char >= 'a' && char <= 'z' || char >= 'A' && char <= 'Z').join(''));

console.log(removeArraySpecialsDigits(["123Javascript", "#$%is", "fun"]));
console.log(removeArraySpecialsDigits(["Cypress", "123$%", "###"]));
console.log(removeArraySpecialsDigits(["Automation", "123#$%tool"]));


console.log('-----Task08-----');
function getCommons(arr1, arr2){
    return arr1.reduce((repeats, element) => {
        if(arr2.includes(element) && !repeats.includes(element)) repeats.push(element);
        return repeats;
    }, [])
}

console.log(getCommons(["Javascript", "is", "fun"], ["abc", "xyz", "123"]));
console.log(getCommons(["Javascript", "is", "fun"], ["Javascript", "C#", "Python"]));
console.log(getCommons(["Javascript", "C#", "C#"], ["Python", "C#", "C++"]));


console.log('-----Task09-----');
function noXInVariables(arr){
    return arr.reduce((noX, element) => {
        const str = typeof element === 'string' ? element : String(element);
        let strWithoutX = '';

        for(let char of str){
            if(!['x', 'X'].includes(char)) strWithoutX += char;
        }

        if(strWithoutX.length > 0) noX.push(isNaN(strWithoutX) ? strWithoutX : Number(str));

        return noX;
    }, []);
}

console.log(noXInVariables(["abc", 123, "#$%"]));
console.log(noXInVariables(["xyz", 123, "#$%"]));
console.log(noXInVariables(["x", 123, "#$%"]));
console.log(noXInVariables(["xyXyxy", "Xx", "ABC"]));


console.log(isNaN('5'))
console.log(isNaN('Hi'))