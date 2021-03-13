const form = document.getElementById("mad-lib-entry");
form.addEventListener("submit", submitInput);

const inputValues = document.getElementsByTagName("input");
const madLibInputs = document.getElementsByTagName("span");

function submitInput(e) {
    e.preventDefault();
    for (i = 0; i < madLibInputs.length; i++) {
        madLibInputs[i].innerHTML = inputValues[i].value.toUpperCase(); 
    }
    form.reset();
}

//onclick of trash icon deletes the madlibinput assosiated with it

const delButtons = document.getElementsByTagName("i");
for (i = 0; i < delButtons.length; i++) {
    delButtons[i].addEventListener("click", (e) => {
        for (i = 0; i < delButtons.length; i++) {
            if (e.target == delButtons[i]) {
                madLibInputs[i].innerHTML = "";
            }
        }
    });
}

//this event listener and arrow function makes the madlib and button appear
const submitButton = document.getElementById("submit-button");
const madLib = document.getElementById("mad-lib");
submitButton.addEventListener("click", () => { 
    madLib.style.display = "block";
    playAgain.style.display = "block";
});

//When you play again it refreshes the page causeing the madlib to dissappear
//and the input boxes to refresh to empty so you can play the madlib again
const playAgain = document.getElementById("play-again");
playAgain.addEventListener("click", () => window.location.reload());