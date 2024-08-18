let str = 'I like apple and pineapple';

// replace apple with orange
console.log(str.replace('apple', 'orange')); // 'I like orange and pineapple'


// replace all instances/occurrences of apple with orange
console.log(str.replaceAll('apple', 'orange')); // 'I like orange and pineorange'

/*
replace()
TASK: used to replace an occurrence of a substring within the original string
RETURN: returns a new string with the replaced value
ARGUMENTS: takes two arguments; targer (substring to be replaced) and source: is the new value
CHANGE ORIGINAL VALUE: does not
STATIC or NON-STATIC: non-static
*/

console.log('Hello everyone'.replaceAll('e', 'a').replaceAll('o', 'U'));