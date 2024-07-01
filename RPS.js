
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {

    let x = Math.floor(Math.random() * 3);

    if (x == 0) {
        return "rock";
    } else if (x == 1) {
        return "paper";
    } else {
        return "scissors";
    }

}

function getHumanChoice() {
    return prompt("Rock, Paper or Scissors?").toLowerCase()
}

function playRound (humanChoice, computerChoice) {

    if (humanChoice == computerChoice) {
        console.log("Tie round!")
        return
    }

    if (humanChoice == "paper") {
        if (computerChoice == "scissors") {
            console.log("Computer wins!");
            computerScore =+ 1;
            return
        } else {
            console.log("Human wins!");
            humanScore =+ 1;
            return;
        }
    }

    if (humanChoice == "rock") {
        if (computerChoice == "paper") {
            console.log("Computer wins!");
            computerScore =+ 1;
            return
        } else {
            console.log("Human wins!");
            humanScore =+ 1;
            return;
        }
    }

    if (humanChoice == "scissors") {
        if (computerChoice == "rock") {
            console.log("Computer wins!");
            computerScore =+ 1;
            return
        } else {
            console.log("Human wins!");
            humanScore =+ 1;
            return;
        }
    }

}

function playGame () {

    for (let i = 0; i < 5; i++) {
        let human = getHumanChoice();
        let computer = getComputerChoice();
        playRound(human, computer);
    }


    if (humanScore > computerScore) {
        console.log("The human won the game")
    } else {
        console.log("The computer was superior")
    }
    humanScore = 0;
    computerScore = 0;
}

const humanChoice = getHumanChoice;
const computerChoice = getComputerChoice;

playRound (humanChoice, computerChoice);