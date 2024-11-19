const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber)

// Initialize variables
let attempts = 0;
let guess = null;

// Game loop
while (guess !== randomNumber) {
    // Prompt the user for a guess
    guess = parseInt(prompt("Guess a number between 1 and 100: "), 10);
    attempts++;

    // Check the guess
    if (guess > randomNumber) {
        alert("Too high! Try again.");
    } else if (guess < randomNumber) {
        alert("Too low! Try again.");
    } else if (isNaN(guess)) {
        alert("That's not a number! Please enter a valid number.");
    } else {
        alert(`Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts.`);
        break; // Exit the loop
    }
}