const {Actions} = require('../utils/Actions.js');


function test1(){
    Actions.visitUrl('https://www.techglobal-training.com/')
        .then((message) => {
            console.log(message);
            return Actions.login('TechGlobal', 'Test1234')
        })
        .then((message) => {
            console.log(message);
            return Actions.validateTitle('Title');
        })
        .then((message) => {
            console.log(message);
        })
        .catch((err) => console.log(err))
}

test1();


async function test2(){
    try {
        console.log(await Actions.visitUrl('https://www.techglobal-training.com/'));
        console.log(await Actions.login('TechGlobal', 'Test1234'));
        console.log(await Actions.validateTitle('Title'));
    }
    catch(err) {
        console.log(err);
    }
}

test2();