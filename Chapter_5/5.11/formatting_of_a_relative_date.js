'use strict';

function dateToString(date){
    let format = (number) => (number < 10 ? `0${number}` : number);

    let day = format(date.getDate());
    let month = format(date.getMonth() + 1);
    let year = format(date.getFullYear() % 100);
    let hour = format(date.getHours());
    let minutes = format(date.getMinutes());

    return `${day}.${month}.${year} ${hour}:${minutes}`;
}

function formatDate(date) {
    let currentDate = new Date();
    let diff = Math.abs(currentDate - date) / 1000;  // в секундах

    if (diff <= 1) return 'прямо сейчас';
    if (diff <= 60) return `${diff} сек. назад`;
    if (diff <= 3600) return `${diff / 60} мин. назад`;

    return dateToString(date)

}

console.log( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"
//
// // вчерашняя дата вроде 31.12.2016, 20:00
console.log( formatDate(new Date(new Date - 86400 * 1000)) );