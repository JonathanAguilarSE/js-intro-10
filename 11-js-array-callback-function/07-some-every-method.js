const numbers = [-5, 0, 5, 10, 23, -10];

// check if some elements are divisible by 5 -> true
// check if every element is positive -> false
// check if some elements are negative -> true

let someDivisibleBy5 = numbers.some((element) => {
    return element % 5 === 0;
})

let everyElementPos = numbers.every((number) => {
    return number > 0;
})

let someElementNeg = numbers.some((x) => x < 0);

console.log(someDivisibleBy5);
console.log(everyElementPos);
console.log(someElementNeg);