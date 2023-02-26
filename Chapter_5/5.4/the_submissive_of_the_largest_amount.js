'use strict';

function getMaxSubSum(arr) {
    let maximumSum = 0;
    let currentSum = 0;

    for (let elem of arr) {
        currentSum += elem;
        if (currentSum > maximumSum) {
            maximumSum = currentSum;
        } else if (currentSum < 0) {
            currentSum = 0
        }
    }

    return maximumSum;
}

console.log( getMaxSubSum([-1, 2, 3, -9]) ); // 5
console.log( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
console.log( getMaxSubSum([-2, -1, 1, 2]) ); // 3
console.log( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
console.log( getMaxSubSum([1, 2, 3]) ); // 6
console.log( getMaxSubSum([-1, -2, -3]) ); // 0