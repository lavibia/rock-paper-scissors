function playRound(playerSelection, computerSelection) {
    let result="Don't know";
    if(playerSelection==='rock'&& computerSelection==='rock')
        result="It's a tie"
    return result;    
  }

  function getComputerChoice(){
    let computer='rock';
    console.log(computer);
    return computer;
}
   
const playerSelection = "paper";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
