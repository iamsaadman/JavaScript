//Guessing Game
// Guess a number from 1 to 5
// Generate a random number between 1 to 5
// If the guess number matches random number;
// Run the game for 5 times
// show the number of wons and losts


var numofWon = 0;
var numofLost = 0;

for (var i = 1; i <= 5; i++) {
  var guessNumber = parseInt(prompt("Enter a number from 1 to 5: "));

  var randomNumber = Math.floor(Math.random() * 5) + 1;

  if (guessNumber == randomNumber) {
    console.log("You have won");
    numofWon++;
  } else {
    console.log("You have lost. Random number was" + randomNumber);
    numofLost++;
  }
}

document.write("Number of won "+ numofWon+"<br>");

document.write("Number of lost "+ numofLost+"<br>");

