'use strict';

function Accumulator(startingValue) {
    this.value = +startingValue;
    this.read = function() {
        let input = +prompt('input', '');
        this.value += input;
    }
}


let accumulator = new Accumulator(0);

accumulator.read();
accumulator.read();

alert(accumulator.value);