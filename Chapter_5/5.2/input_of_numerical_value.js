'use strict';

function readNumber() {
    while (true) {
        let n = prompt('Введите число', '');
        if (!isNaN(n)) {
            alert(n);
            break
        }
    }
}

readNumber()