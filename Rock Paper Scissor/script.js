let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#message");

const userScorepara = document.querySelector("#userscore");
const compScorepara = document.querySelector("#compscore");

const genCompChoice = () =>{
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame = () => {
    console.log("Game was drawn!");
    msg.innerText = "Game Was Drawn!";
    msg.style.backgroundColor = "orange";
}

const showWinner = (userWin,userChoice,compChoice) => {
    if (userWin){
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText = `You have Won ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        console.log("Computer Won!");
        compScore++;
        compScorepara.innerText = compScore;
        msg.innerText = `You have Lost ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
    
}

const playGame = (userChoice) =>{
    console.log("user choice = ",userChoice);
    // generate computer choice
    const compChoice = genCompChoice();
    console.log("computer choice = ",compChoice);

    // Game DRAW
    if (userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice==="rock"){
            //paper , scissors
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            // rock , scissors
            userWin = compChoice === "scissors" ? false : true;
        }else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin , userChoice , compChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});