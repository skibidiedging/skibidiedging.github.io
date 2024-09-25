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
            border: 2px solid black;
            margin: 20px auto;
            position: relative;
            width: 400px; /* Increased width */
            height: 400px; /* Increased height */
            background-color: #f0f0f0; /* Light background for better contrast */
        }
        .snake {
            background-color: green;
            position: absolute;
            width: 20px; /* Width of each snake segment */
            height: 20px; /* Height of each snake segment */
        }
        .food {
            background-color: red;
            position: absolute;
            width: 20px; /* Width of the food */
            height: 20px; /* Height of the food */
        }
    </style>
</head>
<body>

    
    
    <div id="welcomeMessage" style="display: none;"></div>
    <h2>MADE BY OWEN

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
            <div class="food"></div>
        </div>
        <div id="snakeMessage"></div>
        <button onclick="startSnakeGame()">Start Game</button>
    </div>

    <script>
        // Number Guessing Game Logic
        let randomNumber;
        let attempts = 0;
        let playerName = '';

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
            border: 2px solid black;
            margin: 20px auto;
            position: relative;
            width: 400px;
            height: 400px;
            background-color: #f0f0f0;
        }
        .snake {
            background-color: green;
            position: absolute;
            width: 20px;
            height: 20px;
        }
        .food {
            background-color: red;
            position: absolute;
            width: 20px;
            height: 20px;
        }
    </style>
</head>
<body>

    <div id="welcomeMessage" style="display: none;"></div>
    <h2>MADE BY OWEN</h2>

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
            <div class="food"></div>
        </div>
        <div id="snakeMessage"></div>
        <button onclick="startSnakeGame()">Start Game</button>
    </div>

    <script>
        // Number Guessing Game Logic
        let randomNumber;
        let attempts = 0;
        let playerName = '';

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
            snake = [{ x: 0, y: 0 }];
            snakeLength = 1;
            snakeDirection = { x: 20, y: 0 }; // Start moving to the right
            placeFood();
            document.getElementById('snakeMessage').innerText = `${playerName}, use arrow keys to move the snake.`;
            document.addEventListener('keydown', changeDirection);
            gameInterval = setInterval(moveSnake, 200);
        }

        function placeFood() {
            const x = Math.floor(Math.random() * (400 / 20)) * 20; // Updated for new game size
            const y = Math.floor(Math.random() * (400 / 20)) * 20; // Updated for new game size
            const foodElement = document.querySelector('.food');
            foodElement.style.left = `${x}px`;
            foodElement.style.top = `${y}px`;
            foodElement.style.display = 'block'; // Ensure food is visible
        }

        function changeDirection(event) {
            switch (event.key) {
                case 'ArrowUp':
                    if (snakeDirection.y === 0) snakeDirection = { x: 0, y: -20 };
                    break;
                case 'ArrowDown':
                    if (snakeDirection.y === 0) snakeDirection = { x: 0, y: 20 };
                    break;
                case 'ArrowLeft':
                    if (snakeDirection.x === 0) snakeDirection = { x: -20, y: 0 };
                    break;
                case 'ArrowRight':
                    if (snakeDirection.x === 0) snakeDirection = { x: 20, y: 0 };
                    break;
            }
        }

        function moveSnake() {
            const newHead = {
                x: snake[0].x + snakeDirection.x,
                y: snake[0].y + snakeDirection.y
            };

            // Check for collisions
            if (newHead.x < 0 || newHead.x >= 400 || newHead.y < 0 || newHead.y >= 400 || snake.some(pos => pos.x === newHead.x && pos.y === newHead.y)) {
                clearInterval(gameInterval);
                alert(`${playerName}, game over! Your score was ${snakeLength - 1}.`);
                return;
            }

            // Add new head
            snake.unshift(newHead);

            // Check if snake eats food
            const foodElement = document.querySelector('.food');
            if (newHead.x === parseInt(foodElement.style.left) && newHead.y === parseInt(foodElement.style.top)) {
                snakeLength++;
                placeFood();
            } else {
                snake.pop(); // Remove last segment if no food eaten
            }

            renderSnake();
        }

        function renderSnake() {
            const snakeGame = document.getElementById('snake-game');
            snakeGame.innerHTML = ''; // Clear previous snake and food

            snake.forEach(segment => {
                const snakeSegment = document.createElement('div');
                snakeSegment.classList.add('snake');
                snakeSegment.style.left = `${segment.x}px`;
                snakeSegment.style.top = `${segment.y}px`;
                snakeGame.appendChild(snakeSegment);
            });

            const foodElement = document.querySelector('.food');
            foodElement.style.display = 'block'; // Ensure food is visible
        }

        // Start the game when the page loads
        window.onload = () => showGame('guessing');
    </script>
