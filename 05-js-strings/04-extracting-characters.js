// property access with [] vs charAt() vs charCodeAt() vs at()

let str = 'TechGlobal';

// Get first character
console.log(str[0]); // T
console.log(str.charAt(0)); // T
console.log(str.charCodeAt(0)); // 84
console.log(str.at(0)); // T

// Get the last character
console.log(str[str.length - 1]);  // 'l'
console.log(str.charAt(str.length - 1));  // 'l'
console.log(str.at(str.length - 1));  // 'l'


let city = 'Rome';

console.log(city[-1]); // undefined
console.log(city.charAt(-1)); // ''
console.log(city.at(-1)); // 'e'

console.log(city[4]); // undefined
console.log(city.charAt(4)); // ''
console.log(city.at(4)); // undefined


/*
[] property access is most used when getting characters starting from left index (0)
    [0] returns the first character
    [1] returns the second character
at() method is useful getting characters starting from left index using negative indices
    at(-1) returns the last character
    at(-2) returns the second last character

[] property access
TASK: gets a single character from the string using an index
RETURN: returns the single character as a string
    Note: it returns undefined if the given index is not valid for the string
ARGUMENTS: index
CHANGE ORIGINAL VALUE: does not modify the original value
STATIC or NON-STATIC: non-static function

charAt()
TASK: gets a single character from the string using an index
RETURN: returns the single character as a string
    Note: it returns empty string ('') if the given index is not valid for the string
ARGUMENTS: index
CHANGE ORIGINAL VALUE: does not modify the original value
STATIC or NON-STATIC: non-static function

charCodeAt()
TASK: gets a single character's Unicode - ASCII Decimal representation from the string using an index
RETURN: returns the single character's Unicode - ASCII Decimal representation as a number
    Note: it returns NaN if the given index is not valid for the string
ARGUMENTS: index
CHANGE ORIGINAL VALUE: does not modify the original value
STATIC or NON-STATIC: non-static function

at()
TASK: gets a single character from the string using an index - NOTE: 
RETURN: returns the single character as a string
    Note: it returns empty string ('') if the given index is not valid for the string
ARGUMENTS: index
CHANGE ORIGINAL VALUE: does not modify the original value
STATIC or NON-STATIC: non-static function
*/