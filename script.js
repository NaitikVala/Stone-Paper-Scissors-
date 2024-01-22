let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const genComputerChoice = () => {
    const option = ["rock" , "paper" , "scissors"];
    // rock ,paper , scissors
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];
}

const drawGame = () =>
{
    console.log("Game was draw");
    msg.innerText = "Game was Draw. Play Again"
    msg.style.backgroundColor = "#081b31"
};

const showWinner = (userwin , userchoice , compchoice) => {
    if(userwin) 
    {
        userscore++;
        userscorepara.innerText = userscore;
        console.log("You Win !!!");
        // msg.innerText = "You Win !";
        msg.innerText = `You win ! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }
    else
    {
        compscore++;
        compscorepara.innerText = compscore;
        console.log("You Lose !!!");
        // msg.innerText = "You Lose !"
        msg.innerText = `You Lose ! ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "Red";
    }
}

const playgame = (userchoice) => {
    console.log("user-choice = " , userchoice);
    // Generate computer choice -> modular
    const compchoice = genComputerChoice();
    console.log("Computer choice = ",compchoice);

    if(userchoice === compchoice)
    {
        // Draw Game
        drawGame();
    }
    else
    {
        let userwin =  true;
        if(userchoice === "rock") 
        {
            // Paper , scissors
            userwin = compchoice === "paper" ? false : true;
        }
        else if(userchoice === "paper") 
        {
            // rock , scissors
            userwin = compchoice === "scissors" ? false : true;
        }
        else
        {
            // Paper , rock
            userwin = compchoice === "rock" ? false : true;
        }
        showWinner(userwin , userchoice , compchoice);
    }

}

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click" , () => {
        const userchoice = choice.getAttribute("id");
        // console.log("Choice was clicked",userchoice);
        playgame(userchoice);
    });
});