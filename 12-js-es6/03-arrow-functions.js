// fucnton declaration
function sun(a, b){
    return a+ b;
}

// arrow function
const sum = (a, b) => a + b;


// function declaration
function factorial(num){
    // if(num === 0 || num === 1) return 1;
    // else if(num < 0) throw Error('Negative number detected!!!');
    if(num < 0) throw Error('Negative number detected!!!');
    
    let result = 1;

    for(let i = 2; i <= num; i++){
        result *= i;
    }
    return result;
}

// arrow funciton
const factorial1 = (num) => {
    if(num < 0) throw Error('Negative number detected!!!');
    
    let result = 1;

    for(let i = 2; i <= num; i++){
        result *= i;
    }
    return result;
}



const person = {
    info: () => {
        console.log(this)
    }
}

person.info();