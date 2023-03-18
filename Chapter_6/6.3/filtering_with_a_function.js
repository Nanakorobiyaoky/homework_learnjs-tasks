'use strict';

function inBetween(a, b) {
    return elem => {
        return elem >= a && elem <= b;
    }
}


function inArray(arrWithValidValues) {
    return elem => {
        return arrWithValidValues.includes((elem));
    }
}


let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr.filter(inBetween(1, 6)));

console.log(arr.filter(inArray([1, 2, 4, 3])));
