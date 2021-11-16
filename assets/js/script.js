// Wait for the Dom to finish loading before running the game
// Get the button elements and add event listeners

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", displayRandomImage)        
    }
});

/**
 *  display a random image
 */ 
function displayRandomImage() {
    // get all the images of rock paper and scissors

    let myPix = ["1.png", "2.png", "3.png"];

    // get a random index    

    let randomIndex = Math.floor(Math.random() * myPix.length);
    
    // display the image
    document.getElementById("image-box").src = window.location.href + 'assets/images/' + myPix[randomIndex];
}

function rpsGame() {

    let playerScore = 0;
    let computerScore = 0;
    let roundNumber = 0;

    // to be continued

}

/**
 *  check who wins
 */ 
function winner(player, computer) {
    const playerScore = document.querySelector("#player");
    const computerScore = document.querySelector("#pc");
    // player = player.toLowerCase();
    // computer = computer.toLowerCase(); not sure what this code does, need to look at them later

    if (player === computer) {
        alert(`It's a tie! Please try again!`)
    } else if (player == "rock") {
        if (computer == "paper") {
            incrementsPcScore();
        } else {
            incrementPlayerScore();
        }
    } else if (player == "paper") {
        if (computer == "rock") {
            incrementPlayerScore();
        } else {
            incrementsPcScore();
        }
    } else if (player == "scissors") {
        if (computer == "rock") {
            incrementsPcScore();
        } else {
            incrementPlayerScore();
        }
    }

    
}
winner();

/**
 *  get the current score from the dom and add 1 to the player score
 */ 
function incrementPlayerScore() {
    let previousScore = parseInt(document.getElementById("player").innerText);
    document.getElementById("player").innerText = ++previousScore;
}

/**
 * get the current score from the dom and add 1 to the pc score
 */
function incrementsPcScore() {
    let previousScore = parseInt(document.getElementById("pc").innerText);
    document.getElementById("pc").innerText = ++previousScore;
}

