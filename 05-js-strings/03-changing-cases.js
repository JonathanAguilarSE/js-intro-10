// toLowerCase() vs toUpperCase()


let company = 'TechGlobal';

console.log(company.toLowerCase()); // 'techglobal'
console.log(company.toUpperCase()); // 'TECHGLOBAL'



let address = '123 St. #2, Des Plaines IL 12345';

let addressLower = address.toLowerCase();
let addressUpper = address.toUpperCase();

console.log(addressLower);
console.log(addressUpper);


/*
toUpperCase()
TASK: converts all the letters of the string to upper cases
RETURN: returns a new string
ARGUMENTS: no args/parameters
CHANGE ORIGINAL VALUE: does not modify the original values
STATIC or NON-STATIC: non-static function

toLowerCase()
TASK: converts all the letters of the string to lower cases
RETURN: returns a new string
ARGUMENTS: no args/parameters
CHANGE ORIGINAL VALUE: does not modify the original values
STATIC or NON-STATIC: non-static function
*/