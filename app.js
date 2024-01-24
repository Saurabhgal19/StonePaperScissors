let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const comp_score = document.querySelector("#comp-score");
const user_score = document.querySelector("#user-score")

const generateComptChoice = () => {
  const options =["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return options[randomNumber];

}

const drawGame = () => {
  console.log("Game is Draw")
}

const playGame = (userChoice) => {
  console.log("User Choice =" ,userChoice);

  //Generating Computer Choice 
  const comptChoice = generateComptChoice();
  console.log("Computer Choice =", comptChoice);

  //Game Patterns
  if(userChoice === comptChoice)
  {
    //Draw Condition
    drawGame();
    msg.innerHTML="Game is Draw. Play Again";
    msg.style.backgroundColor="Indigo"
  }

  else if((userChoice ==="rock" && comptChoice==="scissors") ||
  (userChoice==="scissors" && comptChoice==="paper")||
  (userChoice==="paper" && comptChoice==="rock")){
    //User Win condition
    userScore++;
    console.log("User Win");
    user_score.innerHTML= `${userScore}`;

    msg.innerHTML = `You win! ${userChoice} Beats ${comptChoice}`;
    msg.style.backgroundColor="green"

    }else{
      //Comp Win condition
      compScore++ ;
      console.log("User Loss");

      comp_score.innerHTML=`${compScore}`
      msg.innerHTML = `You Lose! ${comptChoice} beats your ${userChoice}`;
      msg.style.backgroundColor="red"
    }
  };

choices.forEach((choice) => {
  choice.addEventListener("click", ()=> {
    const userChoice = choice.getAttribute("id");
    //console.log("choice is clicked", userChoice)

    playGame(userChoice);
  })
})


