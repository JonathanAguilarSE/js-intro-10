// startWith() vs endsWith() vs includes()

let str = 'TechGlobal';

console.log(str.startsWith('Hi')); // false
console.log(str.startsWith('Tech')); // true
console.log(str.startsWith('T')); // true
console.log(str.startsWith('t')); // false
console.log(str.startsWith('')); // true - there are spaces before and after every string letter
console.log(str.startsWith('TechGlobal')); // true


console.log(str.endsWith('apple')); // false
console.log(str.endsWith('obal')); // true
console.log(str.endsWith('la')); // false
console.log(str.endsWith('l')); // true
console.log(str.endsWith('Global')); // true
console.log(str.endsWith('TechGlobal')); // true
console.log(str.endsWith('')); // true


console.log(str.includes('G')); // true
console.log(str.includes('oab')); // false
console.log(str.includes('')); // true
console.log(str.includes('TechGlobal')); // true
console.log(str.includes('Tech')); // true
console.log(str.includes('Global')); // true
console.log(str.includes('tech')); // false


/*
startsWith()
TASK: checks if the string starts with another substring
RETURN: returns a boolean
ARGUMENTS: takes a substring as an argument/parameter
CHANGE ORIGINAL VALUE: does not modify the original value
STATIC or NON-STATIC: non-static function

endsWith()
TASK: checks if the string ends with another substring
RETURN: returns a boolean
ARGUMENTS: takes a substring as an argument/parameter
CHANGE ORIGINAL VALUE: does not modify the original value
STATIC or NON-STATIC: non-static function

includes()
TASK: checks if the string includes any substring
RETURN: returns a boolean
ARGUMENTS: takes a substring as an argument/parameter
CHANGE ORIGINAL VALUE: does not modify the original value
STATIC or NON-STATIC: non-static function
*/

// indoxOf() vs lastIndexOf()
let message = 'Can I can a can?';

message[4]; // 'I'

message.charAt(4); // 'I'
message.indexOf('I'); // 4
message.indexOf('?'); // 15
message.lastIndexOf('I');
message.lastIndexOf('?');

console.log(message.indexOf('can')); // 6 - lower case specific
console.log(message.lastIndexOf('can')); // 12

console.log(message.indexOf('Can')); // 0
console.log(message.lastIndexOf('Can')); // 0

message.indexOf(''); // 0
message.lastIndexOf(''); // 16

message.indexOf('A'); // -1
message.indexOf('apple'); // -1
message.indexOf('CAN'); // -1


/*
indexOf()
TASK: checks if the string caontains/includes another substring
RETURN: returns the first index of the first found matchas a number
    Note: retunrs -1 if it cannot find the substring within the original string
ARGUMENTS: takes a substring as an argument
CHANGE ORIGINAL VALUE: does not modify the original value
STATIC or NON-STATIC: non-static function

lastIndexOf()
TASK: checks if the string caontains/includes another substring
RETURN: returns the first index of the last found matchas a number
    Note: retunrs -1 if it cannot find the substring within the original string
ARGUMENTS: takes a substring as an argument
CHANGE ORIGINAL VALUE: does not modify the original value
STATIC or NON-STATIC: non-static function
*/