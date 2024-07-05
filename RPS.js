var humanScore = 0;
var computerScore = 0;

const body = document.querySelector("body");

const rock = document.createElement("button");
rock.setAttribute("id","rock");
const paper = document.createElement("button");
paper.setAttribute("id","paper");
const scissors = document.createElement("button");
scissors.setAttribute("id","scissors");

rock.textContent = "rock";
paper.textContent = "paper";
scissors.textContent = "scissors";

body.appendChild(rock);
body.appendChild(paper);
body.appendChild(scissors);

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.id);
    });
});

const scores = document.createElement("div");

body.appendChild(scores);

const scoreKeeping = document.createElement("div");

body.appendChild(scoreKeeping)

scoreKeeping.textContent = "human: " + humanScore + " computer: " + computerScore;

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

function playRound (humanChoice) {

    let computerChoice = getComputerChoice();

    if (humanChoice == computerChoice) {
        scores.textContent = "Tie round!"
    } else {
        if (humanChoice == "paper") {
            if (computerChoice == "scissors") {
                scores.textContent = "Computer wins!"
                computerScore = computerScore + 1;
            } else {
                scores.textContent = "Human wins!";
                humanScore = humanScore + 1;
            }
        }

        if (humanChoice == "rock") {
            if (computerChoice == "paper") {
                scores.textContent = "Computer wins!";
                computerScore = computerScore + 1;
            } else {
                scores.textContent = "Human wins!";
                humanScore = humanScore + 1;
            }
        }

        if (humanChoice == "scissors") {
            if (computerChoice == "rock") {
                scores.textContent = "Computer wins!";
                computerScore = computerScore + 1;
            } else {
                scores.textContent = "Human wins!";
                humanScore = humanScore + 1;
            }
        }
    }

    scoreKeeping.textContent = "human: " + humanScore + " computer: " + computerScore;
    if (humanScore == 5) {
        let winner = document.createElement("p");
        winner.textContent = "Humanity conquers!";
        body.appendChild(winner);
    } else if (computerScore == 5) {
        let winner = document.createElement("p");
        winner.textContent = "Humanity lost!";
        body.appendChild(winner)
    }
    return;

}





/*
function playGame () {

    for (let i = 0; i < 5; i++) {
        let human = HumanChoice();
        let computer = ComputerChoice();
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
*/