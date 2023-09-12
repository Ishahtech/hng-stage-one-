function updateCurrentUTCTime() {
    const currentUTCDate = new Date();
    const currentUTCTimeInMilliseconds = currentUTCDate.getTime();
    const element = document.querySelector('[data-testid="currentUTCTime"]');
    if (element) {
        element.textContent = ` ${currentUTCTimeInMilliseconds}`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    updateCurrentUTCTime();
    setInterval(updateCurrentUTCTime, 1000);
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
        element.textContent = `${currentDayOfWeek}`;
    }
}

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Call the function to display the current day of the week
    displayCurrentDayOfWeek();
});




