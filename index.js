function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    if (random == 0) 
        return "Rock";
    else if (random == 1)
        return "Paper";
    else
        return "Scissors";
}

function playRPS(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        return  "tie";
    }
    else if (playerSelection.toLowerCase() == "rock" && computerSelection == "Paper") {
        return "You Lose! Paper beats rock"
    }
    else if (playerSelection.toLowerCase() == "paper" && computerSelection == "Scissors") {
        return "You Lose! Scissors beats paper"
    }
    else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "Rock") {
        return "You Lose! Rock beats scissors"
    }
    else {
        console.log(playerSelection, computerSelection)
        return "You win!"
    }
}




function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock Paper Scissors?");
        const computerSelection = getComputerChoice();
        console.log(playRPS(playerSelection, computerSelection));
    }
}