'use strict';

const args = process.argv;

let calculator = {
    read() {
        this.prop1 = +args[2];
        this.prop2 = +args[3];

    },
    sum() {
        return this.prop1 + this.prop2;

    },
    mul() {
        return this.prop1 * this.prop2;

    }

}

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());
