'use strict';

function* pseudoRandomGenerator(seed) {

    let value = seed

    while (true) {
        value = value * 16807 % 2147483647
        yield value

    }
}

const generator = pseudoRandomGenerator(-5)

console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)
