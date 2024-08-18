const { getRandomNumber } = require('../utils/MathHelper.js');



let r1 = getRandomNumber(1, 10);

console.log(r1);

if(r1 === 1) console.log('3 Points');
else if(r1 === 2) console.log('2 Points');
else if(r1 === 3) console.log('1 Point');
else console.log('0 Point');


switch(r1) {
    case 1: 
        console.log('3 Points');
        break;
    case 2:
        console.log('2 Points');
        break;
    case 3:
        console.log('1 Point');
        break;
    default: 
        console.log('0 Point');
}



const date = new Date();

// console.log(date.getDate()); // 5
// console.log(date.getMonth()); // 7 (August; starts with 0)
// console.log(date.getFullYear()); // 2024
// console.log(date.getDay()); // 1 (Monday)
// console.log(date.getHours()); // 19
// console.log(date.getMinutes()); // 29
// console.log(date.getTime()); // in milliseconds from midnight to current time

// console.log(date.toLocaleTimeString()); // 8:32:00 PM
// console.log(date.toLocaleDateString()); // 8/5/2024





// if(day >= 1 && day <= 5) console.log('WEEKDAY');
// else console.log('WEEKEND');

// if(day !== 0 && day !== 6) console.log('WEEKDAY');
// else console.log('WEEKEND');

// if(day === 0 || day === 6) console.log('WEEKEND');
// else console.log('WEEKDAY');

let day = new Date().getDay(); // returns 0 to 6 inclusive

console.log(day);

switch(day) {
    case 0:
    case 6:
        console.log('WEEKEND');
        break;
    default:
        console.log('WEEKDAY');
}

// switch(day === 0 || day === 6) {
//     case true: 
//         console.log('WEEKEND');
//         break;
//     default: 
//         console.log('WEEKDAY');
// }



/*
Find and print the quarter that our r2 is in
1 and 25 inclusive  -> print 'FIRST'
26 and 50 inclusive  -> print 'SECOND'
51 and 75 inclusive  -> print 'THIRD'
76 and 100 inclusive  -> print 'FOURTH'
*/

let r2 = getRandomNumber(1, 100);

console.log('The random number is', r2);

if(r2 >= 76) console.log('FOURTH');
else if(r2 >= 51) console.log('THIRD');
else if(r2 >= 26) console.log('SECOND');
else console.log('FIRST');


switch(true){
    case r2 <= 25:
        console.log('FIRST');
        break;
    case r2 <= 50:
        console.log('SECOND');
        break;
    case r2 <= 75:
        console.log('THIRD');
        break;
    default:
        console.log('FOURTH');
}