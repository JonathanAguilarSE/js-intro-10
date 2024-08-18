//Logical operations
console.log((3 == "3" || 2 + 5 === "7" ) && !(5 < 10 || !false)) // 

console.log((!true && !false) || 5 * 2 === true * 10) // 

console.log("3" * "5" >= 15 && true == 1 && " " == false && "" === 0) // 

console.log(!(5 ** (10 / 5) === 25 || 5 === "5" || 3 >= 5)) // 

console.log(!(2 + 2 === 8 / 2 && !false && 10 % 2 === 0) || 25 % 4 == "1") // 

console.log((true && false) || (10 + 5 === "15" && "apple" !== "orange")) // 

console.log(!(10 <= 20 && 3 * 2 === "6") && (5 + 5 !== 11 || false)) // 

console.log(("Hello" + "World" === "HelloWorld" || 5 > 3) && (true && !false)) //

console.log((4 >= 3 && 5 * 2 === "10") || !(7 !== "7" && "dog" === "cat")) // 

console.log((20 % 6 !== 0 && "apple" === "orange") || !(2 + 2 === 4 && true)) // 

console.log((!true && !false) && ("car" === "vehicle" || 3 ** 2 <= 10)) // 

console.log((5 + 3 >= "8" && 2 ** 3 === "8") || !(false || true)) //

console.log((10 / 2 === 5 || "hello" + "world" === "helloworld") && (5 === "5" || true)) //

console.log(("hello" !== "world" && "apple" + "pie" === "applepie") || (5 + 5 !== "10" && 7 % 2 === 0)) //

console.log((5 * 2 === 9 || true) && !(10 - 5 !== 5 && 10 % 3 === 1)) //



/*
Find if a number is even or not.
Write a program that generates a random number between 1 and 10 (both inclusive). If the random number is even, print true.
Otherwise, print false.
Examples:
1 -> false 
2 -> true 
5 -> false 
10 -> true
*/
let evenNumb = Math.floor(Math.random() * (10 - 1 + 1) + 1);

console.log(evenNumb);

if(evenNumb % 2 === 0) console.log(true);
else console.log(false);



/*
Find if a number is odd or not.
Write a program that generates a random number between 1 and 10 (both inclusive). If the random number is odd, print true.
Otherwise, print false.
Examples:
1 -> true 
2 -> false 
5 -> true 
10 -> false
*/
let oddNumb = Math.floor(Math.random() * (10 - 1 + 1) + 1);

console.log(oddNumb);

if(oddNumb % 2 !== 0) console.log(true);
else console.log(false);



/*
Find if a number is positive or not.
Write a program that generates a random number between -5 and 5 (both inclusive). If the random number is positive, print true.
Otherwise, print false.
Examples:
-5 -> false 
-1 -> false 
0 -> false 
1 -> true 
5 -> true
*/
let positiveNumb = Math.floor(Math.random() * (5 - (-5) + 1) + (-5));

console.log(positiveNumb)

if(positiveNumb > 0) console.log(true);
else console.log(false);



/*
Find if a number is negative or not.
Write a program that generates a random number between -5 and 5 (both inclusive). If the random number is negative, print true.
Otherwise, print false.
Examples:
-5 -> true -1 -> true 0 -> false 1 -> false 5 -> false
*/
let negativeNumb = Math.floor(Math.random() * (5 - (-5) + 1) + (-5));

console.log(negativeNumb);

if(negativeNumb < 0) console.log(true);
else console.log(false);



/*
Find if a number is divisible by 5 or not.
Write a program that generates a random number between 1 and 50 (both inclusive). If the random number is divisible by 5, print true.
Otherwise, print false.
Examples:
1 -> false 
5 -> true 
20 -> true 
37 -> false 
50 -> true
*/
let divisibleBy5 = Math.floor(Math.random() * (50 - 1 + 1) + 1);

console.log(divisibleBy5);

if(divisibleBy5 % 5 === 0) console.log(true);
else console.log(false);



/*
Find if a number is divisible by 7 or not.
Write a program that generates a random number between 1 and 50 (both inclusive). If the random number is divisible by 7, print true.
Otherwise, print false.
Examples:
1 -> false 
7 -> true 
35 -> true 
49 -> true 
50 -> false
*/
let divisibleBy7 = Math.floor(Math.random() * (50 - 1 + 1) + 1);

console.log(divisibleBy7);

if(divisibleBy7 % 7 === 0) console.log(true);
else console.log(false);



/*
Calculate the sum of 2 random numbers.
Write a program that generates 2 random numbers between 1 and 10 (both inclusive). Calculate the sum of the numbers and print it.
Examples: 
3,5     => 8
7,3     => 10
5,5     => 10
1, 10   => 11
10, 1   => 11
*/
let sumNumb1 = Math.floor(Math.random() * (10 - 1 + 1) + 1);
let sumNumb2 = Math.floor(Math.random() * (10 - 1 + 1) + 1);

console.log(sumNumb1);
console.log(sumNumb2);

console.log(sumNumb1 + sumNumb2)



/*
Calculate the absolute difference between 2 random numbers.
Write a program that generates 2 random numbers between 1 and 10 (both inclusive). Calculate the absolute difference of the numbers and print it.
Examples:
3,5 ->2 
7,3 ->4 
5,5 ->0 
1,10 ->9
10,1 ->9
*/
let diffNumb1 = Math.floor(Math.random() * (10 - 1 + 1) + 1);
let diffNumb2 = Math.floor(Math.random() * (10 - 1 + 1) + 1);

console.log(diffNumb1);
console.log(diffNumb2);

console.log(Math.abs(diffNumb1 - diffNumb2));



/*
Calculate the product of 2 random numbers.
Write a program that generates 2 random numbers between 1 and 10 (both inclusive). Calculate the product of the numbers and print it.
Examples:
3,5 -> 15
7,3 -> 21
5,5 -> 25
1, 10 -> 10
10, 1 - > 10
*/
let prodNumb1 = Math.floor(Math.random() * (10 - 1 + 1) + 1);
let prodNumb2 = Math.floor(Math.random() * (10 - 1 + 1) + 1);

console.log(prodNumb1);
console.log(prodNumb2);

console.log(prodNumb1 * prodNumb2);



/*
Calculate the square of a number.
Write a program that generates a random number between 1 and 10 (both inclusive). Calculate the square of the number and print it.
Examples:
1 ->1
2 ->4
5 ->25
10 -> 100
*/
let squareNum1 = Math.floor(Math.random() * (10 - 1 + 1) + 1);

console.log(squareNum1);

console.log(squareNum1 ** 2)


/*
Calculate the cube of a number.
Write a program that generates a random number between 1 and 10 (both inclusive). Calculate the cube of the number and print it.
Examples:
1 ->1
2 ->8
5 ->125
10 -> 1000
*/
let cubeNum = Math.floor(Math.random() * (10 - 1 + 1) + 1);

console.log(cubeNum);

console.log(cubeNum ** 3);



/*
Convert miles to kilometers.
Write a program that generates a random number between 1 and 10 (both inclusive) to be considered as a mile unit.
Convert miles unit to kilometers and print it.
Please assume that 1 mile equals 1.6 kilometers.
Examples:
1 -> 1.6
2 -> 3.2
5 -> 8
*/
let miles = Math.floor(Math.random() * (10 - 1 + 1) + 1);

console.log(miles);

console.log(miles * 8 / 5);
// this was done to avoid long floats. Get 1.6 to a whole number and divide by the number of times to get to whole number



/*
Convert kilograms to pounds.
Write a program that generates a random number between 1 and 100 (both inclusive) to be considered as a kilogram unit.
Convert kilogram unit to pounds and print it.
Please assume that 1 kilogram equals 2.2 pounds.
Examples:
1 ->2.2
20 ->44
75 -> 165
100 -> 220
*/
let kilogram = Math.floor(Math.random() * (100 - 1 + 1) + 1);

console.log(kilogram);

console.log(kilogram * 11 / 5);



/*
Find if 2 numbers are equal or not.
Write a program that generates 2 random numbers between 1 and 3 (both inclusive). If the numbers are equal, print true.
Otherwise, print false.
Examples:
1,1 -> true
1,2 -> false
2,3 -> false
2,2 -> true
3,3 -> false
*/
let equalOrNot1 = Math.floor(Math.random() * (3 - 1 + 1) + 1);
let equalOrNot2 = Math.floor(Math.random() * (3 - 1 + 1) + 1);

console.log(equalOrNot1);
console.log(equalOrNot2);

if(equalOrNot1 === equalOrNot2) console.log(true);
else console.log(false);



/*
Find if an age is allowed to get Driver License or not.
Write a program that generates a random number between 1 and 100 (both inclusive) to be considered as an age.
If the age is more than or equal to 16, print true.
Otherwise, print false.
Examples:
1 -> false
15 -> false
16 -> true
45 -> true
100 -> true
*/
let age = Math.floor(Math.random() * (100 - 1 + 1) + 1);

console.log(age);

if(age >= 16) console.log(true);
else console.log(false);



/*
Find the greatest number between 2 random numbers.
Write a program that generates 2 random numbers between 1 and 10 (both inclusive). Find the greatest of the numbers and print it.
Examples:
3,5 -> 5
7,3 -> 7
5,5 -> 5
1, 10 -> 10
10, 1 -> 10
*/
let greatestNum1 = Math.floor(Math.random() * (10 - 1 + 1) + 1);
let greatestNum2 = Math.floor(Math.random() * (10 - 1 + 1) + 1);

console.log(greatestNum1);
console.log(greatestNum2);

console.log(Math.max(greatestNum1, greatestNum2));



/*
Find the greatest number between 3 random numbers.
Write a program that generates 3 random numbers between 1 and 10 (both inclusive). Find the greatest of the numbers and print it.
Examples:
3,5,2 ->5
7,3,1 ->7
5,5,5 ->5
1,10,9 ->10
10,1,2 ->10
*/
let greatestNum1A = Math.floor(Math.random() * (10 - 1 + 1) + 1);
let greatestNum2A = Math.floor(Math.random() * (10 - 1 + 1) + 1);
let greatestNum3A = Math.floor(Math.random() * (10 - 1 + 1) + 1);

console.log(greatestNum1A);
console.log(greatestNum2A);
console.log(greatestNum3A);

console.log(Math.max(greatestNum1A, greatestNum2A, greatestNum3A));



/*
Find the smallest number between 2 random numbers.
Write a program that generates 2 random numbers between 1 and 10 (both inclusive). Find the smallest of the numbers and print it.
Examples:
3,5 ->3
7,3 ->3
5,5 ->5
1,10 ->1
10,1 ->1
*/
let smallestNum1 = Math.floor(Math.random() * (10 - 1 + 1) + 1);
let smallestNum2 = Math.floor(Math.random() * (10 - 1 + 1) + 1);

console.log(smallestNum1);
console.log(smallestNum2);

console.log(Math.min(smallestNum1, smallestNum2));



/*
Find the smallest number between 3 random numbers.
Write a program that generates 3 random numbers between 1 and 10 (both inclusive). Find the smallest of the numbers and print it.
Examples:
3,5,2 ->2
7,3,1 ->1
5,5,5 ->5
1,10,9 ->1
10,1,2 ->1
*/
let smallestNum1A = Math.floor(Math.random() * (10 - 1 + 1) + 1);
let smallestNum2A = Math.floor(Math.random() * (10 - 1 + 1) + 1);
let smallestNum3A = Math.floor(Math.random() * (10 - 1 + 1) + 1);

console.log(smallestNum1A);
console.log(smallestNum2A);
console.log(smallestNum3A);

console.log(`The smallest number from the group is: ${Math.min(smallestNum1A, smallestNum2A, smallestNum3A)}`);



/*
Calculate the average of 3 random numbers.
Write a program that generates 3 random numbers between 1 and 10 (both inclusive). Calculate the average of the numbers and print it.
Examples:
3,5,7 ->5
7,3,2 ->4
5,5,5 ->5
1,10,7 ->6
10,1,1 ->4
*/
let avgNum1 = Math.floor(Math.random() * (10 - 1 + 1) + 1);
let avgNum2 = Math.floor(Math.random() * (10 - 1 + 1) + 1);
let avgNum3 = Math.floor(Math.random() * (10 - 1 + 1) + 1);

console.log(avgNum1, avgNum2, avgNum3);

console.log((avgNum1 + avgNum2 + avgNum3) / 3);



/*
Calculate the absolute difference between max and min of 3 random numbers.
Write a program that generates 3 random numbers between 1 and 10 (both inclusive). Calculate the greatest and the smallest numbers and print their absolute difference.
Examples:
3,5,2 ->3
7,3,1 ->6
5,5,5 ->0
1,10,9 ->9
10,1,2 ->9
*/
let absDiffNum1 = Math.floor(Math.random() * (10 -  1 + 1) + 1);
let absDiffNum2 = Math.floor(Math.random() * (10 -  1 + 1) + 1);
let absDiffNum3 = Math.floor(Math.random() * (10 -  1 + 1) + 1);

console.log(absDiffNum1, absDiffNum2, absDiffNum3);

let newMin = Math.min(absDiffNum1, absDiffNum2, absDiffNum3);
let newMax = Math.max(absDiffNum1, absDiffNum2, absDiffNum3);

console.log(newMin, newMax)
console.log(Math.abs(newMax - newMin));



/*
Find the quarter of a random number between 1 and 100.
Write a program that generates a random number between 1 and 100 (both inclusive). Find which quarter of the range the number falls into and print it.
1st quarter is 1-25
2nd quarter is 26-50
3rd quarter is 51-75
4th quarter is 76-100

Examples:
15 -> 1st quarter
73 -> 3rd quarter
39 -> 2nd quarter
87 -> 4th quarter
*/
let randQuarterNum = Math.floor(Math.random() * (100 - 1 + 1) + 1);

console.log(randQuarterNum);

if(randQuarterNum >= 76) console.log('4th quarter');
else if(randQuarterNum >= 51) console.log('3rd quarter');
else if(randQuarterNum >= 26) console.log('2nd quarter');
else console.log('1st quarter');



/*
Find the midpoint of a random number between 1 and 100.
Write a program that generates a random number between 1 and 100 (both inclusive). Find which half of the range the number falls into and print it.
1st half is 1-50
2nd half is 51-100
Examples:
15 -> 1st half
50 -> 1st half
51 -> 2nd half
87 -> 2nd half
100 -> 2nd half
*/
let midNum1 = Math.floor(Math.random() * (100 - 1 + 1) + 1);

console.log(midNum1);

if(midNum1 <= 50) console.log('1st half');
else console.log('2nd half');



/*
Find if sum of 2 random numbers is even or not.
Write a program that generates 2 random numbers between 1 and 10 (both inclusive). If the sum of the random numbers is even, print true.
Otherwise, print false.
Examples:
3,5 -> true
7,3 -> true
5,5 -> true
1, 10 -> false
10, 1 -> false
*/
let sumOfNum1 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
let sumOfNum2 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;

console.log(sumOfNum1, sumOfNum2);

if((sumOfNum1 + sumOfNum2) % 2 === 0) console.log(true);
else console.log(false);



/*
Find if product of 2 random numbers is odd or not.
Write a program that generates 2 random numbers between 1 and 10 (both inclusive). If the product of the random numbers is odd, print true.
Otherwise, print false.
Examples:
3, 5 -> true
7, 3 -> true
5, 5 -> true
1, 10 -> false
10, 1 -> false
*/
let prodOfNum1 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
let prodOfNum2 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;

console.log(prodOfNum1, prodOfNum2);

if((prodOfNum1 * prodOfNum2) % 2 !== 0) console.log(true);
else console.log(false);



/*
Area of a rectangle
Write a function named as rectangleArea()which calculates the area of a rectangle when invoked. NOTE: Assume the sides of the rectangle are x and y.
Conversion Formula: Area = x * y
*/
function rectangleArea(x, y) {
    return x * y;
};

console.log(rectangleArea(2, 5));



/*
Perimeter of a rectangle.
Write a function named as rectanglePerimeter() which calculates the perimeter of a rectangle when invoked.
NOTE: Assume the sides of the rectangle are x and y.
Conversion Formula: Perimeter = 2 * (x + y)
*/
function rectanglePerimeter(x, y) {
    return 2 * (x + y);
};

console.log(rectanglePerimeter(2, 4));



/*
Area of a square
Write a function named as squareArea() which calculates the area of a square when invoked. NOTE: Assume the side of the square is x.
Conversion Formula:Area = x * x
*/
function squareArea(x) {
    return x * x;
};

console.log(squareArea(3));



/*
Perimeter of a square.
Write a function named as squarePerimeter() which calculates the perimeter of a square when invoked. NOTE: Assume the side of the square is x.
Conversion Formula: Perimeter = 4 * x
*/
function squarePerimeter(x) {
    return 4 * x;
};

console.log(squarePerimeter(4));


/*
Double The Word
Write a function named as doubleWord() which takes a string word as an argument and returns the given word back doubled when invoked.
NOTE: Assume you will not be given an empty word.
Examples:
doubleWord("Tech") -> "TechTech" 
doubleWord("Global") -> "GlobalGlobal"
*/
function doubleWord(str) {
    return str.repeat(2);
};

console.log(doubleWord('John'));



/*
First Character
Write a function named as firstCharacter() which takes a string word as an argument and returns the first character of the given word when invoked.
NOTE: Assume you will not be given an empty word.
Examples:
firstCharacter("Tech") -> "T"
firstCharacter("Global") -> "G"
*/
function firstCharacter(str) {
    return str[0];
};

console.log(firstCharacter('John'));



/*
First Two Characters
Write a function named as firstTwoCharacters() which takes a string word as an argument and returns the first two characters of the given word when invoked.
NOTE: If the given word does not have 2 or more characters, then return the given string back.
*/
function firstTwoCharacters(str) {
    if(str.length >= 2) return str.slice(0,2);
    return str;
};

console.log(firstTwoCharacters('Tech'));
console.log(firstTwoCharacters(''));



/*
Last Character
Write a function named as lastCharacter() which takes a string word as an argument and returns the last character of the given word when invoked.
NOTE: Assume you will not be given an empty word.
*/
function lastCharacter(str) {
    return str.at(-1);
};

console.log(lastCharacter('Tech'));



/*
Last Two Characters
Write a function named as lastTwoCharacters() which takes a string word as an argument and returns the last two characters of the given word when invoked.
NOTE: If the given word does not have 2 or more characters, then return the string back.
*/
function lastTwoCharacters(str) {
    if(str.length >= 2) return str.slice(-2);
    return str;
};

console.log(lastTwoCharacters('Tech'));
console.log(lastTwoCharacters(' '));



/*
First and Last Characters
Write a function named as firstLast() which takes a string word as an argument and returns the first and the last characters of the given word when invoked.
NOTE: If the given word does not have 2 or more characters, then return the string back.
*/
function firstLast(str) {
    if(str.length >= 2) return str[0] + str.at(-1);
    return str;
};

console.log(firstLast('Tech'));
console.log(firstLast('1'));



/*
Has Five
Write a function named as hasFive() which takes a string word as an argument and returns true if given string has at least 5 characters, and false otherwise when invoked.
*/
function hasFive(str) {
    if(str.length >= 5) return true;
    return false;
};

console.log(hasFive('TechGlobal'));
console.log(hasFive(''));



/*
Middle
Write a function named as middle() which takes a string word as an argument and returns the middle character if the string has odd length, and returns the middle two characters if the string has even length when invoked.
NOTE: If the given word is empty, then return the empty string back.
*/
function middle(str) {
    if(str.length === 0) return '';
    else if(str.length % 2 !== 0) return str[Math.floor(str.length / 2)];
    return str[(str.length / 2) - 1] + str[(str.length / 2)];
};

console.log(middle('abcde'));
console.log(middle('TechGlobal'));
console.log(middle(''));



/*
Longer String
Write a function named as longer() which takes two string words as arguments and returns the string that has more characters when invoked.
NOTE: If both of the words have the same length, then return the first string.
*/
function longer(str1, str2) {
    if(str1.length === str2.length) return str1;
    else if(str1.length > str2.length) return str1;
    return str2;
};

console.log(longer('Tech', 'Global'));
console.log(longer('Hi', 'Hello'));
console.log(longer('Hello', 'World'));



/*
Shorter String
Write a function named as shorter() which takes two String words as arguments and returns the String that has less characters when invoked.
NOTE: if both of the words have the same length, then return the second String.
*/
function shorter(str1, str2) {
    if(str1.length === str2.length) return str2;
    else if(str1.length > str2. length) return str2;
    return str1
};

console.log(shorter('Tech', 'Global'));
console.log(shorter('Hello', 'Hi'));
console.log(shorter('Hello', 'World'));



/*
Concat Two String
Write a function named as concat() which takes two string words as arguments and returns the words concatenated when invoked.
NOTE: Concatenation should always be as first string + second string.
*/
function concat(str1, str2) {
    return str1 + str2;
};

console.log(concat('Tech', 'Global'));
console.log(concat('Hello', 'World'));
console.log(concat('', 'abc'));



/*
Starts with Vowel
Write a function named as startsVowel() which takes a string word as an argument and returns true if given string starts with a vowel letter, and false otherwise when invoked.
NOTE: Vowel letters are A, E, O, U, I, a, e, o, u, i.
*/
function startsVowel(str) {
    return 'aeiou'.includes(str.toLowerCase()[0]);
};

console.log(startsVowel('Apple'));
console.log(startsVowel('abc'));
console.log(startsVowel('Tech'));
console.log(startsVowel('tech'));
console.log(startsVowel('123'));
 

// or using a for-of loop to check if the entire string contains a vowel

// function hasVowel(str) {
//     let vowels = ['a', 'e', 'i', 'o', 'u'];
//     for(let char of str.toLowerCase()) {
//         if (vowels.includes(char)) {
//             return true;
//         }
//     }
//     return false;
// }

console.log(hasVowel('psych'));