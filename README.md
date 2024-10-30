<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ice Cream Survey</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Ice Cream Flavor Survey|read me|</h1>
        <nav>
            <ul>
                <li><a href="#survey">Survey</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="survey">
            <h2>What’s Your Favorite Ice Cream Flavor?</h2>
            <form>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>

                <label for="flavors">Choose your favorite flavor:</label>
                <select id="flavors" name="flavors" required>
                    <option value="">--Please choose an option--</option>
                    <option value="vanilla">Vanilla</option>
                    <option value="chocolate">Chocolate</option>
                    <option value="strawberry">Strawberry</option>
                    <option value="mint">Mint</option>
                    <option value="cookie_dough">Cookie Dough</option>
                    <option value="rocky_road">Rocky Road</option>
                </select>

                <label for="feedback">Additional Comments:</label>
                <textarea id="feedback" name="feedback" rows="4"></textarea>

                <button type="submit">Submit Survey</button>
            </form>
        </section>

        <section id="about">
            <h2>About Us</h2>
            <p>We love ice cream and want to know your favorites! Your feedback helps us improve our offerings.</p>
        </section>

        <section id="contact">
            <h2>Contact Us</h2>
            <p>Email: contact@icecreamsurvey.com</p>
        </section>
    </main>

    <footer>
        <p>&copy; 2024 PasterXPaster. All rights reserved.</p>
    </footer>
</body>
</html>
