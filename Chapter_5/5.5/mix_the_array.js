'use strict';


let shuffle = (array) => {
    let len = array.length;
    let t;
    let i;

    while (len) {
        i = Math.floor(Math.random() * len--);

        t = array[len];
        array[len] = array[i];
        array[i] = t;
    }

    return array;
}

