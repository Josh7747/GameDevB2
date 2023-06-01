// Get the game canvas
const canvas = document.getElementById("gameCanvas");
const context = canvas.getContext("2d");

// Set up game variables
const blockWidth = 20;
const pacmanRadius = 10;
let pacmanX = canvas.width / 2;
let pacmanY = canvas.height / 2;
let pacmanDirection = 0;
const pacmanSpeed = 5;
let foodPositions = [];

// Create random food positions
for (let i = 0; i < 50; i++) {
    const x = Math.floor(Math.random() * (canvas.width / blockWidth)) * blockWidth;
    const y = Math.floor(Math.random() * (canvas.height / blockWidth)) * blockWidth;
    foodPositions.push({ x: x, y: y });
}

// Handle keyboard input
document.addEventListener("keydown", handleKeyDown);

function handleKeyDown(event) {
    if (event.keyCode === 37) {
        pacmanDirection = 180;
    } else if (event.keyCode === 39) {
        pacmanDirection = 0;
    } else if (event.keyCode === 38) {
        pacmanDirection = 90;
    } else if (event.keyCode === 40) {
        pacmanDirection = 270;
    }
}

function update() {
    // Update Pac-Man's position
    if (pacmanDirection === 0) {
        pacmanX += pacmanSpeed;
    } else if (pacmanDirection === 180) {
        pacmanX -= pacmanSpeed;
    } else if (pacmanDirection === 90) {
        pacmanY -= pacmanSpeed;
    } else if (pacmanDirection === 270) {
        pacmanY += pacmanSpeed;
    }

    // Check for collisions with food
    for (let i = 0; i < foodPositions.length; i++) {
        const food = foodPositions[i];
        if (pacmanX === food.x && pacmanY === food.y) {
            foodPositions.splice(i, 1);
            break;
        }
    }
}

function draw() {
    // Clear the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Draw Pac-Man
    context.fillStyle = "yellow";
    context.beginPath();
    context.arc(pacmanX, pacmanY, pacmanRadius, 0, 2 * Math.PI);
    context.closePath();
    context.fill();

    // Draw food
    context.fillStyle = "yellow";
    for (const food of foodPositions) {
        context.fillRect(food.x, food.y, blockWidth, blockWidth);
    }
}

function gameLoop() {
    update();
    draw();

    requestAnimationFrame(gameLoop);
}

// Start the game loop
gameLoop();
