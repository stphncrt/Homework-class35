'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
function addCurrentTime() {
    const currentTimeElement = document.createElement('h1');

    setInterval(() => {
        const now = new Date();
        let hour = now.getHours();
        if (hour.toString().length === 1) {
            hour = '0' + hour;
        }
        let minutes = now.getMinutes();
        if (minutes.toString().length === 1) {
            minutes = '0' + minutes;
        }
        let seconds = now.getSeconds();
        if (seconds.toString().length === 1) {
            seconds = '0' + seconds;
        }
        const currentTime = hour + ":" + minutes + ":" + seconds;
        currentTimeElement.textContent = currentTime;
    })
    document.body.appendChild(currentTimeElement);
}

window.addEventListener('DOMContentLoaded', addCurrentTime);