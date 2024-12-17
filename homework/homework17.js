console.log('\n---------------TASK01---------------\n');
function findMedian(arr1, arr2) {
    const sortedNumArr = arr1.concat(arr2).sort((a, b) => a - b)

    if (sortedNumArr.length % 2 === 0) {
        const mid1 = sortedNumArr[(sortedNumArr.length / 2) - 1]
        const mid2 = sortedNumArr[sortedNumArr.length / 2]
        return (mid1 + mid2) / 2
    } else {
        return sortedNumArr[Math.floor(sortedNumArr.length / 2)]
    }
}

console.log(findMedian([1, 3], [2])) // 2
console.log(findMedian([1, 2], [3, 4])) // 2.5
console.log(findMedian([4], [3])) // 3.5
console.log(findMedian([4], [])) // 4
console.log(findMedian([0], [0, 1])) // 0


console.log('\n---------------TASK02---------------\n');
function calcualteFactorial(num) {
    if (num === 0) return 1

    return num * calcualteFactorial(num - 1)
}

console.log(calcualteFactorial(0)) // 1
console.log(calcualteFactorial(1)) // 1
console.log(calcualteFactorial(5)) // 120
console.log(calcualteFactorial(6)) // 720
console.log(calcualteFactorial(10)) // 3628800
console.log(calcualteFactorial(4)) // 24



console.log('\n---------------TASK03---------------\n');
function calculateGCD(num1, num2) {
    if (num1 === 0) return num2
    if (num2 === 0) return num1

    let divisorArr1 = []
    let divisorArr2 = []
    let commonDivisorArr = []

    for (let i = 1; i <= num1; i++) {
        if (num1 % i === 0) divisorArr1.push(i)
    }
   
    for (let i = 1; i <= num2; i++) {
        if (num2 % i === 0) divisorArr2.push(i)
    }

    for (let num of divisorArr1) {
        if (divisorArr2.includes(num)) commonDivisorArr.push(num)
    }

    return Math.max(...commonDivisorArr)
}

/*
OR using euclidean algorithm - WOW

if (num2 === 0) {
    return num1; // Base case: if one number is 0, GCD is the other number
}
return calculateGCD(num2, num1 % num2); // Recursive call with remainder

OR

    // Handle negative numbers to ensure GCD works correctly
    num1 = Math.abs(num1);
    num2 = Math.abs(num2);

    // Base case: if one number is 0, return the other number
    while (num2 !== 0) {
        [num1, num2] = [num2, num1 % num2];
    }
    return num1; // The GCD
*/

console.log(calculateGCD(8, 12)) // 4
console.log(calculateGCD(17, 5)) // 1
console.log(calculateGCD(48, 18)) // 6
console.log(calculateGCD(0, 5)) // 5
console.log(calculateGCD(21, 14)) // 7
console.log(calculateGCD(60, 48)) // 12



console.log('\n---------------TASK04---------------\n');
function calculateLCM(num1, num2) {
    if (num1 ===  0 || num2 === 0) return 0
    let max = Math.max(num1, num2)
    let lcm = max

    while (true) {
        if (lcm % num1 === 0 && lcm % num2 === 0) {
            return lcm
        }
        lcm += max
    }
}

console.log(calculateLCM(8, 12)) // 24
console.log(calculateLCM(17, 5)) // 85
console.log(calculateLCM(48, 18)) // 144
console.log(calculateLCM(0, 5)) // 0
console.log(calculateLCM(21, 14)) // 42
console.log(calculateLCM(60, 48)) // 240