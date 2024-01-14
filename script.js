let timer;
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let lapCount = 1;

function startStopwatch() {
    timer = setInterval(updateStopwatch, 10); // Update every 10 milliseconds
    document.querySelector('.start').disabled = true;
}

function stopStopwatch() {
    clearInterval(timer);
    document.querySelector('.start').disabled = false;
}

function resetStopwatch() {
    clearInterval(timer);
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    lapCount = 1;
    updateDisplay();
    document.querySelector('.start').disabled = false;
    clearLaps();
}

function updateStopwatch() {
    milliseconds += 10; // Increment by 10 milliseconds
    if (milliseconds === 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
        }
    }
    updateDisplay();
}

function updateDisplay() {
    const display = document.querySelector('.display');
    display.innerHTML = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}<span class="milliseconds">${formatMilliseconds(milliseconds)}</span>`;
}

function formatTime(time) {
    return time < 10 ? '0' + time : time;
}

function formatMilliseconds(milliseconds) {
    return milliseconds < 100 ? (milliseconds < 10 ? '00' : '0') + milliseconds : milliseconds;
}

function recordLap() {
    const lapTime = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}.${formatMilliseconds(milliseconds)}`;
    const lapList = document.querySelector('.lap-list');
    const lapItem = document.createElement('li');
    lapItem.textContent = `Lap ${lapCount}: ${lapTime}`;
    lapList.appendChild(lapItem);
    lapCount++;
}

function clearLaps() {
    const lapList = document.querySelector('.lap-list');
    lapList.innerHTML = '';
}
