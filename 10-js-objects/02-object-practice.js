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


// Find and print person's city and state -> 'Chicago, IL'
console.log(`${person.address.city}, ${person.address.state}`);


// Find and print person's favCities -> ['Chicago', 'Miami', 'Berlin', 'Madrid', 'Monaco']
console.log(person.favCities);


// Print 'GOOD GUY' if the person likes JS, or 'STAY AWAY GUY' otherwise -> 'GOOD GUY'
console.log(person.likesJS ? 'GOOD GUY' : 'STAY AWAY GUY');