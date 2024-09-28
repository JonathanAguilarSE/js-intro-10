// Calculate BMI of a user
// Show result inside result div (you can use append())
// Attach proper event listeners to inputs and button

// BMI formula: https://www.inchcalculator.com/wp-content/uploads/2021/05/bmi-formula.png

const btnClick = document.getElementById('btnclick');

btnClick.addEventListener('click', (event) => {
    event.preventDefault();
    
    const height = Number(document.getElementById('height').value);
    const weight = Number(document.getElementById('weight').value);
    
    if(height && weight){
        const bmi = (weight / Math.pow(height / 100, 2)).toFixed(2);
        let result = `Your BMI is ${bmi} - `;
        
        if (bmi < 18.6) result += 'Underweight';
        else if (bmi <= 24.9) result += 'Normal Range';
        else result += 'Overweight';
        
        document.getElementById('results').innerHTML = result;
    } else {
        document.getElementById('results').innerHTML = 'Please enter height and weight'
    }
});

// from chatGPT, wanted to play around and try resetting input fields after result is returned
document.getElementById('height').addEventListener('focus', resetInputField);
document.getElementById('weight').addEventListener('focus', resetInputField);

function resetInputField(event) {
    event.target.value = '';
    document.getElementById('results').innerHTML = '';
}
