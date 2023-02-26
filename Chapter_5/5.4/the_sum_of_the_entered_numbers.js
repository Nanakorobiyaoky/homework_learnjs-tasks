'use strict';

function sumArray(array) {
    let result = 0;
    for (let elem of array) {
        result += elem;
    }
    return result
}

function sumInput() {
    let arr = []
    while (true) {
        let elem = prompt('Input digit:', '');
        if ( elem == null || elem === '' || isNaN(elem)) break;
        arr.push(+elem);

    }
    return sumArray(arr);

}

alert(sumInput());

