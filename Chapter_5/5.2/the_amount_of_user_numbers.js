'use strict';

let sum = (a, b) => +a + +b;

let args = process.argv;

let a = args[2];
let b = args[3];

console.log(sum(a, b));

