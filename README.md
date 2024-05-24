# Learning-JavaScript-

Learning JavaScript from chai-aur-code

# Project4-Solution

```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHigh = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let previousGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    // numGuess++;
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

//validation for game
function validateGuess(guess) {
  numGuess++;
  if (isNaN(guess) || guess < 0 || guess > 100) {
    alert("Please Enter Valid Number");
  } else {
    previousGuess.push(guess);
    if (numGuess > 10) {
      displayMessage(`Game Over Random value was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      chekGuess(guess);
    }
  }
}

function chekGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You Guested Right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Smaller`);
  } else {
    displayMessage("Higher");
  }
}
function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess}, `;
  // numGuess++;
  lastResult.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHigh.innerHTML = `<h2> ${message}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame"> Start New Game </h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {
  const newGame = document.querySelector("#newGame");
  newGame.addEventListener("click", () => {
    randomNumber = parseInt(Math.random() * 100 + 1);
    // userInput.value = '';
    previousGuess = [];
    numGuess = 1;
    0;
    guessSlot.innerHTML = "";
    lowOrHigh.innerHTML = "";
    lastResult.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true;
  });
}
```
