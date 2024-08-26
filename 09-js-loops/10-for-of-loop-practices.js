const names = [ 'John', 'Jane', 'Alex', 'Max', 'james' ];

// Log each name
for(let i = 0; i <= names.length - 1; i++){
    console.log(names[i]);
}


for(let name of names){
    console.log(name);
}


// let jList = [];
// for(let name of names){
//     if(name[0].toLowerCase() === 'j') jList.push(name);
// }
// console.log(jList.length);

let jCount = 0;

for(let name of names){
    if(name[0].toLowerCase() === 'j') jCount++;
}
console.log(jCount);


// Count how many names have a length of 4 -> 3
let lengthOf4 = 0
for(let name of names){
    if(name.length === 4) lengthOf4++;
}
console.log(lengthOf4);