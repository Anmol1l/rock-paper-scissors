function getComputerChoice (){
    let choiceRandomiser = Math.floor(Math.random()*3)+1
    // console.log (choiceRandomiser)
    if (choiceRandomiser === 1 )
        return "rock";
    else if (choiceRandomiser === 2)
        return "paper";
    else return "scissors";
}

// take human input with buttons

const rockBtn = document.querySelector("#rock")
const paperBtn = document.querySelector("#paper")
const scissorsBtn = document.querySelector("#scissors")

rockBtn.addEventListener ('click' , function () {playRound(getComputerChoice(),"rock"), trackScore(), ScoreDisplay()} )
paperBtn.addEventListener ('click' , function () {playRound(getComputerChoice(),"paper"), trackScore(), ScoreDisplay()} )
scissorsBtn.addEventListener ('click' , function () {playRound(getComputerChoice(),"scissors"), trackScore(), ScoreDisplay()} )

let result = document.querySelector(".result-window")
result.style.whiteSpace = "pre-line";



function playRound(computerChoice, humanChoice) {
    if (computerChoice === humanChoice) {
        result.textContent = `"TIE!" \n you choose ${humanChoice} and computer choose ${computerChoice}`
    }
    else if ((computerChoice === "rock" && humanChoice === "paper") || (computerChoice === "paper" && humanChoice === "scissors") || 
    (computerChoice === "scissors" && humanChoice === "rock")) {
        humanScore ++ ;
        result.textContent = `"YOU WIN! \n you choose ${humanChoice} and computer choose ${computerChoice}`
        return "human-wins";
    }
    else if ((humanChoice === "rock" && computerChoice === "paper")|| (humanChoice === "paper" && computerChoice === "scissors")|| 
    (humanChoice === "scissors" && computerChoice === "rock")) {
        computerScore ++ ;
        result.textContent = `"YOU LOSE!" \n you choose ${humanChoice} and computer choose ${computerChoice}`
        return "computer-wins"
    }
    else {
        console.log ("something broke Enter a valid input")
    }
}

let humanScore = 0
let computerScore = 0

let finalScore = document.querySelector(".final-score")
let currentScore = document.querySelector(".current-score")
currentScore.style.whiteSpace = "pre-line";

function trackScore() {
    if (humanScore === 5){
        finalScore.textContent = "Human Wins"
    }
    else if (computerScore === 5) {
        finalScore.textContent = "Computer Wins"
    }
}
function ScoreDisplay() {
    currentScore.textContent = `Computer Score: ${computerScore}
    Human Score: ${humanScore}`

}