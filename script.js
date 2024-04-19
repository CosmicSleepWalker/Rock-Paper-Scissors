const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';

let getComputerChoice = () => {
    let randomNum = Math.floor(Math.random() * 3);
    switch(randomNum){
        case 0:
            return ROCK;
        case 1:
            return PAPER;
        case 2:
            return SCISSORS;
    }
};

let playRound = (playerSelection, computerSelection) => {
    let losePlayer = `You Lose! ${computerSelection} beats ${playerSelection}`;
    let winPlayer = `You Win! ${playerSelection} beats ${computerSelection}`;
    let tie = "You Tied!";
    if(playerSelection === SCISSORS && computerSelection === ROCK || playerSelection === PAPER && computerSelection === SCISSORS || playerSelection === ROCK && computerSelection === PAPER){
        return losePlayer;
    }else if(computerSelection === playerSelection){
        return tie;
    }else{
        return winPlayer;
    }
};


const btns = document.querySelectorAll("button");
let lose = 0;
let win = 0;
btns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        let selection = "";
        switch(btn.id){
            case "btn1":
                selection = ROCK;
                break;
            case "btn2":
                selection = PAPER;
                break;
            case "btn3":
                selection = SCISSORS;
                break;
        }

        const container = document.querySelector("#container");
        const result = playRound(selection, getComputerChoice());
        if(result.indexOf("Win") > -1){
            console.log("we're in here");
            win++;
        }else if(result.indexOf("Lose") > -1){
            lose++;
        }
        const content = document.createElement("div");
        content.classList.add("content");
        content.textContent = result; 
        if(win === 5){
            content.textContent  = `Player wins: ${win} - ${lose}`;
            win = 0;
            lose = 0;
        }else if(lose === 5){
            content.textContent =  `Computer wins: ${win} - ${lose}`;
            win = 0;
            lose = 0;
        }
        container.appendChild(content);
    });

});



/*let playGame = () => {
    let computer = 0;
    let player = 0;
    let result = "";
    for(let i = 0; i < 5; i++){
        let playerSelection = prompt("Rock Paper or Scissors?").toUpperCase();
        let computerSelection = getComputerChoice();
        let resultRound = playRound(playerSelection, computerSelection);
        console.log(resultRound);
        if(resultRound.indexOf("Lose!") > 0){
            computer++;
        }else if(resultRound.indexOf("Win!" > 0)){
            player++;
        }
    }
    if(player > computer){
        result = "The Winner is Player!";
    }else if(computer > player){
        result = "The Winner is Computer!";
    }else{
        result = "You Tied!"
    }
    console.log(result)
}

playGame();*/



