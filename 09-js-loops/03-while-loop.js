let written = 7;
let guess = undefined;
let attempts = 0;

while(written !== guess) {
    guess = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    console.log(guess);
    attempts++;;
}

console.log(`We got the matching number finally after ${attempts} attempts`);




// let written = 7;
// let guess = undefined;
// let attempts = 0;
// const allGuesses = [];

// while(written !== guess) {
//     guess = Math.floor(Math.random() * (10 - 1 + 1) + 1);
//     if(!allGuesses.includes(guess)) {
//         allGuesses.push(guess)
//         attempts++;
//     }
//     if(attempts === 3) {
//         console.log('You made 3 guesses already but did not win!');
//     } else {
//         console.log('You got the prize!');
//     }
// }
// console.log(`We got the matching number finally after ${attempts} attempts`);








for(let i = 1; i <= 10; i++) {
    console.log(i);
}



let num = 1;
while(num <= 10) {
    console.log(num);
    num++;
}





//Infinite loop
// while(true) {
//     console.log('Hello');
// }


