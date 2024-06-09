// 2. Guessing Game (Using while loop )

// Set a maximum value
let maxValue: number = 10

// Generate a random number
let randomNum = Math.floor(Math.random() * maxValue) + 1
console.log(randomNum);

// Track the guess status:
let correctGuess: boolean = false

// Simulate user guesses
let preDefGuess = [1,3,5,7,8,9];

// Iterate over guesses
let x = 0
while(!correctGuess && x < preDefGuess.length){
    let currentGuess = preDefGuess[x];

    // Check the user's guess
    if(currentGuess === randomNum){
        correctGuess = true
        console.log("Congrats!! You guessed correct number: ", randomNum);
    } else if (currentGuess < randomNum){
        console.log("Too low! Try again");       
    } else{
        console.log("Too high! Try again");
    }
    x++
}
