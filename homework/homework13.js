console.log('\n---------------TASK01---------------\n');
function countVC(str){
    // let onlyChars = str.trim().toLowerCase().split('').filter(char => char >= 'a' && char <= 'z');
    // let vowels = 'aeiou';
    
    // let vowelCount = onlyChars.filter(char => vowels.includes(char)).length;
    // let consonantCount = (onlyChars.length - vowelCount);
    
    // return {vowels: vowelCount, consonants: consonantCount};

    return VC_Count = {
        'vowels' : str.split('').filter(char => /[aeiou]/i.test(char)).length,
        'consonants' : str.split('').filter(char => /[a-z]/i.test(char) && /[^aeiou]/i.test(char)).length
    }
    // VC_Count['vowels'] = str.split('').filter(char => 'aeiouAEIOU'.includes(char)).length
    // VC_Count['consonants'] = str.split('').filter(char => (char.toLowerCase()  >= 'a' && char.toLowerCase() <= 'z') && !('aeiouAEIOU'.includes(char))).length

    // return VC_Count
}

console.log(countVC("Hello")) // {vowels: 2, consonants: 3}
console.log(countVC("Programming")) // {vowels: 3, consonants: 8}
console.log(countVC("123AbC")) // {vowels: 1, consonants: 2}
console.log(countVC("123!@#xyz")) // {vowels: 0, consonants: 3}
console.log(countVC("")) // {vowels: 0, consonants: 0}
console.log(countVC("AEioBg7")) // {vowels: 4, consonants: 2}


console.log('\n---------------TASK02---------------\n');
function countChars(str){
    // str = str.replaceAll(' ', '')
    let charCount = {};

    let letterCount = str.split('').filter(char => /[a-z]/i.test(char)).length
    letterCount > 0 ? charCount['letters'] = letterCount : ''
    
    let numberCount = str.split('').filter(char => /[0-9]/.test(char)).length
    numberCount > 0 ? charCount['numbers'] = numberCount : ''
    
    let specialCount = str.split('').filter(char => /[^\w\s]/.test(char)).length
    specialCount > 0 ? charCount['specials'] = specialCount : ''

    return charCount
}

console.log(countChars("Hello")); // {letters: 5}
console.log(countChars("Programming 123")); // {letters: 11, numbers: 3}
console.log(countChars("123AbC!@#")); // {letters: 3, numbers: 3, specials: 3}
console.log(countChars("0123456789")); // {numbers: 10}
console.log(countChars("     ")); // {}
console.log(countChars("")); // {}


console.log('\n---------------TASK03---------------\n');
function maxOccurrences(str){
    // const groupedChars =  str.trim().split("").filter(char => char !== " ").reduce((charAmt, char) => {
    //     charAmt[char] = (charAmt[char] || 0) + 1;
    //     return charAmt;
    // }, {});
    // // console.log(groupedChars);
    // const groupedCharsSorted = Object.entries(groupedChars).sort(([, valueA], [, valueB]) => valueB - valueA)[0];
    // // console.log(groupedCharsSorted);
    // return groupedCharsSorted ? groupedCharsSorted[0] : "";
    let occurences = {}
    let highestCount = 0
    let highestChar = ''

    str.split('').forEach(char => char !== ' ' ? occurences[char] = occurences[char] + 1 || 1 : '');

    for (let key in occurences){
        if (occurences[key] > highestCount){
            highestCount = occurences[key]
            highestChar = key
        }
    }

    return highestChar
}

console.log(maxOccurrences("Hello")); // l
console.log(maxOccurrences("Occurences")); // c
console.log(maxOccurrences("  ab  ")); // a
console.log(maxOccurrences("12  3  21")); // 1
console.log(maxOccurrences("     ")); // ""
console.log(maxOccurrences("")); // ""


console.log('\n---------------TASK04---------------\n');
function starOut(str){
    // return str.split("").reduce((result, char, index, arr) => {
    //     if (char === "*" || arr[index - 1] === "*" || arr[index + 1] === "*") {
    //         return result;
    //     }
    //     result.push(char);
    //     return result;
    // }, []).join("");

    // Below how I originally solved it and was curious to see how you could solve with reduce(). Finally learned how to utilise the fourth parameter more.
    let result = [];
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '*' || str[i - 1] === '*' || str[i + 1] === '*') {
            continue;
        }
        result.push(str[i]);
    }

    return result.join("");
}

console.log(starOut("ab*cd")); // ad
console.log(starOut("ab**cd")); // ad
console.log(starOut("xm*sm*sy")); // xy
console.log(starOut("abc")); // abc
console.log(starOut("***")); // ""
console.log(starOut("  ")); // "  "
console.log(starOut("")); // ""


console.log('\n---------------TASK05---------------\n');
function romanToInt(str){
    const romanValues = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    // let total = 0;

    // for (let i = 0; i < str.length; i++){
    //     const currentValue = romanValues[str[i]];
    //     const nextValue = romanValues[str[i + 1]];
    //     if (currentValue < nextValue) total -= currentValue;
    //     else total += currentValue
    // }

    // return total;
    
    return str.split("").reduce((sum, char, i) => {
        if (romanValues[char] < romanValues[str[i + 1]]) sum -= romanValues[char]
        else sum += romanValues[char]
        return sum
    }, 0)

}

console.log(romanToInt("I")); // 1
console.log(romanToInt("IV")); // 4
console.log(romanToInt("CXII")); // 112
console.log(romanToInt("MMM")); // 3000
console.log(romanToInt("MMMDCCCLXXXVIII")); // 3888
console.log(romanToInt("MDCLXVI")); // 1666