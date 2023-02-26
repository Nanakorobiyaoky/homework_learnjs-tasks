'use strict';

let num;
do {
    num = prompt('Введите число больше 100', '');
    if (num == undefined) break;
} while (num <= 100)