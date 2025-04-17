console.log('hi')
let humanscore = 0
let computerscore = 0

let container = document.getElementById("buttoncontainer")
let rockbutton = document.getElementById("rock")
let paperbutton = document.getElementById("paper")
let scissorbutton = document.getElementById("scissor")
let buttons = document.querySelectorAll("#buttoncontainer button")

let resultdisp = document.getElementById("resultDisplay")
let scoredisp = document.getElementById("scoreDisplay")
let winnerdisp = document.getElementById("winnerDisplay")
buttons.forEach(button => {
    button.addEventListener('click', ()=> handleClick(button.id))
    console.log(button.id)
})

function getcomputerchoice()
{
    value = Math.random()
    if (value <= 0.33)
    {
        return "rock"
    }
    else if ( value >=0.33 && value <= 0.66)
    {
        return "paper"
    }
    else if (value > 0.66)
    {
        return "scissor"
    }
}


function handleClick(choice)
{

    let computerchoice = getcomputerchoice()
    let resultandscore = playround(choice, computerchoice)
    resultdisp.innerHTML = resultandscore.result
    scoredisp.innerHTML = resultandscore.score

    if ( humanscore == 5)
    {
        winnerdisp.innerHTML = "You won the game!"
        rockbutton.disabled = true
        scissorbutton.disabled = true
        paperbutton.disabled = true
    }
    else if( computerscore == 5)
    {
        winnerdisp.innerHTML = "You lost the game! Computer wins!"
        rockbutton.disabled = true
        scissorbutton.disabled = true
        paperbutton.disabled = true
    }
    

    
}



function playround(humanchoice, computerchoice)
{
    humanchoice = humanchoice.toUpperCase();
    computerchoice = computerchoice.toUpperCase();
    
    if ( humanchoice === computerchoice)
    {
        return {result : `Your choice: ${humanchoice} | Computer's choice: ${computerchoice}<br>It's a tie!`,
    score : `Your score: ${humanscore} | Computer's score: ${computerscore}`}

    }

    else if ( humanchoice === "ROCK" && computerchoice === "SCISSOR" )
    {
        humanscore +=1 ;
        return {result : `Your choice: ${humanchoice} | Computer's choice: ${computerchoice} <br> You win! Rock crushes Scissor!`,
    score : `Your score: ${humanscore} | Computer's score: ${computerscore}`}
    }

    else if ( humanchoice === "ROCK" && computerchoice === "PAPER")
    {   
        computerscore+=1;
        return {result : `Your choice: ${humanchoice} | Computer's choice: ${computerchoice} <br> You lose! Paper beats Rock!`,
    score : `Your score: ${humanscore} | Computer's score: ${computerscore}`}
    }

    else if ( humanchoice === "SCISSOR" && computerchoice === "PAPER")
    {
        humanscore +=1 ;
        return {result : `Your choice: ${humanchoice} | Computer's choice: ${computerchoice} <br> You win! Scissor cuts Paper!`,
    score : `Your score: ${humanscore} | Computer's score: ${computerscore}`}
    }

    else if ( humanchoice === "SCISSOR" && computerchoice === "ROCK")
    {
        computerscore+=1;
        return {result : `Your choice: ${humanchoice} | Computer's choice: ${computerchoice} <br> You lose! Rock crushes Scissor!`,
    score : `Your score: ${humanscore} | Computer's score: ${computerscore}`}
    }

    else if ( humanchoice === "PAPER" && computerchoice === "ROCK")
    {
        humanscore +=1 ;
        return {result : `Your choice: ${humanchoice} | Computer's choice: ${computerchoice} <br> You win! Paper beats rock!`,
    score : `Your score: ${humanscore} | Computer's score: ${computerscore}`}
    }

    else if ( humanchoice === "PAPER" && computerchoice === "SCISSOR")
    {
        computerscore+=1;
        return {result : `Your choice: ${humanchoice} | Computer's choice: ${computerchoice} <br> You lose! Scissor beats paper!`,
    score : `Your score: ${humanscore} | Computer's score: ${computerscore}`}
    }
}
