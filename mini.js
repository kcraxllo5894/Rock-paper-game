let userscore =0;
let compscore =0;

let choices = document.querySelector(".choice");
let  msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
constcompScorePara =document.querySelector("#comp-score");

const genCompChoice =() =>{
    const options = ["rock","paper","scissors"];
    const  ranIdx  = Math.floor(Math.random()*3);
    return options[randIdx];
};
const drawGame = () =>{
    msg.innerText ="Game was Draw.Play again.";
    msg.style.background = "#081b31";
};
choices.forEach((choice) =>{
  choice.addEventListener("click",() =>{
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
      userScore++;
      userScorePara.innerText = userScore;
      msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
      msg.style.backgroundColor = "green";
    } else {
      compScore++;
      compScorePara.innerText = compScore;
      msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
      msg.style.backgroundColor = "red";
    }
  };
  const playGame = (userChoice) =>{
    const compChoice = genCompChoice();
    if(userChoice  ===compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice  ==="rock"){
            userWin = compChoice==="paper"? false:true;
        }else if(userChoice ==="paper"){
            userWin   = compChoice==="scissor"?false:true;
        }
        else{
            userWin= compChoice ==="rock" ? false :true;
        }
        showWinner(userWin,userChoice,compChoice);

    }
  };


