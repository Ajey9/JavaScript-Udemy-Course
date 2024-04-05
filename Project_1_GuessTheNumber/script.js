"use strict";

let secretNumber = Math.trunc(Math.random() * 15 + 1);
let score = 10;
let highScore = 0;
// document.querySelector(".number").textContent = secretNumber;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guessedNumber = Number(document.querySelector(".guess").value);
  if (guessedNumber === secretNumber) {
    displayMessage("You guessed the correct Number 🎊🥳");

    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "Green";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guessedNumber !== secretNumber) {
    displayMessage(
      guessedNumber > secretNumber ? "You guessed High.." : "You guessed Low.."
    );
    if (score > 0) {
      score--;
      document.querySelector(".score").textContent = score;
    } else if (score === 0) {
      displayMessage("You Lost the game 😒😒");
      document.querySelector("body").style.backgroundColor = "Red";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 10;
  secretNumber = Math.trunc(Math.random() * 15 + 1);
  document.querySelector(".number").textContent = secretNumber;

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent =
    "Start guessing the number again..";

  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
});
