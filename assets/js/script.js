// Wait for the Dom to finish loading before running the game
// Get the button elements and add event listeners

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByClassName("option-btn"); // target only the 3 buttons for player options

    for (let button of buttons) {
        
        button.addEventListener("click", function () {
            let player = this.getAttribute("data-type");
            let computer = displayRandomImage();
            checkWinner(player, computer);
            incrementRoundNum();

        }) // with the change above, this function is still working on game over and start new game button, need to solve this
    }


});


let startNewGame = document.getElementById("newGame-btn");
startNewGame.addEventListener("click", function() {
    playScore = 0;
    computerScore = 0;
    playGame();
})


/**
 *  display a random image and computer's choice
 */
function displayRandomImage() {
    // get all the images of rock paper and scissors

    let myPix = ["rock", "paper", "scissors"];

    // get a random index    

    let randomIndex = Math.floor(Math.random() * myPix.length);

    // display the image
    document.getElementById("image-box").src = window.location.href + "assets/images/" + myPix[randomIndex] + ".png";

    //return the computer's choice
    return myPix[randomIndex];
}



function playGame() {

    let playerScore = 0;
    let computerScore = 0;
    let roundNum = 0;
    

}

// function startNewGame() {
//     let playerScore = 0;
//     let computerScore = 0;
//     let roundNum = 0;
//     playGame();
// }

/**
 *  check who wins
 */
function checkWinner(player, computer) {
    if (player === computer) {
        alert(`It's a tie! Please try again!`);
    } else if (player == "rock") {
        if (computer == "paper") {
            incrementPcScore();
        } else {
            incrementPlayerScore();

        }
    } else if (player == "paper") {
        if (computer == "rock") {
            incrementPlayerScore();
        } else {
            incrementPcScore();
        }
    } else if (player == "scissors") {
        if (computer == "rock") {
            incrementPcScore();

        } else {
            incrementPlayerScore();

        }
    }


}


/**
 *  get the current score from the dom and add 1 to the player score
 */
function incrementPlayerScore() {
    let previousScore = parseInt(document.getElementById("player").innerText);
    previousScore++;
    document.getElementById("player").innerText = previousScore;
}

/**
 * get the current score from the dom and add 1 to the pc score
 */
function incrementPcScore() {
    let previousPcScore = parseInt(document.getElementById("computer").innerText);
    previousPcScore++;
    document.getElementById("computer").innerText = previousPcScore;
}

/**
 * get the current round number from the dom and add 1
 */
function incrementRoundNum() {
    let previousScore = parseInt(document.getElementById("player").innerText);
    let previousPcScore = parseInt(document.getElementById("computer").innerText);
    let previousRoundNum = parseInt(document.getElementById("round-number").innerText);
    let startNewGame = document.getElementById("newGame-btn");
    let gameOverBtn = document.getElementById("gameover-btn");

    if (previousRoundNum < 7) {
        previousRoundNum++;
        document.getElementById("round-number").innerText = previousRoundNum;
        startNewGame.classList.remove("is-visible");
        gameOverBtn.classList.add('is-visible');
        
    } else {
        gameOver();
        startNewGame.classList.add('is-visible');
        gameOverBtn.classList.remove("is-visible");

    }


    console.log(previousRoundNum);

    // when round number 7 is reached, call gameover function


}

/**
 *  the the game over function 
 */

function gameOver() {
    let previousScore = parseInt(document.getElementById("player").innerText);
    let previousPcScore = parseInt(document.getElementById("computer").innerText);
    let playerScore = previousScore;
    let computerScore = previousPcScore;
    let gameoverBtn = document.getElementById("gameover-btn");
    gameoverBtn.innerText = "Start Again!";

    if (playerScore > computerScore) {
        document.getElementById("result").innerText = "Congratulations! You won the game!"
    } else {
        document.getElementById("result").innerText = "You lost the game!"
    };

}