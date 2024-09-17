console.log(Math.PI); // PI is a static property of Math prototype

console.log(Math.max(1, 2)); // max() is a static method of Math prototype


/*
static keyword
static methods-properties: can be invoked/accessed with the className or prototype

*/

class AmazonAccount{
    variable1 = 'Hello';
    static variable2 = 'World';
    // static methods can be invoked by their class or their prototype name
    static aFunction(){
        console.log('STATIC METHOD');;
    }
    // non-static methods can be invoked by the object of this class or prototype
    bFunction(){
        console.log('NON-STATIC METHOD');
    }
}

AmazonAccount.aFunction();

// const aa = new AmazonAccount();
// aa.aFunction();
// aa.bFunction();

AmazonAccount.aFunction();


// Static methods
Array.isArray();
Object.entries();
Object.keys();
Object.values();
Object.create();
Math.max();
Math.min()
Number.isInteger();


// Static properties
Math.PI;
Number.MAX_VALUE;
Number.MIN_VALUE;
Number.MAX_SAFE_INTEGER;