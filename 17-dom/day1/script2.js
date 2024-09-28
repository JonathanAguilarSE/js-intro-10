/**
 * getElementById()
 * - gets element by ID
 */

const heading = document.getElementById('heading');
console.log(heading);

/**
 * getElementByClassName()
 * - returns all elements with the same class name  in HTMLCollection
 * -HTMLCollection is just like an array
 */

const boxes = document.getElementsByClassName('box');
console.log(boxes); // HTMLCollection ~ Array

boxes[0];
boxes.item(0);

// TypeError: boxes.forEach is not a function
// boxes.forEach(element => {
//     console.log(element);
// })

for(let i = 0; i < boxes.length; i++){
    const element = boxes[i];
    console.log(element);
}

/**
 * getElementsByTagName()
 * - gets all elememts with same tag
 * - returns HTMLCollection
 */

const sections = document.getElementsByTagName('section');
console.log(sections);

// TypeError: boxes.forEach is not a function
// sections.forEach(element => {
//     console.log(element);
// })

for(let i = 0; i < sections.length; i++){
    const element = sections[i];
    console.log(element);
}

/**
 * querySelector
 * - universal way of getting elements
 * - similar to CSS put # before ID and . before class name
 */

const heading2 = document.querySelector('#heading');
const heading3 = document.querySelector('h1');
const heading4 = document.querySelector('.heading');

console.log(heading2);
console.log(heading3);
console.log(heading4);

const boxes2 = document.querySelector('.box');
console.log(boxes2); // Only returns first element

/**
 * querySelectorAll()
 * - universal method to get all matching elements
 * - returns NodeList, similar to Array
 * - in NodeList .forEach() works
 */

const boxes3 = document.querySelectorAll('.box');
console.log(boxes3); // NodeList(3)

boxes3.forEach(el => console.log(el));

const boxEntries = boxes3.entries();
console.log(boxEntries);

for(const entry of boxEntries){
    console.log(entry);
}