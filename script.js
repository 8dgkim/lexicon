// Sample word list (you can load this from your backend)
const wordList = ["apple", "banana", "cherry"]; // More than 10,000 words

let currentWordIndex = 0;
let userScore = 0;

function checkWord() {
    const userInput = document.getElementById("word-input").value.toLowerCase();
    const currentWord = wordList[currentWordIndex].toLowerCase();
    
    if (userInput === currentWord) {
        // User guessed correctly
        userScore++;
        currentWordIndex++;
        updateLeaderboard();
        document.getElementById("word-input").value = "";
    } else {
        displayErrorMessage("Incorrect answer. Please try again.");
    }
}

function displayErrorMessage(message) {
    const errorElement = document.createElement("div");
    errorElement.classList.add("error-message");
    errorElement.innerText = message;
    document.getElementById("game-container").appendChild(errorElement);

    // Remove the error message after a few seconds (optional)
    setTimeout(() => {
        errorElement.remove();
    }, 3000); // Remove the message after 3 seconds (adjust as needed)
}

function updateLeaderboard() {
    const leaderboard = document.getElementById("leaderboard");
    const leaderboardEntry = document.createElement("div");
    leaderboardEntry.innerHTML = `<span>Rank: 1</span><span>Username: User</span><span>Score: ${userScore}</span>`;
    leaderboard.appendChild(leaderboardEntry);
}
