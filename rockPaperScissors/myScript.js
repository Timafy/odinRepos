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

function getHumanChoice() {
    let userInput = prompt("Rock, paper, scissors?");
    return userInput;
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(){
        const human = getHumanChoice().toLowerCase();
        const computer = getComputerChoice();
    
        if (human == "paper") {
            switch (computer) {
                case "paper":
                    return "You drawed! Try again.";
                case "rock":
                    humanScore++;
                    return "You win!";
                case "scissors":
                    computerScore++;
                    return "You lose!";
            }
       }
        if (human == "rock") {
        switch (computer) {
            case "paper":
                computerScore++;
                return "You lost!";
            case "rock":
                return "You drawed! Try again.";
            case "scissors":
                humanScore++;
                return "You win!";
        }
    }
        if (human == "scissors") {
        switch (computer) {
            case "paper":
                humanScore++;
                return "You win!";
            case "rock":
                computerScore++;
                return "You lost!";
            case "scissors":
                return "You drawed! Try again.";
        }
    }
    }

    for (i =0; i<5; i++) {
        playRound();
    }
    
    if (humanScore > computerScore) {
        return "You won the BO5!!!!"
    }
    else {
        return "You lost the BO5!!!!!!"
    }

}



