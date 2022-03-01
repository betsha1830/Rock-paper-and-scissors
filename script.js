const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;

function computerPlay () {
    let move = Math.floor(Math.random() * 3) ;
    if (move == 0) return 'Rock'
    else if (move == 1) return 'Paper'
    else return 'Scissors';
}

let computerSelection = '';
let playerSelection = '';
let playerWin = 0, computerWin = 0;

function playRound (computerSelection, playerSelection) {
    let playerScore = document.querySelector('.human-score');
    let computerScore = document.querySelector('.computer-score');
    let message = document.querySelector('.message');

    if (playerWin >= 4 || computerWin >= 4) {
        playerWin = 0;
        computerWin = 0;
        playerScore.innerText = '0';
        computerScore.innerText = '0';
        message.innerText += ' Game Over!'
    }

    else {
        if (playerSelection == `ROCK` && computerSelection == `Paper`) {
            computerWin += 1;
            message.innerText = `Computer chooses Paper. Computer Wins!`;
            computerScore.innerText = `${computerWin}`;
        }
        else if (playerSelection == `ROCK` && computerSelection ==  `Rock`) {
            message.innerText = `Computer chooses Rock. It's a tie.`;
        }
        else if (playerSelection == `ROCK` && computerSelection == `Scissors`) {
            playerWin += 1;
            message.innerText = 'Computer chooses Scissors. Player Wins!';
            playerScore.innerText = `${playerWin}`;
        }
        else if (playerSelection == `PAPER` &&  computerSelection == `Rock`) {
            playerWin += 1;
            message.innerText = 'Computer chooses Rock. Player Wins!';
            playerScore.innerText = `${playerWin}`;
        }
        else if (playerSelection == `PAPER` &&  computerSelection == `Paper`) {
            message.innerText = `Computer chooses Paper. It's a tie.`;
        }
        else if (playerSelection == `PAPER` &&  computerSelection == `Scissors`) {
            computerWin += 1;
            message.innerText = `Computer chooses Scissors. Computer Wins!`;
            computerScore.innerText = `${computerWin}`;
        }
        else if (playerSelection == `SCISSORS` && computerSelection == `Rock`) {
            computerWin += 1;
            message.innerText = `Computer chooses Rock. Computer Wins!`;
            computerScore.innerText = `${computerWin}`; 
        }
        else if (playerSelection == `SCISSORS` && computerSelection == `Paper`) {
            playerWin += 1;
            message.innerText =`Computer chooses Paper. Player Wins!`;
            playerScore.innerText = `${playerWin}`;
        }
        else if (playerSelection == `SCISSORS` && computerSelection == `Scissors`) {
            message.innerText = `Computer chooses Scissors. It's a tie.`;
        }
    }

}


function game () {
    let buttons = document.querySelectorAll('button');
    let message = document.querySelector('.message');
    let playerScore = document.querySelector('.human-score');
    let computerScore = document.querySelector('.computer-score');
    
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            let choice = button.className;
            choice = choice.toUpperCase();
            playRound(computerPlay(), choice);
        })
    })
}

game();