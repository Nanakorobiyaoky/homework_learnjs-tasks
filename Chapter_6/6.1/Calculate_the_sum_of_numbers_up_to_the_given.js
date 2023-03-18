'use strict';

function sumToWithCycle(n) {
    let result = 0;
    for (let i = 1; i <= n; i++) result += i;
    return result;
}

function sumToWithRec(n) {
    if (n === 1) return n;
    else return sumToWithRec(n - 1) + n;
}

function sumToArithmeticProgression(n) {
    return (1 + n) * (n / 2);
}


console.log(sumToWithCycle(56));
console.log(sumToWithRec(56));
console.log(sumToArithmeticProgression(56));