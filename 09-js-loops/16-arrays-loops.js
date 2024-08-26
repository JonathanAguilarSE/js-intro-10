const nums = [-1, 1, 3, 0, 2, 6, 8];

console.log('<----------TASK01---------->');
// Find the first even number from the array -> 0
let firstEven;

for(let i = 0; i <+ nums.length - 1; i++) {
    if(i % 2 === 0) console.log (i);
    break;
}
//OR
for(const num of nums){
    if(num % 2 ===0) {
        firstEven = num;
        break;
    }
}
console.log(firstEven);
// OR
console.log(nums.find(x => x % 2 ===0));


console.log('<----------TASK02---------->');
// Find the first city that has the odd length -> Chicago
const cities = ['Berlin', 'Rome', 'Chicago', 'Kyiv', 'Istanbul', 'Tokyo'];

let firstOddLengthCity;

for(const city of cities){
    if(city.length % 2 !== 0){
        firstOddLengthCity = city;
        break;
    }
}
console.log(firstOddLengthCity);


console.log('<----------TASK03---------->');
// Find all cities that have length more than 5 -> Berlin, Chicago, Istanbul
const allLongCityLength = [];

for(const city of cities){
    if(city.length > 5) allLongCityLength.push(city);
}
console.log(allLongCityLength);

// OR
console.log(cities.filter(city => city.length > 5));


console.log('<----------TASK04---------->');
// Find all cities that has i or I in it -> ['Berlin', 'Chicago', 'Kyiv', 'Istanbul']
console.log(cities.filter(city => city.toLowerCase().includes('i')));