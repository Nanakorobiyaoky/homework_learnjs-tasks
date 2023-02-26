'use strict';

function filterRangeInPlace(arr, min, max) {
    let arrOfIndexes = []
    for (let i = 0; i < arr.length; i++) {
        !(arr[i] >= min && arr[i] < max) ? arrOfIndexes.push(i) : {};

    }
    arrOfIndexes.reverse();
    for (let i of arrOfIndexes) {
        arr.splice(i, 1);

    }

}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

console.log(arr)