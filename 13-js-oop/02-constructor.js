// TASK: Create a Teacher prototype with fname, lname, age, field properties

// Create 2 Teacher Prototype methods as teach and giveHomework with empty bodies

// Create 3 Teacher Objects


// BEFORE ES6
// function Teacher(fname, lname, age, field){
//     this.fname = fname;
//     this.lname = lname;
//     this.age = age;
//     this.field = field
// }

// Teacher.prototype.teach = function(){
//     console.log(`${this.fname} teaches ${this.field}`);
// };

// Teacher.prototype.giveHomework = function(){
//     console.log(`${this.fname} gives homework!`);
// };

// const teacher1 = new Teacher('Tom', 'Cruise', 62, 'Math');
// const teacher2 = new Teacher('Tom', 'Hanks', 68, 'Science');
// const teacher3 = new Teacher('Salma', 'Hayek', 58, 'English');

// Store all the ages in an array -> 
// Store all the first names in an array -> 
// Find and print the information of the oldest teacher ->


// const teachers = [teacher1, teacher2, teacher3];

// const ages = teachers.map(teacher => teacher.age);
// console.log(ages);

// const firstNames = teachers.map(teacher => teacher.fname);
// console.log(firstNames);

// const oldestTeacher = teachers.reduce((oldest, teacher) => teacher.age > oldest.age ? teacher : oldest, teachers[0]);
// console.log(oldestTeacher);




// Replicate this work with ES6 Classes as well

class Teacher {
    constructor(fname, lname, age, field){
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.field = field
    }
    teach(){
        console.log(`${this.fname} teaches ${this.field}`);
    }
    giveHomework(){
        console.log(`${this.fname} gives homework!`);
    }
}

const teacher1 = new Teacher('Tom', 'Cruise', 62, 'Math');
const teacher2 = new Teacher('Tom', 'Hanks', 68, 'Science');
const teacher3 = new Teacher('Salma', 'Hayek', 58, 'English');

teacher1.teach(); // Tom teaches Math
teacher3.giveHomework(); // Salma gives homework!


const teachers = [teacher1, teacher2, teacher3];

const ages = teachers.map(teacher => teacher.age);
console.log(ages);

const firstNames = teachers.map(teacher => teacher.fname);
console.log(firstNames);

const oldestTeacher = teachers.reduce((oldest, teacher) => oldest.age > teacher.age ? oldest : teacher, teachers[0]);
console.log(oldestTeacher);


// Store all the ages in an array -> 
// Store all the first names in an array -> 
// Find and print the information of the oldest teacher ->