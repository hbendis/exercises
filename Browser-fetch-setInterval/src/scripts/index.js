//Your code goes here!

const pomodoroTimer = document.querySelector('#btn-start');
const stopButton = document.querySelector('#btn-reset');
const pauseButton = document.querySelector('#btn-pause');
const continueButton = document.querySelector('#btn-continue');


// START
startButton.addEventListener('click', () => {
    toggleClock();
})

// Reset
stopButton.addEventListener('click', () => {
    toggleClock();
})
// PAUSE
pauseButton.addEventListener('click', () => {
    toggleClock();
})

// STOP
stopButton.addEventListener('click', () => {
    toggleClock(true);
})

let isClockRunning = false;
// in seconds = 25 mins
let workSessionDuration = 1500;
let currentTimeLeftInSession = 1500;

// in seconds = 5 mins;
let breakSessionDuration = 300;

const toggleClock = (reset) => {
    if (reset) {
        // STOP THE TIMER
    } else {
        if (isClockRunning === true) {
            // PAUSE THE TIMER
            isClockRunning = false;
        } else {
            // START THE TIMER
            isClockRunning = true;
        }
    }
}

clockTimer = setInterval(() => {
    // decrease time left / increase time spent
    currentTimeLeftInSession--;
}, 1000)

clearInterval(clockTimer);

clockTimer = setInterval(() => {
    currentTimeLeftInSession--;
    displayCurrentTimeLeftInSession();
}, 1000);

const displayCurrentTimeLeftInSession = () => {
    const secondsLeft = currentTimeLeftInSession;
    let result = '';
    const seconds = secondsLeft % 60;
    const minutes = parseInt(secondsLeft / 60) % 60;
    let hours = parseInt(secondsLeft / 3600);
    // add leading zeroes if it's less than 10
    function addLeadingZeroes(time) {
        return time < 10 ? `0${time}` : time
    }
    if (hours > 0) result += `${hours}:`
    result += `${addLeadingZeroes(minutes)}:${addLeadingZeroes(seconds)}`
    pomodoroTimer.innerText = result.toString();
}
const x = 70;
x % 60;
// 10
const minutes = parseInt(secondsLeft / 60) % 60;

let hours = parseInt(secondsLeft / 3600);

function addLeadingZeroes(time) {
    return time < 10 ? `0${time}` : time
}
return time < 10 ? `0${time}` : time
if (hours > 0) result += `${hours}:`
result += `${addLeadingZeroes(minutes)}:${addLeadingZeroes(seconds)}`

pomodoroTimer.innerText = result;