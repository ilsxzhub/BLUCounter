let number = 0; // keep the last value of the timer/counter
document.getElementById("counterLabel").innerText = number;
document.getElementById("increase").addEventListener("click", () => { // Keep the last value of the counter/timer
    number++;
    document.getElementById("counterLabel").innerText = number;
});
document.getElementById("decrease").addEventListener("click", () => {
    number--;
    document.getElementById("counterLabel").innerText = number;
});
document.getElementById("reset").addEventListener("click", () => {
    number = 0;
    document.getElementById("counterLabel").innerText = number;
});
document.getElementById("Timer").addEventListener("click", () => {
    // Timer code
    let timerValue = 0; //Keep the last value of the timer
    if (document.getElementById("counterLabel").innerText) {
        timerValue = parseInt(document.getElementById("counterLabel").innerText);
    }
    document.getElementById("counterLabel").innerText = timerValue;
    const timerInterval = setInterval(() => {
        timerValue++;
        document.getElementById("counterLabel").innerText = timerValue;
    }, 1000);
    document.getElementById("Stop Timer").addEventListener("click", () => {
        clearInterval(timerInterval);
    });
});
