/*Реалізувати таймер відліку:

Початок таймера визначати із змінної
Відобразити на сторінці час у форматі 01:25
Коли закінчився таймер зупинити його*/

let timersecond = 5;
const timerElement = document.getElementById('timer');
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const formattedSeconds = secs < 10 ? '0' + secs : secs;
    return `${formattedMinutes}:${formattedSeconds}`;
}
timerElement.textContent = formatTime(timersecond);
const intervalId = setInterval(() => {
    timersecond--;
    if (timersecond <= 0) {
        clearInterval(intervalId);
        timerElement.textContent = '00:00';
        return;
    }
    timerElement.textContent = formatTime(timersecond);
}, 1000); 