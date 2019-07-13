// GLOBAL VERIABLES
//-------------------------------
//Arrays and Variables for holding data
var wordOptions = ["gretzky", "jordan", "woods", "jackson", "tyson", "ruth"];
var selectedWord = "";
var lettersInWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];

// Game Counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;

// FUNCTIONS
//--------------------------------

function startGame () {
    selectedWord = wordOptions[Math.floor(Math.random()*wordOptions.length)];
    lettersInWord = selectedWord.split("");
    numBlanks = lettersInWord.length;
    
    // Reset
    guessesLeft = 9
    wrongLetters = [];
    blanksAndSuccesses = [];

    //Populate blanks and successes with right number of blanks
    for (var i=0; i<numBlanks; i++){
        blanksAndSuccesses.push("_");
    }
    
    // Change HTML to reflect round conditions
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join("  ");
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("winCounter").innerHTML = winCount;
    document.getElementById("lossCounter").innerHTML = lossCount;

    // Testing / Debugging
    console.log(selectedWord);
    console.log(lettersInWord);
    console.log(numBlanks);
    console.log(blanksAndSuccesses);
}

// MAIN PROCESS
//--------------------------------

startGame();