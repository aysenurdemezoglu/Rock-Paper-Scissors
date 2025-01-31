const userScoreSpan = document.getElementById('user-score');
const computerScoreSpan = document.getElementById('computer-score');
const resultDiv = document.querySelector('.result p');
const messageP = document.getElementById('message');
const choices = document.querySelectorAll('.choice');

let userScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

const resultMessages = {
    win: {
        r: "Rock smashes scissors. You win!",
        p: "Paper covers rock. You win!",
        s: "Scissors cut paper. You win!"
    },
    lose: {
        r: "Rock smashes scissors. You lose...",
        p: "Paper covers rock. You lose...",
        s: "Scissors cut paper. You lose..."
    },
    draw: "It's a draw!"
};

function determineWinner(userChoice, computerChoice) {
    if(userChoice === computerChoice) return 'draw';
    
    const winConditions = {
        r: 's',
        p: 'r',
        s: 'p'
    };
    
    return winConditions[userChoice] === computerChoice ? 'win' : 'lose';
}

function updateGame(result, userChoice, computerChoice) {
    switch(result) {
        case 'win':
            userScore++;
            userScoreSpan.textContent = userScore;
            resultDiv.textContent = resultMessages.win[userChoice];
            messageP.textContent = "You won! 🔥";
            break;
            
        case 'lose':
            computerScore++;
            computerScoreSpan.textContent = computerScore;
            resultDiv.textContent = resultMessages.lose[computerChoice];
            messageP.textContent = "You lost...";
            break;
            
        case 'draw':
            resultDiv.textContent = resultMessages.draw;
            messageP.textContent = "Try again! 🤝";
            break;
    }
}

function playRound(userChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);
    updateGame(result, userChoice, computerChoice);
}

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        playRound(choice.id);
    });
});