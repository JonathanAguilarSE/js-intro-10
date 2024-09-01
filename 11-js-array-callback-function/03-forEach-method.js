const names = ['James', 'John', 'Alex', 'Mariia'];


console.log('\n-------iteration of arrays with for...of loop-------\n');

for(const name of names){
    console.log(name);
}


console.log('\n-------iteration of arrays with for loop-------\n');

for(let i = 0; i< names.length; i++){
    console.log(names[i]);
}


console.log('\n-------iteration of arrays with forEach method-------\n');

const printName = function (name){
    console.log(name);
}

names.forEach(printName);


console.log('\n-------iteration of arrays with forEach method - uppercased-------\n');
// Print each name uppercased
names.forEach((name) => console.log(name.toUpperCase()));


console.log('\n-------iteration of arrays with forEach method - first-last letters-------\n');
names.forEach((name) => console.log(name[0].toUpperCase() + name.slice(-1)));


console.log('\n-------iteration of arrays with forEach method - names with 4 letters-------\n');
names.forEach((name) => {
    if(name.length === 4) console.log(name);
})



console.log('\n-------iteration of arrays with forEach method - length of names-------\n');
let nameLength = [];

names.forEach((name) => nameLength.push(name.length));

console.log(nameLength); // [ 5, 4, 4, 6 ]


console.log('\n-------iteration of arrays with map method - length of names-------\n');
console.log(names.map((name) => nameLength.length));
// or
const result = names.map((name) => nameLength.length);
console.log(result); // [ 5, 4, 4, 6 ]



