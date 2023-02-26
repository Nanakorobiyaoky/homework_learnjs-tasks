'use strict';

function randomInteger(min, max) {
    return min + Math.floor((Math.random() * (max - min)));
}

let counter = {
    $5: 0,
    $6: 0,
    $7: 0,
    $8: 0,
}


for (let i = 0; i < 1_000_000; i++) {
    let result = randomInteger(5, 9);
    counter[`$${result}`]++;

}

for (let c in counter) {
    console.log(counter[c]);
}
