const obj = {
    first_name: 'Adam',
    last_name: 'Smith',
    date_of_birth: 1970,
    isAlive: false
}

// to send this JS object to server, we need to convert to JSON string
// Serialization
// Reason for serialization to send data to server: 
let jsoonObject = JSON.stringify(obj);

console.log(obj);
console.log(jsoonObject);


// JSON string
let student = `{
    "DOB": "2000-10-10",
    "EMAIL": "johnabc@abc.com",
    "FIRST_NAME": "John",
    "LAST_NAME": "Doe",
    "INSTRUCTOR_ID": 1
    }`

//To be able to read the KSON string values, we need to conveet it to JS object
// eserialization
// Reason for deserialization is to read data easier

const JSObject = JSON.parse(student);

console.log(student);
console.log(JSObject);
console.log(JSObject.FIRST_NAME);
console.log(JSObject.LAST_NAME);
console.log(JSObject.EMAIL);




// REAL EXAMPLE
/*
Go to 
*/