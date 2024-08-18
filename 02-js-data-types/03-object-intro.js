const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    email: 'johndoe@gmail.com',
    phone: '000-000-00000'
};

console.log(user);
console.log(typeof user);

// getting a specific information of the object
//let abc = user.firstName;
//let xyz = user.lastName;
console.log(user.firstName); // dot notation
console.log(user['email']); // bracket notation; same as dot notation

// updating th eproperty values using dot notation or bracket notation
user.firstName = 'Alex';
user['phone'] = '111-111-1111';

console.log(user.firstName);
console.log(user['phone']);

//adding a new property to an object
user.password = 'test1234';

console.log(user);

//removing a property from an object
delete user.age;
delete user['lastName'];

console.log(user);
