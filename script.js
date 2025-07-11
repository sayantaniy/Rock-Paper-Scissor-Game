let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");

let msg = document.querySelector("#msg");

let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

const drawGame=() => {
    console.log("Game was a draw");
    msg.innerText="Game is a draw 👀 Play again 😬 ";
    msg.style.backgroundColor="black";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin){
        console.log("You win");
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText = `You Win 😏 your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        console.log("You Lose");
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText =`You Lose 🤭 Computer's ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
    };


const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const ranIdx= Math.floor(Math.random()*3);
    return options[ranIdx];
}

const playGames = (userChoice) => {
    console.log(" User Choice = ", userChoice);
    const compChoice = genCompChoice();
    console.log(" Comp Choice = ", compChoice);

    if (userChoice===compChoice){
        drawGame();
       
    }else{
        let userWin=true;
        if (userChoice==="rock"){
            //scissors or paper can be given by comp
            userWin=compChoice==="paper"? false:true;
        } else if (userChoice==="paper"){
            // rock, sci
            userWin=compChoice==="scissor"? false:true;
}else if(userChoice="scissor"){
    //rock,paper
    userWin=compChoice==="rock"? false:true;
}
showWinner(userWin, userChoice, compChoice);

    }
};


choices.forEach((choice)=> {
    choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGames(userChoice);
    });
});