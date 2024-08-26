const favMovies = [ 'Harry Potter', 'Godfather', 'Lord of the Rings' ];

// let myFav1 = favMovies[0];
// let myFav2 = favMovies[1];
// let myFav3 = favMovies[2];

let [ myFav1, myFav2, myFav3 ] = favMovies;


console.log(myFav1); // 'Harry Potter'
console.log(myFav2); // 'Godfather'
console.log(myFav3); // 'Lord of the Rings'





const numbers = [ -3, 10, 0, 100, 200 ];
// ten, zero, twoHundred

// let ten = numbers[1];
// let zero = numbers[2];
// let twoHundred = numbers[4];

let [ , ten, zero,  , twoHundred] = numbers;


console.log(ten);
console.log(zero);
console.log(twoHundred);