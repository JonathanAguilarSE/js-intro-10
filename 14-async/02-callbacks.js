const { Cypress } = require('../utils/Cypress.js');

// Asynchronous way - PROBLEM
// Cypress.visit('techglobal-training.com');
// Cypress.login('techglobal', 'Test1234');
// Cypress.validateLoginMessage('You are logged in');

// using same methods with callbacks
// Cypress.visit1('techglobal-training.com', () => {
//     Cypress.login1('techglobal', 'Test1234', () => {
//         Cypress.validateLoginMessage1('You are logged in');
//     })
// })


// using same methods with promises added -> using then
Cypress.visit2('techglobal-training.com')
    .then(() => Cypress.login2('TechGlobal', 'Test1234'))
    .then(() => Cypress.validateLoginMessage2('You are logged in'));