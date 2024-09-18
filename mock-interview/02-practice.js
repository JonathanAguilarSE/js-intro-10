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










