'use strict';

function getSecondsToday() {
    let midnightDateTime = new Date();
    let currentDateTime = new Date();

    midnightDateTime.setHours(0);
    midnightDateTime.setMinutes(0);
    midnightDateTime.setSeconds(0);
    midnightDateTime.setMilliseconds(0);

    return Math.round((currentDateTime.getTime() - midnightDateTime.getTime()) / 1000);

}

console.log(getSecondsToday());