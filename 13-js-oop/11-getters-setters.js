class Account{
    constructor(username, password){
        username = this.setUsername(username);
        password = this.setPassword(password);
    }
    setUsername(username){
        if(username) this.username = username;
        else throw new Error('Username cannot be empty!!!')
    }
    getUsername(){
        return this.username;
    }

    setPassword(password){
        if(password.length >= 8) this.password = password;
        else throw new Error('Pasword should have length of 8 at least!!!')
    }
    getPassword() {
        return this.password;
    }
}


const myAccount = new Account('TechGlobal', 'Test1234');


// Getting
console.log(myAccount.username); // TechGlobal
console.log(myAccount.password); // Test1234

// Updating password
myAccount.password = 'ABCD';

console.log(myAccount.password);