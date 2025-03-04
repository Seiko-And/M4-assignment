/* File name: 05-marco-polo.js
   Create the Countdown
   This application that counts down to 0 based on the number that 
   a user passes into a prompt. 
   If the number is 10, it should count down from 10 to 0. 
   If the number is 100, it should count down from 100 to 0 and so on.  */

// Declarig the variable
let num;

// Create a loop that prompts the user until the input is valid  
while (true){
    // Prompt the user to enter an integer that greater than 0
    let num = parseFloat(prompt('Enter an integer that greater than 0.'));

    // Check if the input is a valid integer
    if (!isNaN(num) && num > 0 && Number.isInteger(num)) {
        
        // Create a loop for displaying the countdown
        for(let i =num; i >=0; i --){
            document.write(`<p>${i}</p>`);
        }
        break; // Exite the loop
    }
    else{
        // Alert if the input is invalid
        alert('Invalid. Please enter an integer that greater than 0.');
    }
}
