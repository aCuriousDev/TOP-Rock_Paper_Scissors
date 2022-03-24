const computerSelection = computerPlay();
const playerSelection = "rock";
console.log(computerSelection);
console.log(playerSelection);


function computerPlay() {
    let randNum = Math.floor(Math.random()*3);
    if (randNum === 0 ) {
        return "rock";
    } else if (randNum === 1) {
        return "paper";
    } else {
        return "scissors"
    }
}

function playRound(playerSelection, computerSelection) {
    let result = "";
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        result ="It's a draw ! " +  playerSelection + " is equal to " + computerSelection;
        return result
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors" ) {
        result ="It's a win ! " +  playerSelection + " beats " + computerSelection;
        return result
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock" ) {
        result ="It's a win ! " +  playerSelection + " beats " + computerSelection;
        return result 
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper" ) {
        result ="It's a win ! " +  playerSelection + " beats " + computerSelection;
        return result 
    }  else if (computerSelection.toLowerCase() === "rock" && playerSelection.toLowerCase() === "scissors" ) {
        result ="It's a lose ! " + computerSelection  + " beats " + playerSelection;
        return result
    } else if (computerSelection.toLowerCase() === "paper" && playerSelection.toLowerCase() === "rock" ) {
        result ="It's a lose ! " + computerSelection  + " beats " + playerSelection;
        return result 
    } else if (computerSelection.toLowerCase() === "scissors" && playerSelection.toLowerCase() === "paper" ) {
        result ="It's a lose ! " + computerSelection  + " beats " + playerSelection;
        return result 
    }
}

console.log(playRound(playerSelection, computerSelection));