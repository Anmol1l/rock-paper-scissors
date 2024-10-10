function getComputerChoice (){
    let computerChoice = Math.floor(Math.random()*3)+1
    console.log (computerChoice)
    if (computerChoice === 1 )
        console.log ("rock")
    else if (computerChoice === 2)
        console.log ("paper")
    else console.log("scissors")
}
console.log (getComputerChoice())
