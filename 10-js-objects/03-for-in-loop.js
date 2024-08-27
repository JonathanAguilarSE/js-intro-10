const car = {
    color: 'Black',
    year: 2024,
    make: 'BMW',
    model: 'X7'
};

console.log(car['color']);
console.log(car['year']);
console.log(car['make']);
console.log(car['model']);

for(const key in car){
    console.log(`The key is "${key}" and the vues is "${car[key]}"`);
}


// for..in loop with arrays -> keys are indexes, and values are elements
const names = ['Mariia', 'John', 'Alex', 'Alex'];

for(const key in names){
    console.log(`The key is "${key}" and the value is "${names[key]}"`);
}



const person = {
    firstName: 'John',
    lastName: 'Doe',
    spouse: 'Jane Doe',
    age: 45,
    favNumber: 7,
    favCities: ['Chicago', 'Miami', 'Berlin', 'Madrid', 'Monaco'],
    address: {
        street1: '123 Chicago St',
        street2: 'APT 2',
        city: 'Chicago',
        state: 'IL',
        ZIP: 12345,
        country: 'US'
    },
    jobTitle: 'Software Engineer in Test',
    likesJS: true,
    SSN: null,
    numberOfKids: 7
};


// Log each property value as 'Property key = {key} and the value is {value}'
for(const key in person){
    console.log(`Proerty key = ${key} and the value is ${person[key]}`);
}


// Log all the favCities one by on
// Chicago
// Miami
// Berlin
for(const city of person.favCities) {
    console.log(city);
}


const cities = person.favCities;

for(let i = 0; i < cities.length; i++){
    console.log(cities[i]);
}