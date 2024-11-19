const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber)

// Initialize variables
let attempts = 0;
let guess = 0;

// Game loop
    function calculatingguess(guess){
        guess =("Guess a number between 1 and 100: ");
    attempts++;

    // Check the guess
    if (guess > randomNumber) {
        ("Too high! Try again.");
    } else if (guess < randomNumber) {
        ("Too low! Try again.");
    } else if (isNaN(guess)) {
        ("That's not a number! Please enter a valid number.");
    } else {
        (`Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts.`);
        }
    }
  