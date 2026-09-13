let score = 0;
let timeLeft = 10;
let gameInterval;

const target = document.getElementById('target');
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('start-btn');

function moveTarget() {
    // Generate random positions within the 400x400 container
    const x = Math.floor(Math.random() * 350);
    const y = Math.floor(Math.random() * 350);

    target.style.left = x + 'px';
    target.style.top = y + 'px';
}

target.addEventListener('click', () => {
    score++;
    scoreDisplay.innerText = score;
    moveTarget(); // Move to a new spot immediately when clicked
});

startBtn.addEventListener('click', () => {
    // Reset game
    score = 0;
    timeLeft = 10;
    scoreDisplay.innerText = score;
    timerDisplay.innerText = timeLeft;
    startBtn.disabled = true;
    target.style.display = 'block';

    moveTarget();

    // Start the countdown
    gameInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.innerText = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(gameInterval);
            alert("Game Over! Your score: " + score);
            target.style.display = 'none';
            startBtn.disabled = false;
        }
    }, 1000);
});