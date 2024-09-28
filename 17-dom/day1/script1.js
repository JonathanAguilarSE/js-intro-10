console.log('This is a js file')

// test/qa, dev, prod(no error) -> hot fix

// client, server

// window
console.log('window', window); // window in cliet environment is an object
console.log(typeof window); // object

// In server side window is undefined

/**
 * Alert
*/

// window.alert('Hi');
// const alertAns = alert('How are you?');
// console.log(alertAns); // undefined

/**
 * Prompt
*/

// const ans = prompt('How are you today?');
// console.log(ans); // String if answered, null if cancelled, empty string if no answer

/**
 * Confirm
*/

// const confirmAns = confirm('Are you ready to enter?');
// console.log(confirmAns); // true or false

/**
 * innerHeight and innerWidth
*/

console.log(innerHeight, innerWidth); // both return a number

/**
 * LocalStorage
 * - setItem()
 * - getItem()
 */

localStorage.setItem('username', 'tg20');

const username = localStorage.getItem('username');
console.log(username);

localStorage.removeItem('username');

localStorage.setItem('username2', 'tg2020');
localStorage.setItem('username3', 'tg202020');

// localStorage.clear();

