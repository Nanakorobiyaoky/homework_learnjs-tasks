'use strict';

let styles = [
    'Джаз',
    'Блюз',
]
console.log(styles);

styles.push('Рок-н-ролл');
console.log(styles);

let middleOfArray = Math.floor(styles.length / 2);
styles[middleOfArray] = 'Классика';
console.log(styles);

console.log(styles.shift());
console.log(styles);

styles.unshift('Рэп', 'Регги')
console.log(styles);