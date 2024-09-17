const myPromise = new Promise((resolve, reject) => {
    let mode = true;
    if(mode) resolve('SUCCESS');
    reject('FAILURE');
});

console.log(myPromise);


// A method returning promise
function testAge(age){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(age >= 16) resolve('Age is allowed!');
            else reject('Age is NOT allowed!');
        }, 2000)
    })
}

testAge(15)
    .then((successMessage) => {console.log(successMessage)})
    .catch((errorMessage) => {console.log(errorMessage)})