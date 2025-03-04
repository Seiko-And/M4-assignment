/* File name: 04-odd-or-even.js
   Creat a Looping that will iterate from 0 to 15
   and then display the current number is odd or even */

for (let i = 0; i <= 15; i++){
    if (i%2 === 0){ // If the number is even
        console.log(`${i} is even`);
    }
    else{ // If the number is odd
        console.log(`${i} is odd`);
    }
}