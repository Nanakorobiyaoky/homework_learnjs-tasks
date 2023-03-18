'use strict';

function printNumbersInterval(from, to) {
    let a = setInterval( () => {
        if (from === to) clearInterval(a);
        console.log(from++);
    }, 1000);
}

function printNumbersTimeout(from, to) {
    setTimeout( () => {
        console.log(from);
        if (from !== to) {
            setTimeout(printNumbersTimeout, 1000, ++from, to);
        }
    })
}

printNumbersInterval(10, 15)
// printNumbersTimeout(10, 15)