/* File name: 02-coinflip-streak.js
   Creat The “Coin Flip Streak” Game
   this simple game is to see what kind of streak you can get to 
   (how many times “Heads” comes up in a row before “Tails” does to end the game)*/

// Declaring a variable
let coinFlip;

// Creat a do-while loop for the game
do{
    // Generate a number 0 or 1
    coinFlip = Math.round(Math.random());

    // Display the result of the coin flip
    if (coinFlip === 0){ // If the number is 0, display Heads in console window
        console.log('Heads');
    }
    else{ // If the number is , display Tails in console window
        console.log('Tails');
    }
} 
while(coinFlip === 0); // Stop  executing if the result is Tails
// alert('Game over');