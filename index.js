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
        return 0;
    }
    else if (playerSelection.toLowerCase() == "paper" && computerSelection == "Scissors") {
        return 0;
    }
    else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "Rock") {
        return 0;
    }
    else {
        console.log(playerSelection, computerSelection)
        return 1;
    }
}




/*function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock Paper Scissors?");
        const computerSelection = getComputerChoice();
        console.log(playRPS(playerSelection, computerSelection));
    }
}*/

const div = document.querySelector("div");

const rock = document.createElement("button")
const paper = document.createElement("button")
const scissors = document.createElement("button")

rock.textContent = "rock";
paper.textContent = "paper";
scissors.textContent = "scissors";


let player = 0;
let computer = 0;

const parent = document.querySelector("#display");
const display = document.createElement("div");
const winner = document.createElement('div')
rock.addEventListener("click", () => {
    const computerSelection = getComputerChoice()
    if (playRPS("rock", computerSelection) == 0) {
        computer++;
    }
    else if (playRPS("rock", computerSelection) == 1) {
        player++;
    }
    console.log(computerSelection)

    display.textContent = `Player: ${player} Computer: ${computer}`
    if (computer == 5 || player == 5) {
        if (computer == 5) {
            winner.textContent = "computer wins"
        }
        else if (player == 5) {
            winner.textContent = "player wins"
        }
    }
    
})

paper.addEventListener("click", () => {
    const computerSelection = getComputerChoice()
    if (playRPS("paper", computerSelection) == 0) {
        computer++;
    }
    else if (playRPS("paper", computerSelection) == 1) {
        player++;
    }
    console.log(computerSelection)

    display.textContent = `Player: ${player} Computer: ${computer}`
    if (computer == 5 || player == 5) {
        if (computer == 5) {
            winner.textContent = "computer wins"
        }
        else if (player == 5) {
            winner.textContent = "player wins"
        }
    }
})

scissors.addEventListener("click", () => {
    const computerSelection = getComputerChoice()
    if (playRPS("scissors", computerSelection) == 0) {
        computer++;
    }
    else if (playRPS("scissors", computerSelection) == 1) {
        player++;
    }
    console.log(computerSelection)
    display.textContent = `Player: ${player} Computer: ${computer}`
    if (computer == 5 || player == 5) {
        if (computer == 5) {
            winner.textContent = "computer wins"
        }
        else if (player == 5) {
            winner.textContent = "player wins"
        }
    }
})



div.appendChild(rock);
div.appendChild(paper);
div.appendChild(scissors);

parent.appendChild(display);
parent.appendChild(winner);
