function getComputerChoice (){
    let computerChoice = Math.floor(Math.random()*3)+1
    console.log (computerChoice)
    if (computerChoice === 1 )
        console.log ("rock")
    else if (computerChoice === 2)
        console.log ("paper")
    else console.log("scissors")
}
getComputerChoice()

function getHumanChoice() {
    let humanChoice = prompt("Enter rock, paper or scissors").toLowerCase()
    if (humanChoice === "rock")
        console.log("rock")
    else if (humanChoice === "paper")
        console.log("paper")
    else if (humanChoice === "scissors")
        console.log("scissors")
    else console.log("Enter a valid input")
}
getHumanChoice()