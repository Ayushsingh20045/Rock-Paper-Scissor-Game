let userScore = 0;
let compScore = 0;
let choices = document.querySelectorAll(".choice");
let userscorepara = document.querySelector("#user-score");
let computerscorepara = document.querySelector("#computer-score");
let msg = document.querySelector("#msg");


const gencompchoice = () => { //generate computer choice randomly
    const options = ["rock", "paper", "scissor"];
    const randomidx = Math.floor(Math.random() * 3);   //floor removing decimals
    return options[randomidx];
}
const drawGame = () => {
    console.log("Game was draw");
    msg.innerText = "Game was draw,play again"
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin) => {
    if (userWin == true) {
        userScore++;
        userscorepara.innerText = userScore;
        console.log("You Win");
        msg.innerText = "you win!";
        msg.style.backgroundColor = "green";
    }
    else {
        compScore++
        computerscorepara.innerText = compScore;
        console.log("Computer Win")
        msg.innerText = "you lose."
        msg.style.backgroundColor = "red";
    }

}
const playGame = (userChoice) => { //generate user choice
    console.log("user choice is=", userChoice);
    //computer choice
    const compchoice = gencompchoice();
    console.log("computer choice is=", compchoice);

    if (userChoice === compchoice) {
        //draw condition
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            // comp choice = paper,Scissor
            userWin = compchoice === "paper" ? false : true;

        }
        else if (userChoice === "paper") {
            //comp=rock,scissor
            userWin = compchoice === "scissor" ? true : false;
        }
        else {
            //comp=rock,paper
            userWin = compchoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
};



choices.forEach((choice) => {

    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice)
    });
});