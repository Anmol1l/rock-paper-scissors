function getComputerChoice (){
    let choiceRandomiser = Math.floor(Math.random()*3)+1
    // console.log (choiceRandomiser)
    if (choiceRandomiser === 1 )
        return "rock";
    else if (choiceRandomiser === 2)
        return "paper";
    else return "scissors";
}
// getComputerChoice()

function getHumanChoice() {
    let humanInput = prompt("Enter rock, paper or scissors").toLowerCase()
    if (humanInput === "rock")
        return "rock";
    else if (humanInput === "paper")
        return "paper";
    else if (humanInput === "scissors")
        return "scissors";
    else return "Please enter a Valid output"
}
// getHumanChoice()

let humanScore = 0
let computerScore = 0

function playRound(computerChoice, humanChoice) {
    if (computerChoice === humanChoice) {
        console.log(`"TIE!" \n you choose ${humanChoice} and computer choose ${computerChoice}`)
    }
    else if ((computerChoice === "rock" && humanChoice === "paper") || (computerChoice === "paper" && humanChoice === "scissors") || 
    (computerChoice === "scissors" && humanChoice === "rock"))
        console.log(`"YOU WIN! \n you choose ${humanChoice} and computer chose ${computerChoice}`)
    else if ((humanChoice === "rock" && computerChoice === "paper")|| (humanChoice === "paper" && computerChoice === "scissors")|| 
    (humanChoice === "scissors" && computerChoice === "rock")) {
        console.log(`"YOU LOSE!" \n you choose ${humanChoice} and computer choose ${computerChoice}`)
    }
    else {
        console.log ("something broke Enter a valid output")
    }
}

const computerSelection = getComputerChoice()
const humanSelection = getHumanChoice()

playRound (computerSelection, humanSelection)