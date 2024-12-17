function countOccurrence(str1, str2){
    let occurences = []

    for (let char of str2){
        occurences.push(str1.split('').filter(e => e.toLowerCase() === char.toLowerCase()).length)
    }
    return occurences.sort((a, b) => a - b)[0]
}

console.log(countOccurrence('Javascript', 'Java')) // 1
console.log(countOccurrence('Hello', 'World')) // 0
console.log(countOccurrence('Can I can a can', 'anc')) // 3
console.log(countOccurrence('Hello', 'l')) // 2
console.log(countOccurrence('IT conversations', 'IT')) // 2


function canFormString(str1, str2){
    let arr1 = str1.trim().toLowerCase().split('').filter(e => e !== ' ')
    let arr2 = str2.trim().toLowerCase().split('').filter(e => e !== ' ')

    for (let i = 0; i < arr2.length; i++){
        if (arr1.includes(arr2[i])) arr1.splice(arr1.indexOf(arr2[i]), 1)
            else return false
    }
    return true
}

console.log(canFormString('Hello', 'Hi')) // false
console.log(canFormString('programming', 'gaming')) // true
console.log(canFormString('halogen', 'hello')) // false
console.log(canFormString('CONVERSATION', 'voices rant on')) // true
console.log(canFormString('12', '123')) // false


function reverseNumber(num){
    let reversed = 0

    while (num > 0){
        reversed = (reversed * 10) + (num % 10)
        num = Math.floor(num/10)
    }
    return reversed
}

console.log(reverseNumber(371)); // 173
console.log(reverseNumber(123)); // 321
console.log(reverseNumber(12)); // 21
console.log(reverseNumber(0)); // 0
console.log(reverseNumber(111)); // 111


function fibanacci1(num){
    if (num === 1) return [0]
    let sequence = [0, 1]
    for (let i = 2; i < num; i++){
        sequence[i] = sequence[i - 1] + sequence[i - 2]
    }
    return sequence
}

function isPower3(num){
    if (num < 1) return false

    while (num % 3 === 0){
        num /= 3
    }

    return num === 1
}


function findUniques(arr1, arr2){
    let concatArr = arr1.concat(arr2)
    let filteredArr = concatArr.filter(e => !(arr1.includes(e) && arr2.includes(e)))

    let set = new Set(filteredArr)
    return [...set]
}