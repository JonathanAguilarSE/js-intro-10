let str = 'TechGlobal';


// 1. get a substring at the beginning or in the middle -> Tech or Glo
console.log(str.substring(0, 4)); // Tech
console.log(str.slice(0, 4)); // Tech
console.log(str.substring(4, 7)); // Glo
console.log(str.slice(4, 7)); // Glo


// 2. get a substring starting from and index and going all the way until the end -> Global or bal
console.log(str.substring(4)); // GLobal
console.log(str.slice(4)); // Global
console.log(str.substring(7)); // bal
console.log(str.slice(7)); // bal

// Difference
let lan = 'JavaScript';

console.log(lan.slice(-1)); // 't'
console.log(lan.slice(-6)); // 'Script'


// Get the last 3 characters using substring()
console.log(lan.substring(7)); // will not work universally - 7 is hard coded
console.log(lan.substring(lan.length - 3));

/*
slice()
TASK: retrieve substring form another string based on the given indexes
RETURN: retruns a new substring
ARGUMENTS: takes 1 or 2 index arguments, first on eis the starting index (includeD), second is the ending index (excluded)
    NOTE: slice wil work with negative indexes as well
    NOTE: if the left index is greater than the right index, then it returns empty string
CHANGE ORIGINAL VALUE: does not modify the original value
STATIC or NON-STATIC: non-static

substring()
TASK: retrieve substring form another string based on the given indexes
RETURN: retruns a new substring
ARGUMENTS: takes 1 or 2 index arguments, first on eis the starting index (includeD), second is the ending index (excluded)
    NOTE: it will not work with negative indexes and converts them to zeros
    NOTE: if the left index is greater than the right index, it modifies to correct way and give you a meaningful substring
CHANGE ORIGINAL VALUE: does not modify the original value
STATIC or NON-STATIC: non-static
*/

console.log('Batch-10'.substring(-10, 100)); // 'Batch-10'
console.log('Batch-10'.substring(3, 100)); // 'ch-10'

