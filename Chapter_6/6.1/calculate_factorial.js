'use strict';

function factorial(n) {
    if (n === 1) return n;
    else return factorial(n - 1) * n;
}

console.log(factorial(10))