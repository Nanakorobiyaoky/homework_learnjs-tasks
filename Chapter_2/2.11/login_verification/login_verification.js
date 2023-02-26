'use strict';

let login = prompt('Кто там?', '');

if (login == undefined) {
    alert('Отменено');

} else if (login == 'Admin') {
    let adminPassword = prompt('Пароль?', '')

    if (adminPassword == undefined) {
        alert('Отменено');

    } else if (adminPassword == 'Я Главный') {
        alert('Здравствуйте!');

    } else {
        alert('Неверный пароль');

    }

} else {
    alert('Я вас не знаю');
}