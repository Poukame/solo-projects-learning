const countdownDisplay = document.getElementById('countdown-display');
const rocket = document.getElementById('rocket');
rocket.style.transform = 'rotate(-45deg) scale(2)';
let timeRemaining = 10;

let countDown;
launch(timeRemaining);

function launch(time) {
    countDown = setInterval(() => {
        time -= 1;
        countdownDisplay.innerHTML = time;
        switch (time) {
            case 3:
                countdownDisplay.innerHTML = 'READY';
                break;
            case 2:
                countdownDisplay.innerHTML = 'SET';
                break;
            case 1:
                countdownDisplay.innerHTML = 'ARM';
                break;
            case 0:
                countdownDisplay.innerHTML = 'FIIIIIIRRRRREEEEE';
                rocket.classList.add('launch-effect');
                break;
            }
        if (time <= 0) {
            clearInterval(countDown);
        }
    }, 1000);
}
