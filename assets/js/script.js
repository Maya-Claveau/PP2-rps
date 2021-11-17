// Wait for the Dom to finish loading before running the game
// Get the button elements and add event listeners

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        // if (button === document.getElementById("gameover-btn")) {
        //     // do nothing
        // } else {
        button.addEventListener("click", function() {
            let player = this.getAttribute("data-type");
            let computer = displayRandomImage();
            checkWinner(player, computer);
            incrementRoundNum();
            
        })       
    }

    
});



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

    let playerScore = previousScore;
    let computerScore = previousPcScore;
    

 // when round number 7 is reached, call gameover function
    if (previousRoundNum == 7) {
        gameOver();
    }
    

}

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
    let previousRoundNum = parseInt(document.getElementById("round-number").innerText);
    previousRoundNum++;
    document.getElementById("round-number").innerText = previousRoundNum;
}

/**
 *  the the game over function 
 */

 function gameOver() {
        let gameoverBtn = document.getElementById("gameover-btn");
        gameoverBtn.innerText = "Start Again!";

        if (playerScore > computerScore) {
            document.getElementById("result").innerText = "Congratulations! You won the game!"
        } else {
            document.getElementById("result").innerText = "You lost the game!"
        }
    
    }


