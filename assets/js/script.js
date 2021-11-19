// Wait for the Dom to finish loading before running the game
// Get the button elements and add event listeners
// make the restart button hiden when the game starts
let disableBtn = true; //change this value to false and the button will be clickable
let restartBtn = document.getElementById('restart-btn');

if (disableBtn) {
    restartBtn.disabled = "disabled";
}

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByClassName("option-btn"); // target only the 3 buttons for player options

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (disableBtn) {
                let player = this.getAttribute("data-type");
                let computer = displayRandomImage();
                checkWinner(player, computer);
                incrementRoundNum();   
            }
        });
    }
});

let startNewGame = document.getElementById("restart-btn");
startNewGame.addEventListener("click", function () {
    playGame();
});

/**
 * popup of the game rule button 
 */
const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openModalButtons.forEach(button => {
    button.addEventListener("click", () => {
        const modal = document.querySelector(button.dataset.modalTarget); // select the modal
        openModal(modal);
    });
});

closeModalButtons.forEach(button => {
    button.addEventListener("click", () => {
        const modal = button.closest(".modal");
        closeModal(modal);
    });
});

overlay.addEventListener("click", () => {
    const modals = document.querySelectorAll(".modal.active");
    modals.forEach(modal => {
        closeModal(modal);
    });
});

function openModal(modal) {
    if (modal == null) return;
    modal.classList.add("active");
    overlay.classList.add("active");
}

function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove("active");
    overlay.classList.remove("active");
}

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

/**
 * restart the game
 */
function playGame() {
    document.getElementById("player").innerText = 0;
    document.getElementById("computer").innerText = 0;
    document.getElementById("round-number").innerText = 0;
    document.getElementById("result").innerText = "";
    disableBtn = true;
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
    // when round number 7 is reached, call gameover function
    if (gameIsComplete(previousRoundNum)) {
        gameOver();
    } else {        
        previousRoundNum++;
        document.getElementById("round-number").innerText = previousRoundNum;
    }
}

function gameIsComplete(previousRoundNum) {
    return previousRoundNum > 6;
}

/**
 *  the game over function 
 */
function gameOver() {
    let previousScore = parseInt(document.getElementById("player").innerText);
    let previousPcScore = parseInt(document.getElementById("computer").innerText);
    let playerScore = previousScore;
    let computerScore = previousPcScore;

    if (playerScore > computerScore) {
        document.getElementById("result").innerText = "Congratulations! You won the game!";
    } else if (playerScore < computerScore) {
        document.getElementById("result").innerText = "You lost the game!";
    } else {
        document.getElementById("result").innerText = "It's a tie!";
    }
    // make the restart button clickable when the game ends
    disableBtn = false;
    document.getElementById('restart-btn').disabled = false;
}