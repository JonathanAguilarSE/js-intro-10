function multiply(num1, num2 = 1){
    return num1 * num2;
}

console.log(multiply(3, 5)); // 15
console.log(multiply(10)); // 10



function sum(num1, num2 = 0){
    return num1 + num2;
}

console.log(sum(5, 10));
console.log(sum(7));