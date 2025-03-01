const player = document.querySelector('.player');
const maze = document.querySelector('.maze');
const exit = document.querySelector('.exit');

let x = 0;
let y = 0;
const step = 30;
let gameOver = false;

function movePlayer() {
    player.style.left = `${x}px`;
    player.style.top = `${y}px`;
}

function checkCollision() {
    const playerRect = player.getBoundingClientRect();
    const walls = document.querySelectorAll('.wall');
    for (let wall of walls) {
        const wallRect = wall.getBoundingClientRect();
        if (playerRect.left < wallRect.right && playerRect.right > wallRect.left &&
            playerRect.top < wallRect.bottom && playerRect.bottom > wallRect.top) {
            return true;
        }
    }
    return false;
}

function checkExit() {
    const playerRect = player.getBoundingClientRect();
    const exitRect = exit.getBoundingClientRect();
    if (playerRect.left < exitRect.right && playerRect.right > exitRect.left &&
        playerRect.top < exitRect.bottom && playerRect.bottom > exitRect.top) {
        alert('You won!');
        gameOver = true;
    }
}

document.addEventListener('keydown', (event) => {
    if (gameOver) return;
    if (event.key === 'ArrowUp' && y > 0) y -= step;
    if (event.key === 'ArrowDown' && y < maze.clientHeight - 30) y += step;
    if (event.key === 'ArrowLeft' && x > 0) x -= step;
    if (event.key === 'ArrowRight' && x < maze.clientWidth - 30) x += step;

    if (checkCollision()) {
        if (event.key === 'ArrowUp') y += step;
        if (event.key === 'ArrowDown') y -= step;
        if (event.key === 'ArrowLeft') x += step;
        if (event.key === 'ArrowRight') x -= step;
    }

    movePlayer();
    checkExit();
});