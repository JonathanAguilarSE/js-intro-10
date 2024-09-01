/*
Create a student object with below info
firstName : Alex
lastName : Smith
hobbies : Soccer - Watching movies
exam_scores : midterm: 60 and final: 90

Output your object to the console
*/

const student = {
    firstName: 'Alex',
    lastName: 'Smith',
    hobbies: ['Soccer', 'Watching movies'],
    exam_scores: {
        midterm: 60,
        final: 90
    }
};

console.log(student);


console.log(student['hobbies']);
console.log(student.exam_scores);
console.log(student['hobbies'][0]);

// Find and print avg of exam scroes -> 75
const {exam_scores} = student;

console.log((exam_scores.midterm + exam_scores.final) / 2);


const allScores = Object.values(student.exam_scores);

let sum = 0

for(const score of allScores){
    sum += score;
}
console.log(sum / allScores.length); // 75



const books = [
    {
      name: "Amok",
      author: {
        fname: "Stefan",
        lname: "Zweig",
      },
      genre: "Novella",
    },
    {
      name: "My Name Is Red",
      author: {
        fname: "Orhan",
        lname: "Pamuk",
      },
      genre: "Historical Novel",
    },
    {
      name: "1984",
      author: {
        fname: "George",
        lname: "Orwell",
      },
      genre: "Dystopian Literature",
    },
];
  
// Count the books where Author first name has an 'a' -> 2
// let authorWithA = 0;

// for(i = 0; i < books.length; i++){
    //     if(book[i].author.fname.toLowerCase().includes('a')) authorWithA++;
    // }
    
    // console.log(authorWithA);
    
let authorWithA = 0;

for(const book of books){
    if(book.author.fname.toLowerCase().includes('a')) authorWithA++;    
}
console.log(authorWithA);



// Get all the names of the books in an array -> [ 'Amok', 'My Name Is Red', '1984' ]
let booksArray = [];
for(const book of books){
    booksArray.push(book.name);
}
console.log(booksArray);



const bookNames = [];
books.forEach(book => bookNames.push(book.name));
console.log(bookNames);


console.log(books.map(book => book.name));