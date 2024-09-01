// Array destructuring
const arr = ['abc', 'xyz', 'hi', 'hello'];

// let first = arr[0];
// let second = arr[1];
// let third = arr[2];
// let fourth= arr[3];

const [first, second, third, fourth] = arr;

arr[0] = 'ABC';

console.log(first);


// Object destructuring
const account = {
    username: 'TchGlobalSchool',
    email: 'tgschool@gmail.com',
    password: 'Test1234'
};

const {username, email, password} = account;