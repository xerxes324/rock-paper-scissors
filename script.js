let humanscore = 0
let computerscore = 0


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


function gethumanchoice()
{
    choice = prompt("Enter your choice: ")
    return choice
}


function playround(humanchoice, computerchoice)
{
    humanchoice = humanchoice.toUpperCase();
    computerchoice = computerchoice.toUpperCase();
    
    if ( humanchoice === computerchoice)
    {
        return `It's a tie.\nYour choice:${humanchoice}\nComputer's choice:${computerchoice}
Your score: ${humanscore}\nComputer's score:${computerscore}`
    }

    else if ( humanchoice === "ROCK" && computerchoice === "SCISSOR" )
    {
        humanscore +=1 ;
        return `Your choice : Rock\nComputer's choice: Scissor
You win! Rock crushes scissor.
Your score: ${humanscore}\nComputer's score:${computerscore}`
    }

    else if ( humanchoice === "ROCK" && computerchoice === "PAPER")
    {   
        computerscore+=1;
        return `Your choice : Rock\nComputer's choice: Paper
You lose! Paper beats rock.
Your score: ${humanscore}\nComputer's score:${computerscore}`
    }

    else if ( humanchoice === "SCISSOR" && computerchoice === "PAPER")
    {
        humanscore +=1 ;
        return `Your choice : Scissor\nComputer's choice: Paper
You win! Scissor beats paper.
Your score: ${humanscore}\nComputer's score:${computerscore}`
    }

    else if ( humanchoice === "SCISSOR" && computerchoice === "ROCK")
    {
        computerscore+=1;
        return `Your choice : Scissor\nComputer's choice: Rock
You lose! Rock crushes scissor.
Your score: ${humanscore}\nComputer's score:${computerscore}`
    }

    else if ( humanchoice === "PAPER" && computerchoice === "ROCK")
    {
        humanscore +=1 ;
        return `Your choice : Paper\nComputer's choice: Rock
You win! Paper beats rock.
Your score: ${humanscore}\nComputer's score:${computerscore}`
    }

    else if ( humanchoice === "PAPER" && computerchoice === "SCISSOR")
    {
        computerscore+=1;
        return `Your choice : Paper\nComputer's choice: Scissor
You lose! Scissor beats paper.
Your score: ${humanscore}\nComputer's score:${computerscore}`
    }
}



function playgame()
{
    for ( let i = 0; i < 5; i++)
    {
        humanselection = gethumanchoice();
        computerselection = getcomputerchoice();
        console.log(playround(humanselection, computerselection))
    }
    console.log(humanscore,"is the human score.")
    console.log(computerscore, "is the computer score.")
    if (humanscore>computerscore)
    {
        return "You win the game!"
    }
    else if ( computerscore > humanscore)
    {
        return "You lose the game!"
    }
    else
    {
        return "It's a draw!"
    }

}

playgame()