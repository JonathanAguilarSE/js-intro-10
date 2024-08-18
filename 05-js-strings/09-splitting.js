let items = 'Apple, Oranges, Bananas, Eggs, Milk';

console.log(items.split(','));
console.log(items.split(' '));
console.log(items.split(', '));


let sent = 'I like JavaScript';

console.log(sent.split(' '));
console.log(sent.split('like'));

/*

Assume you are given a string having some words
Count how many words this string has

'I like JavaScript'

*/

console.log(('I like JavaScript'.split(' ')).length);

/*
split()
TASK: used to split the string into array elements with the given separator
RETURN: returns an  array of elements
ARGUMENTS: takes a string argument as separator, an optional limit argument
CHANGE ORIGINAL VALUE: does not
STATIC or NON-STATIC: non-static
*/