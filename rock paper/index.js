let playerscore = 0;
let compscore = 0;

const userscore=document.querySelector(".user-score")
const compuscore=document.querySelector(".comp-score")
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");
const playagain = document.querySelector(".playagain");
const reset = document.querySelector(".reset");




const gencompchoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randind = Math.floor(Math.random() * 3);
  // console.log("Computer Choice =",options)
  return options[randind];
};

const matchtie = () => {
  // console.log("Game was Draw!");
  msg.innerText="Game was Draw"
};

const showwinner = (userwin) => {
  if (userwin) {
  playerscore++;
userscore.innerText=playerscore
  // console.log("You Win!");
    msg.innerText="You Win!"
  } else {
    compscore++;
    // console.log("You Lose");
    msg.innerText="You Lose"
    // msg.style.color="red"
    compuscore.innerText=compscore
  }
};

const playgame = (userchoice) => {
  console.log("User Choice =", userchoice);
  // compchoice()
  let compchoice = gencompchoice();
  console.log("Computer Choice =", compchoice);

  if (userchoice===compchoice) {
    matchtie();
    
  } else {
    let userwin = true;
    if (userchoice == "rock") {

      userwin = compchoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      userwin = compchoice === "scissors" ? false : true;
    }
     else {
      userwin = compchoice === "rock" ? false: true;
    }
    showwinner(userwin,userchoice,compchoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    //   console.log("User Choice =", userchoice);
    playgame(userchoice);
  });
});

playagain.addEventListener(click,resetgame())

const resetgame =()=>{
// playgame(userchoice)
playerscore=0
compscore=0
userscore.innerText="0"
compuscore.innerText=compscore
playgame(userchoice , gencompchoice)
}


// const compchoice = () => {
//   const options = ["Rock", "Paper", "Scissors"];
//   const randind = Math.floor(Math.random() * 3);
//   // console.log("Computer Choice =", compchoice)
//   return options[randind];
// };

// const gamedraw = (playgame) => {
//   console.log("Game was Draw",playgame);
// };

// const playgame = (userchoice) => {
//   console.log("User Choice =", userchoice);
//   // compchoice()
//   const gencompchoice = compchoice();
//   console.log("Computer Choice =", gencompchoice);

//   if (userchoice === gencompchoice) {
//     // gamedraw
//     console.log("Game Was Draw")
//     gamedraw();

//   }
// };

// choices.forEach((choice) => {
//   choice.addEventListener("click", () => {
//     let userchoice = choice.getAttribute("id");
//     playgame(userchoice);
//   });
// })
//
