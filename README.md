
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Number Guessing Game</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 50px;
        }
        input {
            padding: 10px;
            width: 50px;
            font-size: 16px;
        }
        button {
            padding: 10px 20px;
            font-size: 16px;
        }
        #message {
            margin-top: 20px;
            font-size: 20px;
        }
    </style>
</head>
<body>

    <h2>made by owen 
    <h1>Number Guessing Game</h1>
    <p>Guess a number between 1 and 100:</p>
    <input type="number" id="guess" min="1" max="100" />
    <button onclick="checkGuess()">Submit Guess</button>

    <div id="message"></div>
    <button id="restart" style="display:none;" onclick="startGame()">Play Again</button>

    <script>
        let randomNumber;
        let attempts = 0;

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
                document.getElementById('message').innerText = 'I said 1-100 dumbass.';
            } else if (guess < randomNumber) {
                document.getElementById('message').innerText = 'Too low';
            } else if (guess > randomNumber) {
                document.getElementById('message').innerText = 'Number to big just like me.';
            } else {
                document.getElementById('message').innerText = `You won in ${attempts} bet you cant do it again tho`;
                document.getElementById('restart').style.display = 'block';
            }
        }

        // Start the game when the page loads
        window.onload = startGame;
    </script>


