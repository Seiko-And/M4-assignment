/* File name: 05-marco-polo.js
   Create the Marco! Polo!
   This application which iterates numbers from 1 to 100 
   For multiples of 3, print "Marco!" instead of the number and for multiples of 5, print "Polo! */

for (let i = 1; i <= 100; i++){
    if (i%3 === 0 && i%5 === 0){ // If the number which is multiples of both 3 and 5 
        document.write('<p>Marco!Poro!</p>');
    }
    else if(i%3 === 0){ // If the numbe is multiples of 3, display "Marco!"
        document.write('<p>Marco!</p>');
    }
    else if (i%5 === 0){  // If the numbe is multiples of 5, display "Polo!"
        document.write('<p>Polo!</p>');
    }
    else{  // If the numbers is not multiples of 3 or 5 , display the number
        document.write(`<p>${i}</p>`);
    }
}