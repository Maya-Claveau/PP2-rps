// Wait for the Dom to finish loading before running the game
// Get the button elements and add event listeners

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", displayRandomImage)        
        
        //    {} if (this.getAttribute("data-type") === "rock") {
                                                 
        //     } else {
        //         let gameType = this.getAttribute("data-type");
        //         alert(`You clicked ${gameType} button!`);
        //     }            
        
    }
});


function displayRandomImage() {
    // get all the images

    var myPix = ["1.png", "2.png", "3.png"];

    // get a random index

    

    var randomIndex = Math.floor(Math.random() * myPix.length);
    
    // display the image
    document.getElementById("image-box").src = window.location.href + 'assets/images/' + myPix[randomIndex];
}


function runGame() {

}

function checkAnswer() {

}

function incrementPlayerScore() {

}

function incrementsPcScore() {

}

