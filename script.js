const computerSelection = computerPlay();
console.log(computerSelection)


function computerPlay() {
    let randNum = Math.floor(Math.random()*3);
    if (randNum === 0 ) {
        return "Rock";
    } else if (randNum === 1) {
        return "Paper";
    } else {
        return "Scissors"
    }
}

