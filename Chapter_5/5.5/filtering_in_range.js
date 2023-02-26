'use strict';

function filterRange(array, min, max) {
    return array.filter(item => (item >= min && item < max));
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log(filtered)