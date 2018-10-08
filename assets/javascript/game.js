// MAKE A LIST OF POSSIBLE BIRDS
var possibleBirds = [
    "hummingbird",
    "kingfisher",
    "albatross",
    "woodpecker",
    "nightjar",
];

//GLOBAL VARS
var randomBird; // random word generated by CPU
var userGuess; // letter guessed by the User
var birdDashes = []; //randomBird transformed to dashes
var guessesRemaining;

// START NEW GAME
function newGame() {
    //SET UP VARS AND FUNCTIONS
    guessesRemaining = 6;
    document.getElementById("remainingGuesses").textContent = guessesRemaining;
    incorrectLetters = document.getElementById("incorrect").textContent = [];
    document.getElementById("sectionImage").style.backgroundImage = "url('assets/images/" + guessesRemaining + ".jpg')";
    birdDashes = [];

    // CREATE RANDOM WORD (RANDOMBIRD) FROM POSSIBLE WORDS
    randomBird = Math.floor(Math.random() * (possibleBirds.length));
    randomBird = (possibleBirds[randomBird])

    // CHANGES RANDOMBIRD INTO BIRDDASHES
    for (var i = 0; i < randomBird.length; i++) {
        birdDashes.push(" _ ");
    }
    //SHOW DASHES IN HTML DIV GUESSTHIS
    document.getElementById("guessThis").textContent = birdDashes.join("");
};

// // _________________________BUNCHA FUNCTIONS___________________________________
// //IF WINNER, SOMETHING SHOULD HAPPEN
function birdIsTheWord() {
    if (birdDashes.indexOf(" _ ") === -1) {
        alert("Congratulations! This bird has flown the coop!");
    }
};

// __________GAME START________
// function newGame(); {
document.onkeyup = function (event) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
        // console.log(userGuess);
        var regex = /[a-z]/g;
        var found = randomBird.match(userGuess);
        // console.log(found); //index of correct letters
        if (found) {
            for (var i = 0; i < randomBird.length; i++) {
                if (randomBird[i] === userGuess) {
                    birdDashes[i] = userGuess;
                }
            }
            document.getElementById("guessThis").textContent = birdDashes.join("");
        } else {
            document.getElementById("incorrect").append(userGuess);
            guessesRemaining--;
            document.getElementById("remainingGuesses").textContent = guessesRemaining;
            guessesRemaining.textContent--;
            document.getElementById("sectionImage").style.backgroundImage = "url('assets/images/" + guessesRemaining + ".jpg')";

        }
        if (birdDashes.indexOf(" _ ") === -1) {
            alert("Congratulations! This bird has flown the coop!");
        } else if (guessesRemaining === 0) {
            // document.getElementById("sectionImage").src = "..assets/images/0.jpg";
            alert("What the flock? You killed my bird! Play Again?");
        }
    }
};





