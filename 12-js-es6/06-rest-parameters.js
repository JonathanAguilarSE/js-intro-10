console.log('-----Sum-----');
function sum(...values){
    let result = 0;

    for(const number of values){
        result += number;
    }
    return result;
}

console.log(sum());
console.log(sum(3));
console.log(sum(3, 5));
console.log(sum(3, 5, 10));
console.log(sum(3, 5, 10, 2, 5, 7, 12));

console.log('-----Product-----');
// function product(...values){
//     let result = 1;

//     for(const number of values){
//         result *= number;
//     }
//     return result;
// }
//
// function product(...values){
//     return values.length === 0 ? 0 : values.reduce((acc, curr) => acc *= curr, 1);
//     // if(values.length === 0) return 0;
//     // return values.reduce((acc, curr) => acc *= curr, 1);
// }

const product = (...values) => values.length === 0 ? 0 : values.reduce((acc, curr) => acc *= curr, 1);

console.log(product());
console.log(product(3));
console.log(product(3, 5));
console.log(product(3, 5, 10));
console.log(product(3, 5, 10, 2));