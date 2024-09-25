<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Stylish Website</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <nav class="navbar">
            <button class="nav-button">Home</button>
            <button class="nav-button">About</button>
            <button class="nav-button">Services</button>
            <button class="nav-button">Contact</button>
        </nav>
    </header>
    <main>
        <h1>Welcome to My Stylish Website</h1>
        <p>This is where you can add your content.</p>
    </main>
</body>
</html>

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    color: #333;
}

header {
    background-color: #007bff;
    padding: 10px 0;
}

.navbar {
    display: flex;
    justify-content: center;
}

.nav-button {
    background-color: #ffffff;
    border: none;
    border-radius: 5px;
    color: #007bff;
    cursor: pointer;
    font-size: 16px;
    margin: 0 15px;
    padding: 10px 20px;
    transition: background-color 0.3s, transform 0.2s;
}

.nav-button:hover {
    background-color: #e0e0e0;
    transform: translateY(-2px);
}

main {
    text-align: center;
    padding: 50px;
}

h1 {
    font-size: 2.5em;
    margin-bottom: 20px;
}
