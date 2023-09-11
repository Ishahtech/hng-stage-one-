function padZero(num) {
    return num < 10 ? "0" + num : num;
}

function updateCurrentUTCTime() {
    const currentUTCDate = new Date();
    const hours = padZero(currentUTCDate.getUTCHours());
    const minutes = padZero(currentUTCDate.getUTCMinutes());
    const seconds = padZero(currentUTCDate.getUTCSeconds());
    const milliseconds = padZero(currentUTCDate.getUTCMilliseconds());

    const element = document.querySelector('[data-testid="currentUTCTime"]');
    if (element) {
        element.textContent = ` ${hours}:${minutes}:${seconds}.${milliseconds} UTC`;
    }
}

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Call the function to initially display the time
    updateCurrentUTCTime();

    // Update the time every millisecond (1 millisecond)
    setInterval(updateCurrentUTCTime, 1);
});

function getCurrentDayOfWeek() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDate = new Date();
    const dayOfWeekIndex = currentDate.getUTCDay();
    
    return daysOfWeek[dayOfWeekIndex];
}

function displayCurrentDayOfWeek() {
    const currentDayOfWeek = getCurrentDayOfWeek();
    const element = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    if (element) {
        element.textContent = `Today is ${currentDayOfWeek}`;
    }
}

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Call the function to display the current day of the week
    displayCurrentDayOfWeek();
});




