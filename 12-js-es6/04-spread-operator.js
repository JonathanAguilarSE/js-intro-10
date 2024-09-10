// spreading arrays

const numbers1 = [1, 2, 3, 4];

const numbers2 = [...numbers1, 5, 6];

console.log(numbers2);

// max number = 6
// min number = 1

console.log(Math.max(...numbers2));
console.log(Math.min(...numbers2));

let max = Number.MIN_VALUE;



// find the max and min with looping - takes longer - spread makes it easier
for(const number of numbers2){
    if(number > max) max = number;
}
console.log(max);


let min = Number.MIN_VALUE;

for(const number of numbers2){
    if(number < min) min = number;
}
console.log(min);




const person = {
    fname: 'John',
    lname: 'Doe',
    age: 25
};

const student = {
    ...person,
    program: 'SDET'
};

console.log(person);
console.log(student);