
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

    <h2>made by owen james dale at bhhs|216.186.17.220|
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
                document.getElementById('message').innerText = 'Please enter a number between 1 and 100.';
            } else if (guess < randomNumber) {
                document.getElementById('message').innerText = 'Too low! Try again.';
            } else if (guess > randomNumber) {
                document.getElementById('message').innerText = 'Too high! Try again.';
            } else {
                document.getElementById('message').innerText = `Congratulations! You've guessed the number in ${attempts} attempts!`;
                document.getElementById('restart').style.display = 'block';
            }
        }

        // Start the game when the page loads
        window.onload = startGame;
    </script>

</body>
</html>
