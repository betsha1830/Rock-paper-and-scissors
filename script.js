const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;

function computerPlay () {
    let move = Math.floor(Math.random() * 3) ;
    return move;
}

let computerSelection = '';
let playerSelection = '';
let playerWin = 0, computerWin = 0, round = 5;

function playRound (computerSelection, playerSelection) {
    playerSelection = prompt(`It's your turn`);
    // playerSelection = toString(playerSelection);
    playerSelection = playerSelection.toUpperCase();
    if (playerSelection == `ROCK` && computerSelection == PAPER) {
        computerWin += 1;
        return(`paper beats rock. \n Computer wins.`);
    }
    else if (playerSelection == `ROCK` && computerSelection ==  ROCK) {
        round += 1;
        return(`It's a tie.`);
    }
    else if (playerSelection == `ROCK` && computerSelection == SCISSORS) {
        playerWin += 1;
        return(`rock beats scissors. \n Player wins.`);
    }
    else if (playerSelection == `PAPER` &&  computerSelection == ROCK) {
        playerWin += 1;
        return(`paper beats rock. \n Player wins.`);
    }
    else if (playerSelection == `PAPER` &&  computerSelection == PAPER) {
        round += 1;
        return(`It's a tie.`);
    }
    else if (playerSelection == `PAPER` &&  computerSelection == SCISSORS) {
        computerWin += 1;
        return(`scissors beats paper. \n Computer wins.`);
    }
    else if (playerSelection == `SCISSORS` && computerSelection == ROCK) {
        computerWin += 1;
        return(`rock beats scissors. \n Computer wins.`);
    }
    else if (playerSelection == `SCISSORS` && computerSelection == PAPER) {
        playerWin += 1;
        return(`scissors beats paper. \n Player wins.`);
    }
    else if (playerSelection == `SCISSORS` && computerSelection == SCISSORS) {
        round += 1;
        return(`It's a tie.`);
    }
}

// const playerSelection = 'ROCK';
// const computerSelection = computerPlay();
// console.log(playRound(computerSelection, playerSelection));

function game () {
    playerWin = 0, computerWin = 0;
    for (let i = 0; i < round; i ++) {
        computerSelection = computerPlay();
        console.log(playRound(computerSelection, playerSelection));
        console.log(`Player score ${playerWin}, Computer score ${computerWin}`);
    }
}

game();