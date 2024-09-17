class Engineer{
    #haveDegree = true;
    constructor(fname, lname){
        this.fname = fname;
        this.lname = lname;
    }

    // encapsulation: providing public getters and setters
    // provide getters: only read/get/retrieve access is granted
    // provide setters: only write/update access is granted
    getHaveDegree(){
        return this.#haveDegree;
    }
    setHaveDegree(bool){
        this.#haveDegree = bool;
    }
}

const e1 = new Engineer('John', 'Doe');
const e2 = new Engineer('Alex', 'Smith');

console.log(e1);

// private access;
// console.log(e1.#haveDegree); // '#haveDegree' is not accessible outside class 'Engineer' because it