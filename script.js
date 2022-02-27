/* Five rounds of rock paper scissors which outputs
   current round, user and computer score. */

// html references
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");
const result = document.querySelector(".result");
const round = document.querySelector(".round");
const user = document.querySelector(".user");
const computer = document.querySelector(".computer");

let userChoice;
let computerChoice;
let userScore = 0;
let computerScore = 0;
let count = 1;
let choices = ["r", "p", "s"];

// On click of button, assign userChoice with input and run the comparison
rock.addEventListener("click", () => {
  userChoice = "r";
  getResult();
});
paper.addEventListener("click", () => {
  userChoice = "p";
  getResult();
});
scissor.addEventListener("click", () => {
  userChoice = "s";
  getResult();
});

function getResult() {
  // assign random choice from array of r, p, s to variable
  computerChoice = choices[Math.floor(Math.random() * (2 - 0 + 0)) + 0];

  //rules and output for result
  if (userChoice == computerChoice) {
    result.textContent = "You tie!!!";
  } else if (userChoice == "r" && computerChoice == "p") {
    result.textContent = "You lose, Paper beats Rock.";
    computerScore += 1;
  } else if (userChoice == "s" && computerChoice == "r") {
    result.textContent = "You lose, Scissors beats Rock.";
    computerScore += 1;
  } else if (userChoice == "p" && computerChoice == "s") {
    result.textContent = "You lose, Paper beats Scissors.";
    computerScore += 1;
  } else if (userChoice == "s" && computerChoice == "p") {
    result.textContent = "You win, Scissors beats Paper.";
    userScore += 1;
  } else if (userChoice == "p" && computerChoice == "r") {
    result.textContent = "You win, Paper beats Rock.";
    userScore += 1;
  } else if (userChoice == "r" && computerChoice == "s") {
    result.textContent = "You win, Rock beats Scissors.";
    userScore += 1;
  }

  // output of round and scores
  round.textContent = "Round " + count + " out of 5";
  user.textContent = "User score: " + userScore;
  computer.textContent = "Computer score: " + computerScore;

  // count of rounds till it gets to 5 rounds
  if (count == 5) {
    rock.disabled = true;
    paper.disabled = true;
    scissor.disabled = true;

    if (userScore > computerScore) {
      result.textContent = "YOU WIN!!!";
    } else if (userScore < computerScore) {
      result.textContent = "YOU LOSE!!!";
    } else {
      result.textContent = "TIEEEE";
    }
  }

  count++;
}
console.log("hello");
