// Wait for the Dom to finish loading before running the game
// Get the button elements and add event listeners

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "rock") {
                alert("You clicked rock button!");                   
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType} button!`);
            }            
        })
    }
})

function runGame() {

}

function checkAnswer() {

}

function incrementPlayerScore() {

}

function incrementsPcScore() {

}

