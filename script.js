const options = ["rock",
  "paper",
  "scissors"];

let winsPlayer = 0;
let winsComputer = 0;

//******Player choice********** */ 
let choice = Array.from(document.getElementsByClassName("option"));
choice.forEach(option => {
  option.addEventListener('click', e => {
    let playerOption = e.target.getAttribute("alt")
    console.log(playerOption);
    // highlight player choice
    e.target.style.backgroundColor = "#f8d9b0";
    window.setTimeout(function () {
      e.target.style.backgroundColor = "#fff";
    }, 1500);
    // play round and update score
    game(playRound(playerOption, getComputerChoice()));
  });
});

// ******Computer choice**** */
function getComputerChoice() {
  let randomChoice = Math.floor(Math.random() * options.length);
  let img = document.getElementsByClassName('alterImg')[0];
  // stop animation and show computer choice
  img.style.animation = 'none';
  img.style.backgroundImage = `url(./assets/${options[randomChoice]}.png)`;
  window.setTimeout(function () {
    img.style.animation = 'swapimg 0.5s infinite forwards'
  }, 1500);
  return options[randomChoice];
}



function game() {

  if (result.includes("Computer"))
    winsComputer++;
  else if (result.includes("Player"))
    winsPlayer++;
  let score = [winsPlayer, winsComputer];
  let winner;
  if (score[0] > score[1])
    winner = "Player"
  else
    winner = "Computer"
  let playerScore = document.getElementById("playerScore").children[0];
  let computerScore = document.getElementById("computerScore").children[0];
  playerScore.textContent = score[0];
  computerScore.textContent = score[1];



  //show end slide with replay button
  if (score[0] === 5 || score[1] === 5) {
    document.getElementById('game').style.display = 'none'
    document.getElementById('end').style.display = 'flex'
    document.getElementById('end').classList.add("container")
  }
  document.getElementById('end').children[0].textContent = winner + " won! You can play again if you want :)"
}
function playRound(playerSelection, computerSelection) {
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
  console.log(computerSelection);
  console.log(result)
  return result;
}

//replay game on click
document.getElementById('replay').addEventListener('click', () => {
  window.location.reload();
})