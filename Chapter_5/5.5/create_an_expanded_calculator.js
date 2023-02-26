'use strict';

function Calculator() {
    this.operators = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,

    };
    this.addMethod = function(operator, func) {
        this.operators[operator] = func;

    }
    this.calculate = function(str) {
        if (str === null || str === undefined || Number.isNaN(str)) {
            console.log('Invalid operation');
            return;

        }

        let elemsArray = str.split(' ');

        let firstOperand = +elemsArray[0];
        let operator = elemsArray[1];
        let secondOperand = +elemsArray[2];

        if (operator in this.operators) {
            return this.operators[operator](firstOperand, secondOperand);

        } else {
            console.log('Invalid operation');

        }

    }

}

let powerCalc = new Calculator;

powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

console.log(powerCalc.calculate('a + b')) // NaN
console.log(powerCalc.calculate('string')) // undefined

console.log(powerCalc.calculate('452 + 5'))
console.log(powerCalc.calculate('78 - 5'))
console.log(powerCalc.calculate('4568 * 854'))
console.log(powerCalc.calculate('542 / 745'))
console.log(powerCalc.calculate('869 ** 4'))