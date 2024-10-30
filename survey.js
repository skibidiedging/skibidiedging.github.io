<script>
    document.getElementById('toggleInfo').addEventListener('click', function() {
        const aboutSection = document.getElementById('about');
        const contactSection = document.getElementById('contact');

        aboutSection.classList.toggle('hidden');
        contactSection.classList.toggle('hidden');

        this.textContent = aboutSection.classList.contains('hidden') ? 'Show About and Contact' : 'Hide About and Contact';
    });

    // Load stored data from local storage
    window.onload = function() {
        const storedName = localStorage.getItem('name');
        const storedFlavor = localStorage.getItem('flavor');
        const storedFeedback = localStorage.getItem('feedback');

        if (storedName) document.getElementById('name').value = storedName;
        if (storedFlavor) document.getElementById('flavors').value = storedFlavor;
        if (storedFeedback) document.getElementById('feedback').value = storedFeedback;
    };

    // Function to send data to Discord webhook
    function sendToDiscord(name, flavor, feedback) {
        const webhookUrl = 'YOUR_DISCORD_WEBHOOK_URL'; // Replace with your actual webhook URL
        const embed = {
            title: 'New Ice Cream Survey Response',
            fields: [
                { name: 'Name', value: name || 'Anonymous', inline: true },
                { name: 'Favorite Flavor', value: flavor || 'None', inline: true },
                { name: 'Additional Comments', value: feedback || 'No comments', inline: false }
            ],
            color: 3447003 // Optional: color of the embed in decimal
        };

        fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ embeds: [embed] })
        })
        .then(response => {
            if (response.ok) {
                console.log('Message sent successfully!');
            } else {
                console.error('Error sending message:', response.statusText);
            }
        })
        .catch(error => console.error('Error:', error));
    }

    // Store data in local storage and send to Discord on form submission
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const name = document.getElementById('name').value;
        const flavor = document.getElementById('flavors').value;
        const feedback = document.getElementById('feedback').value;

        // Store values in local storage
        localStorage.setItem('name', name);
        localStorage.setItem('flavor', flavor);
        localStorage.setItem('feedback', feedback);

        // Send data to Discord
        sendToDiscord(name, flavor, feedback);

        alert('Thank you for your submission!');
        // Optionally clear the form after submission
        this.reset();
    });
</script>
