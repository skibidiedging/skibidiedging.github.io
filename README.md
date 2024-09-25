<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Game Switcher</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 50px;
        }
        input {
            padding: 10px;
            font-size: 16px;
            margin: 5px;
        }
        button {
            padding: 10px 20px;
            font-size: 16px;
            margin: 5px;
        }
        .game {
            display: none;
        }
        .active {
            display: block;
        }
        #snake-game {
            border: 1px solid black;
            margin: 20px auto;
            position: relative;
            width: 200px;
            height: 200px;
        }
        .snake {
            background-color: green;
            position: absolute;
        }
        .food {
            background-color: red;
            position: absolute;
        }
    </style>
</head>
<body>

    <h1>Game Switcher</h1>
    
    
    
    <div id="welcomeMessage" style="display: none;"></div>

    <button onclick="showGame('guessing')">Number Guessing Game</button>
    <button onclick="showGame('snake')">Snake Game</button>

    <div id="guessing" class="game active">
        <h2>Number Guessing Game</h2>
        <p>Guess a number between 1 and 100:</p>
        <input type="number" id="guess" min="1" max="100" />
        <button onclick="checkGuess()">Submit Guess</button>
        <div id="message"></div>
        <button id="restart" style="display:none;" onclick="startGame()">Play Again</button>
    </div>

    <div id="snake" class="game">
        <h2>Snake Game</h2>
        <div id="snake-game">
            <div id="snake" class="snake"></div>
            <div id="food" class="food"></div>
        </div>
        <div id="snakeMessage"></div>
        <button onclick="startSnakeGame()">Start Game</button>
    </div>

    <script>
        // Number Guessing Game Logic
        let randomNumber;
        let attempts = 0;
        let playerName = '';

        function setName() {
            playerName = document.getElementById('playerName').value;
            if (playerName) {
                document.getElementById('welcomeMessage').innerText = `Welcome, ${playerName}!`;
                document.getElementById('welcomeMessage').style.display = 'block';
                document.getElementById('playerName').value = '';
            } else {
                alert('Please enter a name.');
            }
        }

        function startGame() {
            randomNumber = Math.floor(Math.random() * 100) + 1;
            attempts = 0;
            document.getElementById('message').innerText = '';
            document.getElementById('restart').style.display = 'none';
            document.getElementById('guess').value = '';
        }

        function checkGuess() {
            const guess = Number(document.getElementById('guess').value);
            attempts++;

            if (guess < 1 || guess > 100) {
                document.getElementById('message').innerText = 'Please guess a number between 1 and 100.';
            } else if (guess < randomNumber) {
                document.getElementById('message').innerText = 'Too low';
            } else if (guess > randomNumber) {
                document.getElementById('message').innerText = 'Too high';
            } else {
                document.getElementById('message').innerText = `${playerName}, you won in ${attempts} attempts!`;
                document.getElementById('restart').style.display = 'block';
            }
        }

        function showGame(game) {
            const games = document.querySelectorAll('.game');
            games.forEach(g => g.classList.remove('active'));
            document.getElementById(game).classList.add('active');

            if (game === 'guessing') {
                startGame(); // Restart the guessing game when shown
            } else if (game === 'snake') {
                startSnakeGame(); // Start Snake game
            }
        }

        // Snake Game Logic
        let snake, food, snakeLength, snakeDirection, snakePositions, gameInterval;

        function startSnakeGame() {
            snake = document.getElementById('snake');
            food = document.getElementById('food');
            snakeLength = 1;
            snakePositions = [{ x: 0, y: 0 }];
            snakeDirection = { x: 0, y: 0 };

            placeFood();
            document.getElementById('snakeMessage').innerText = `${playerName}, use arrow keys to move the snake.`;
            document.addEventListener('keydown', changeDirection);
            gameInterval = setInterval(moveSnake, 200);
        }

        function placeFood() {
            const x = Math.floor(Math.random() * 10) * 20;
            const y = Math.floor(Math.random() * 10) * 20;
            food.style.left = `${x}px`;
            food.style.top = `${y}px`;
            food.classList.add('food');
        }

        function changeDirection(event) {
            switch (event.key) {
                case 'ArrowUp':
                    snakeDirection = { x: 0, y: -20 };
                    break;
                case 'ArrowDown':
                    snakeDirection = { x: 0, y: 20 };
                    break;
                case 'ArrowLeft':
                    snakeDirection = { x: -20, y: 0 };
                    break;
                case 'ArrowRight':
                    snakeDirection = { x: 20, y: 0 };
                    break;
            }
        }

        function moveSnake() {
            const newHead = {
                x: snakePositions[0].x + snakeDirection.x,
                y: snakePositions[0].y + snakeDirection.y
            };

            // Check for collisions
            if (newHead.x < 0 || newHead.x >= 200 || newHead.y < 0 || newHead.y >= 200 || snakePositions.some(pos => pos.x === newHead.x && pos.y === newHead.y)) {
                clearInterval(gameInterval);
                alert(`${playerName}, game over! Your score was ${snakeLength}.`);
                return;
            }

            // Add new head
            snakePositions.unshift(newHead);

            // Check if snake eats food
            if (newHead.x === parseInt(food.style.left) && newHead.y === parseInt(food.style.top)) {
                snakeLength++;
                placeFood();
            } else {
                snakePositions.pop(); // Remove last segment if no food eaten
            }

            renderSnake();
        }

        function renderSnake() {
            snake.style.width = '20px';
            snake.style.height = '20px';
            snake.style.position = 'absolute';
            snake.style.left = `${snakePositions[0].x}px`;
            snake.style.top = `${snakePositions[0].y}px`;
            snake.classList.add('snake');
        }

        // Start the game when the page loads
        window.onload = () => showGame('guessing');
    </script>

</body>
</html>
