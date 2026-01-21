function start() {
    console.log("Start button clicked");
    window.location.href = './src/start/signin.html';
}

document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById('start-button');
    if(startButton) {
        startButton.addEventListener('click', start);
    }
});