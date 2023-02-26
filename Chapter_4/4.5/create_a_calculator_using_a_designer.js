'use strict';

const args = process.argv;

function Calculator() {
    this.read = function() {
        this.prop1 = +args[2];
        this.prop2 = +args[3];

    }
    this.sum = function() {
        return this.prop1 + this.prop2;

    }
    this.mul = function() {
        return this.prop1 * this.prop2;

    }

}

let calculator = new Calculator()

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());
