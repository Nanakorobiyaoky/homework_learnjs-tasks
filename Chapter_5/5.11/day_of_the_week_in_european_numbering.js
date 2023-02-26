'use strict';

function getWeekDay(date) {
    let day = date.getDay();
    return day === 0 ? 7 : day;

}

let date = new Date(2012, 0, 1);  // 3 января 2012 года
console.log( getWeekDay(date) );