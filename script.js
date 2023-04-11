//funtion game to play 5 rounds and print the final winner and score
// funtion of play round (player,computer) and return winner
// get random choice from computer
// get player choice case insensitinve

const options = ["rock",
  "paper",
  "scissors"];

function game() {
  let playerSelection;
  let computerSelection;
  let winsPlayer = 0;
  let winsComputer = 0;
  for (let round = 0; round < 5; round++) {
    console.log(playRound(playerSelection, computerSelection));
    if (result.includes("Computer"))
      winsComputer++;
    else if (result.includes("Player"))
      winsPlayer++;
    else
      round--;
  }
  let score = [winsPlayer, winsComputer];
  let winner;
  if(score[0]>score[1])
    winner="Player"
  else
    winner="Computer" 
  return score + " " + winner + " is the champion!";
}
function playRound(playerSelection, computerSelection) {
  computerSelection = getComputerChoice();
  playerSelection = getPlayerChoice();

  switch (true) {
    case playerSelection === "rock" && computerSelection === "paper":
      result = "Computer wins the round";
      break;
    case playerSelection === "rock" && computerSelection === "scissors":
      result = "Player wins the round";

      break;
    case playerSelection === "scissors" && computerSelection === "paper":
      result = "Player wins the round";
      break;
    case playerSelection === "scissors" && computerSelection === "rock":
      result = "Computer wins the round";

      break;
    case playerSelection === "paper" && computerSelection === "scissors":
      result = "Computer wins the round";

      break;
    case playerSelection === "paper" && computerSelection === "rock":
      result = "Player wins the round";
      break;
    default:
      result = "It's a tie";
  }
  return result;
}

function getPlayerChoice() {
  let choice = "";
  while (!options.includes(choice)) {
    choice = prompt("Rock, paper or scissors?", "paper").toLowerCase();
  }

  return choice;

}
function getComputerChoice() {
  let randomChoice = Math.floor(Math.random() * options.length);
  return options[randomChoice];
}


console.log(game());
