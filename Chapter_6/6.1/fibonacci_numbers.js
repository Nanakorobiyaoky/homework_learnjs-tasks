'use strict';


function fib(n) {
    let firstOperand = 1;
    let secondOperand = 1;
    let currentResult = 2;
    for (let i = 3; i <= n; i++) {
        currentResult = firstOperand + secondOperand;
        firstOperand = secondOperand;
        secondOperand = currentResult;
    }
    return currentResult;
}

console.log(fib(77))