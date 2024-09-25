let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const x = Math.random();
    if (x<=0.33){
        return "rock";
    }
    if (x>=0.66){
        return "scissors";
    }
    else {
        return "paper";
    }
}


function playRound(choice){
    const computer = getComputerChoice();
    const human = choice.toLowerCase();

    if (human == "paper") {
        switch (computer) {
            case "paper":
                return "You drew! Try again.";
            case "rock":
                humanScore++;
                return "You won!";
            
            case "scissors":
                computerScore++;
                return "You lost!";
        }
    }
    if (human == "rock") {
        switch (computer) {
            case "paper":
                computerScore++;
                return "You lost!";
            case "rock":
                return "You drew! Try again.";
            
            case "scissors":
                humanScore++;
                return "You won!";
        }
}
    if (human == "scissors") {
        switch (computer) {
            case "paper":
                humanScore++;
                return "You won!";
            case "rock":
                computerScore++;
                return "You lost!";
            case "scissors":
                return "You drew! Try again.";
        }
}
}

const scissors = document.createElement("button");
scissors.textContent = "Scissors"
const rock = document.createElement("button");
rock.textContent = "Rock"
const paper = document.createElement("button");
paper.textContent = "Paper"

const body = document.querySelector("body");
body.appendChild(scissors);
body.appendChild(rock);
body.appendChild(paper);

const buttons = document.querySelectorAll("button");
const div = document.createElement("div");
const displayHumanScore = document.createElement("h3");
const displayComputerScore = document.createElement("h3");
computerScore.textContent 
body.appendChild(div);
body.appendChild(displayHumanScore);
body.appendChild(displayComputerScore);


buttons.forEach((function(button) {
    button.addEventListener("click", () => {
        outcome = playRound(button.textContent); 
        div.textContent = outcome;
        displayHumanScore.textContent = `You: ${humanScore}`
        displayComputerScore.textContent = `Computer: ${computerScore}`

        if (humanScore == 5){
            window.alert("You are a winner!");
            
        }
        if (computerScore == 5){
            window.alert("You are a loser!");
        }

    })
}))












