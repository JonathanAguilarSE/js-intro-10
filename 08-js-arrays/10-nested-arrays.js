const arr = [1, 2, [1, 2, 3, 4]];

console.log(arr.length); // 3
console.log(arr[2]); // [1, 2, 3, 4]

console.log(arr[2].length); // 4



const batch10Students = [
    [1, 2, 3],
    [4, 5],
    [6, 7, 8, 9]
];

console.log(batch10Students); // [ [ 1, 2, 3 ], [ 4, 5 ], [ 6, 7, 8, 9 ] ]
console.log(batch10Students.length); // 3


// Second student from the secnond array
batch10Students[1][1];


// console.log(batch10Students.flat());


const myArr = [1, 2, [3, [4, 5, 6], 7], 8];
const newArr = myArr.flat(1);

console.log(newArr); 