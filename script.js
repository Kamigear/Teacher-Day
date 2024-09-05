function requestFullscreen() {
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
    }
}

document.getElementById('fullscreenBtn').addEventListener('click', requestFullscreen);

const loadingContainer = document.getElementById('loadingContainer');
const loadingMessage = document.getElementById('loadingMessage');
const fullscreenBackground = document.getElementById('fullscreenBackground');
const message = document.getElementById('message');

fullscreenBackground.style.display = 'none';
loadingContainer.style.display = 'none';
loadingMessage.style.display = 'none';
message.style.display = 'block';
document.getElementById('fullscreenBtn').style.display = 'block';

document.getElementById('fullscreenBtn').addEventListener('click', function() {
    message.style.display = 'none';
    this.style.display = 'none';

    loadingContainer.style.display = 'flex';
    loadingMessage.style.display = 'block';

    setTimeout(() => {
        loadingContainer.style.display = 'none';
        loadingMessage.style.display = 'none';
        
        alert('Github says: Error occurred. Please refresh the page.');
        document.body.style.backgroundColor = 'white';

        let statusMessage = document.getElementById('statusMessage');
        if (!statusMessage) {
            statusMessage = document.createElement('h2');
            statusMessage.id = 'statusMessage';
            statusMessage.textContent = 'Still don\'t work, maybe something is wrong..';
            document.body.appendChild(statusMessage);
        } else {
            statusMessage.textContent = 'Still don\'t work, maybe something is wrong..';
        }

        setTimeout(() => {
            document.body.style.backgroundColor = '';
            if (!fullscreenBackground) {
                const newBackground = document.createElement('div');
                newBackground.id = 'fullscreenBackground';
                newBackground.className = 'fullscreen-background';
                document.body.appendChild(newBackground);
            } else {
                fullscreenBackground.style.display = 'block';
            }

            if (statusMessage) {
                statusMessage.textContent = 'Oh congrats, you succeeded!';
            }
        }, 4000);
    }, 3000);
});
