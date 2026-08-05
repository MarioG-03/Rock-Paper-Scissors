const rockBtn = document.querySelector(".rockBtn");
const paperBtn = document.querySelector(".paperBtn");
const scissorsBtn = document.querySelector(".scissorsBtn");
const restartBtn = document.querySelector(".restartBtn");

const displayCPUChoice = document.querySelector(".displayCPUChoice");
const displayResult = document.querySelector(".displayResult");
const scoreboard = document.querySelector(".scoreboard")

    rockBtn.addEventListener("click", () => playRound("rock"));
    paperBtn.addEventListener("click", () => playRound("paper"));
    scissorsBtn.addEventListener("click", () => playRound("scissors"));

    let playerScore = 0;
    let cpuScore = 0;

    const options = ["rock", "paper", "scissors"];

    function playRound(playerChoice) {
        let cpuIndex = Math.floor(Math.random() * options.length);
        const cpuChoice = options[cpuIndex];
        displayCPUChoice.textContent = "CPU selects " + cpuChoice;

        const result = getResult(playerChoice, cpuChoice);
        displayResult.textContent = result;

        updateScore(result);
        scoreboard.textContent = `Player: ${playerScore}  CPU: ${cpuScore}`;
    }   

    function getResult(playerChoice, cpuChoice) {
        const playerIndex = options.indexOf(playerChoice);
        const cpuIndex = options.indexOf(cpuChoice);

        if ((playerIndex === 0 && cpuIndex === 2) || 
            (playerIndex === 1 && cpuIndex === 0) || 
            (playerIndex === 2 && cpuIndex === 1)) {
        
            return "The player wins!";
        }

        else if (playerIndex === cpuIndex) {
            return "It's a draw!";
        } 

        else {
            return "The CPU wins!";
        }
    }

    function updateScore(result) {
        if (result === "The player wins!") playerScore++;
        else if (result === "The CPU wins!") cpuScore++;
    }

    restartBtn.addEventListener ("click", function() {
        playerScore = 0;
        cpuScore = 0;
        displayCPUChoice.textContent = "";
        displayResult.textContent = "";
        scoreboard.textContent = `Player: 0  CPU: 0`;
    });
