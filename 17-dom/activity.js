let userName = prompt('What is your name?');
if(userName && userName.length > 0) alert(`Welcome, ${userName}`);
else console.log('You did not provide a name');

const toContinue = confirm('Do you wish to continue?');
if(toContinue){
    alert('You chose to conitnue.');
} else {
    alert('You chose not to continue.');
}

console.log(`Your inner screen sizes are height: ${innerHeight} and width: ${innerWidth}.`);
