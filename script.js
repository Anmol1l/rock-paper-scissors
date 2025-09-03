function getComputerChoice (){
    let choiceRandomiser = Math.floor(Math.random()*3)+1
    // console.log (choiceRandomiser)
    if (choiceRandomiser === 1 )
        return "rock";
    else if (choiceRandomiser === 2)
        return "paper";
    else return "scissors";
}
let computerSelect = getComputerChoice()

const rockBtn = document.querySelector("#rock")
const paperBtn = document.querySelector("#paper")
const scissorsBtn = document.querySelector("#scissors")

rockBtn.addEventListener ('click' , function () {playRound(computerSelect,"rock")} )
paperBtn.addEventListener ('click' , function () {playRound(computerSelect,"paper")} )
scissorsBtn.addEventListener ('click' , function () {playRound(computerSelect,"scissors")} )



let humanScore = 0
let computerScore = 0


function playRound(computerChoice, humanChoice) {
    if (computerChoice === humanChoice) {
        console.log(`"TIE!" \n you choose ${humanChoice} and computer choose ${computerChoice}`)
    }
    else if ((computerChoice === "rock" && humanChoice === "paper") || (computerChoice === "paper" && humanChoice === "scissors") || 
    (computerChoice === "scissors" && humanChoice === "rock")) {
        console.log(`"YOU WIN! \n you choose ${humanChoice} and computer choose ${computerChoice}`)
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
