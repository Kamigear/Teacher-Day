// Handle fullscreen request
document.getElementById('fullscreenBtn').addEventListener('click', () => {
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) { // Firefox
        document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari, and Opera
        document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
        document.documentElement.msRequestFullscreen();
    }
});

// Initial setup to hide loader and message
const loadingContainer = document.getElementById('loadingContainer');
const loadingMessage = document.getElementById('loadingMessage');
const fullscreenBackground = document.getElementById('fullscreenBackground');
const message = document.getElementById('message');

// Hide the fullscreen background initially
fullscreenBackground.style.display = 'none';
loadingContainer.style.display = 'none';
loadingMessage.style.display = 'none';
message.style.display = 'block'; // Ensure the message is displayed initially
document.getElementById('fullscreenBtn').style.display = 'block';

// Handle button click
document.getElementById('fullscreenBtn').addEventListener('click', function() {
    // Hide the <h2> and button elements when the button is clicked
    message.style.display = 'none';
    this.style.display = 'none';

    // Show the loader and loading message
    loadingContainer.style.display = 'flex'; // Show the loader
    loadingMessage.style.display = 'block'; // Show the loading message

    // Simulate a loading process
    setTimeout(() => {
        // Hide the loader and loading message
        loadingContainer.style.display = 'none';
        loadingMessage.style.display = 'none';
        
        // Show alert with the new message
        alert('Github says: Error occurred. Please refresh the page.');

        // Change body background to white and show message
        document.body.style.backgroundColor = 'white'; // Set background to white

        // Create or update the h2 element for the message
        let statusMessage = document.getElementById('statusMessage');
        if (!statusMessage) {
            statusMessage = document.createElement('h2');
            statusMessage.id = 'statusMessage';
            statusMessage.textContent = 'Still don\'t work, maybe something is wrong..';
            document.body.appendChild(statusMessage);
        } else {
            statusMessage.textContent = 'Still don\'t work, maybe something is wrong..';
        }

        // Wait 2 seconds, then show the background image and update the message
        setTimeout(() => {
            document.body.style.backgroundColor = ''; // Reset background color
            if (!fullscreenBackground) {
                const newBackground = document.createElement('div');
                newBackground.id = 'fullscreenBackground';
                newBackground.className = 'fullscreen-background';
                document.body.appendChild(newBackground);
            } else {
                fullscreenBackground.style.display = 'block';
            }

            // Update the message
            if (statusMessage) {
                statusMessage.textContent = 'Oh congrats, you succeeded!';
            }
        }, 2000); // 2 seconds delay
    }, 3000); // Adjust duration as needed
});
