'use strict';

function pow(x, n) {
    if (n < 1) {
        console.log(`Степень ${n} не поддерживается, используйте натуральное число`);
        return;
      }
    return x**n;

}

console.log(pow(3, 2) == 9);
console.log(pow(3, 3) == 27);
console.log(pow(1, 100) == 1);
console.log(pow(1, 0.1));
