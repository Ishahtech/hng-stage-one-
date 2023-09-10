function updateCurrentUTCTime() {
    const currentUTCTimeInMilliseconds = Date.now();
    const element = document.querySelector('[data-testid="currentUTCTime"]');
    if (element) {
        element.textContent = `Current UTC Time (milliseconds): ${currentUTCTimeInMilliseconds}`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Update the time every second (1000 milliseconds)
    setInterval(updateCurrentUTCTime, 1000);
});
