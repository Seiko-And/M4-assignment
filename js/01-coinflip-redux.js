/* File name: 01-coinflip-redux.js 
   Creat The “Coin Flip” Game Redux
   This game is simply displaying the coin flip results in the console. */

// Declarting a variable
let coinFlip;

// Prompt the user to enter the amount of times that the for loop executes 
const playAmt =parseInt(prompt ('How many times would you like to play? Enter a number.'));

// Creat a loop
for (i = 1; i <= playAmt; i++){
    // Generate a number 0 or 1
    coinFlip = Math.round(Math.random());

    if (coinFlip === 0){
        console.log('Heads');
    }else{
        console.log('Tails');
    }
}

