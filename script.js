let userScore= 0;
let compScore= 0;

let choices= document.querySelectorAll(".choice");
let msg= document.querySelector(".msg");
let userScoreHead= document.querySelector(".user");
let compScoreHead= document.querySelector(".comp");
let newGame= document.querySelector("button");

const drawGame= () => {
    msg.innerText= ("Game was draw, play again.");
    msg.style.backgroundColor= "#8ecae6";
}

const genCompChoice= () => {
    const options= ["rock", "paper", "scissors"];
    let randomIdx= Math.floor(Math.random()*3);
    return options[randomIdx];
}

const showWinner= (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScoreHead.innerText=`${userScore}`;
        msg.innerText= (`You Win!, your ${userChoice} beats computer's ${compChoice}`);
        msg.style.backgroundColor= "#4d8560";
    }else{
        compScore++;
        compScoreHead.innerText=`${compScore}`;
        msg.innerText= (`You Lose!, computer's ${compChoice} beats your ${userChoice}`);
        msg.style.backgroundColor= "#ff3f16";
    }
}

let playgame= (userChoice) => {
    let compChoice=genCompChoice(userChoice);
    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin= true;
        if(userChoice=="rock"){
            userWin= compChoice==="paper"? false : true;
        }else if(userChoice=="paper"){
            userWin= compChoice==="rock"? true : false;
        }else{
            userWin= compChoice==="rock"? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      const userChoice = choice.getAttribute("id");
      playgame(userChoice);
    });
  });

newGame.addEventListener("click", ()=> {
    userScore=0;
    compScore=0;
    msg.innerText="Play your move.";
    msg.style.backgroundColor= "#219ebc";
    userScoreHead.innerText=`${userScore}`;
    compScoreHead.innerText=`${compScore}`;
})

