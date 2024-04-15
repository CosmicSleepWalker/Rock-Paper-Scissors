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

let playerSelection = "Paper".toUpperCase();
let computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));
