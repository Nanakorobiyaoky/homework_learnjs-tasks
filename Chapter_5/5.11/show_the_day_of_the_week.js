'use strict';

function getWeekDay(date) {
    let week = new Map([
        [0, 'ВС'],
        [1, 'ПН'],
        [2, 'ВТ'],
        [3, 'СР'],
        [4, 'ЧТ'],
        [5, 'ПТ'],
        [6, 'СБ'],
    ]);
    return week.get(date.getDay())

}

let date = new Date(2012, 0, 3);  // 3 января 2012 года
console.log( getWeekDay(date) );