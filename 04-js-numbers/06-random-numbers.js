// get a random number between 0 and 10 -> inclusive and 10 exclusive
let ranNum = Math.random() * 10;

console.log(ranNum);
console.log(Math.floor(ranNum)); // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
console.log(Math.ceil(ranNum));
console.log(Math.round(ranNum));
console.log(Math.trunc(ranNum));

// get a random number between 1 and 10 -> both inclusive
let ranNum1_10 = Math.random() * 10;

console.log(Math.ceil(ranNum1_10));


// get a random number between 0 and 25 -> both inclusive
/*
RULE: you can use below steps ONLY when your range starts with 0
1. Generate a random number between 0 and 1
2. Multiply this number with the count of desired numbers (how many numbers you can get in your range)
    largerNumber - smallerNumber + 1   => 25 - 0 + 1  => 26
3. Floor the result
*/
let ranNum0_25 = Math.floor(Math.random() * 26);

console.log(ranNum0_25);

for(let i = 0; i<= 1000; i++){
    let ranNum0_25 = Math.floor(Math.random() * 26);

    console.log(ranNum0_25);
}


// get a random number between 13 and 27 -> both inclusive
/*
RULE: you can use below steps if your range DOES NOT start with 0
1. Generate a random number between 0 and 1
2. Multiply this number with the count of desired numbers (how many numbers you can get in your range)
    largeNumber - smallNumber + 1   => 27 - 13 + 1   => 15
3. Floor the result
4. Add the smallerNumber to the result

Math.floor(Math.random() * (max - min + 1)) + min;
*/
let ranNum13_27 = Math.floor(Math.random() * 15) + 13;

console.log(ranNum13_27);


// get a random number between 943 and 1005 -> both inclusive
let r1 = Math.floor(Math.random() * (1005 - 943 + 1)) + 943;

console.log(r1);


// get a random number between 14 and 19 -> 14 inclusive, 19 excluded
let r2 = Math.floor(Math.random() * (18 - 14 + 1)) + 14;

console.log(r2)