function getComputerChoice (){
    let choiceRandomiser = Math.floor(Math.random()*3)+1
    // console.log (choiceRandomiser)
    if (choiceRandomiser === 1 )
        return "rock";
    else if (choiceRandomiser === 2)
        return "paper";
    else return "scissors";
}


function getHumanChoice() {
    let humanInput = prompt("Enter rock, paper or scissors").toLowerCase()
    if (humanInput === "rock")
        return "rock";
    else if (humanInput === "paper")
        return "paper";
    else if (humanInput === "scissors")
        return "scissors";
    else return "Please enter a Valid input"
}

let humanScore = 0
let computerScore = 0


function playRound(computerChoice, humanChoice) {
    if (computerChoice === humanChoice) {
        console.log(`"TIE!" \n you choose ${humanChoice} and computer choose ${computerChoice}`)
    }
    else if ((computerChoice === "rock" && humanChoice === "paper") || (computerChoice === "paper" && humanChoice === "scissors") || 
    (computerChoice === "scissors" && humanChoice === "rock")) {
        console.log(`"YOU WIN! \n you choose ${humanChoice} and computer chose ${computerChoice}`)
        return "human-wins";
    }
    else if ((humanChoice === "rock" && computerChoice === "paper")|| (humanChoice === "paper" && computerChoice === "scissors")|| 
    (humanChoice === "scissors" && computerChoice === "rock")) {
        console.log(`"YOU LOSE!" \n you choose ${humanChoice} and computer choose ${computerChoice}`)
        return "computer-wins"
    }
    else {
        console.log ("something broke Enter a valid input")
    }
}


function playGame() {
    for(let i=0; i < 5; i++) {
        const computerSelection = getComputerChoice()
        const humanSelection = getHumanChoice()

        let result = playRound (computerSelection,humanSelection)
        if (result === "human-wins")
            humanScore++;
        else if (result === "computer-wins")
            computerScore++;
        console.log(`your score: ${humanScore} Computer score; ${computerScore}`)
    }
    if (humanScore < computerScore) {
        console.log(`"Computer-Wins" Human Score ${humanScore} Computer Score ${computerScore}`)
    }
    else if (computerScore < humanScore) {
        console.log(`Human-Wins Human Score ${humanScore} Computer Score ${computerScore}`)
    }
    else if (humanScore == computerScore) {
        console.log (`Equal Score Human Score ${humanScore} Computer Score ${computerScore}`)
    }
}
playGame()