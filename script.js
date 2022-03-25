let computerSelection ;
let playerSelection ;
let displayPlayerScore = document.getElementById("player-score");
displayPlayerScore.innerText = 0;
let displayComputerScore = document.getElementById("computer-score");
displayComputerScore.innerText = 0;
let displayResults = document.getElementById("results");
let computerScore = 0;
let playerScore = 0;
let result = "";


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

    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        result ="It's a draw ! " +  playerSelection + " is equal to " + computerSelection;
        return result 
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors" ) {
        result ="It's a win ! " +  playerSelection + " beats " + computerSelection;
        playerScore += 1;
        return result
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock" ) {
        result ="It's a win ! " +  playerSelection + " beats " + computerSelection;
        playerScore += 1;
        return result 
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper" ) {
        result ="It's a win ! " +  playerSelection + " beats " + computerSelection;
        playerScore += 1;
        return result 
    }  else if (computerSelection.toLowerCase() === "rock" && playerSelection.toLowerCase() === "scissors" ) {
        result ="It's a lose ! " + computerSelection  + " beats " + playerSelection;
        computerScore += 1;
        return result
    } else if (computerSelection.toLowerCase() === "paper" && playerSelection.toLowerCase() === "rock" ) {
        result ="It's a lose ! " + computerSelection  + " beats " + playerSelection;
        computerScore += 1;
        return result 
    } else if (computerSelection.toLowerCase() === "scissors" && playerSelection.toLowerCase() === "paper" ) {
        result ="It's a lose ! " + computerSelection  + " beats " + playerSelection;
        computerScore += 1;
        return result 
    }
    
}
// console.log(playRound(playerSelection, computerSelection));

function game() {
    playerScore = 0;
    computerScore = 0;

    for (let i = 0; i < 5; i++) {
        console.log('Round : ' + (i+1) + (' begin') )
        computerSelection = computerPlay();
        playerSelection = prompt('Choose between Rock, Paper and Scissors', 'rock');
        console.log("Computer pick : " + computerSelection);
        console.log("Player pick : " + playerSelection);
        playRound(playerSelection,computerSelection);
        displayPlayerScore.innerText = playerScore;
        displayComputerScore.innerText = computerScore;
        console.log(result);
        console.log('Round : ' + (i+1) + ' is over !');
    }
    console.log('Match is over !');
    console.log('Player Score = ' + playerScore);
    console.log('Computer Score = ' + computerScore);
    if (playerScore > computerScore) {
        console.log('Player Won ! Humanity is in good hands.');
        displayResults.innerText = 'Player Won ! Humanity is in good hands.';
    } else if (playerScore < computerScore) {
        console.log('You lost ! Beware IA superpower...');
        displayResults.innerText = 'You lost ! Beware IA superpower...';
    } else {
        console.log("It's a draw... Or is it ? Wait is that even possible ?");
        displayResults.innerText = "It's a draw... Or is it ? Wait is that even possible ?";
    }
    return 'Player : ' + playerScore + ' | ' + 'Computer : ' + computerScore; 
}

// console.log(game());