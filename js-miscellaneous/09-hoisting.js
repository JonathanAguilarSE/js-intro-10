// use finctions and variables before theyre declared

// this will work since the function is hoisted
printHi(); // Hi

// function declaration
function printHi(){
    console.log('Hi');
}

printHi(); // Hi



// variable hoisting

console.log(fname); // undefined
var fname = 'John';

/*
var fname;
console.log(fname); // undefined

fname = 'John';
*/
