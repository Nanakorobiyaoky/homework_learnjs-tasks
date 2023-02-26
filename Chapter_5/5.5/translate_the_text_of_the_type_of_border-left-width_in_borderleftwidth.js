'use strict';

let capitalize = (str) => (str[0].toUpperCase() + str.slice(1));

function camelize(str) {
    let arr = str.split('-');
    let firstElem = [arr.shift()]

    arr = arr.map(capitalize);

    let result = firstElem.concat(arr)

    return result.join('');
}


console.log(camelize("background-color") === 'backgroundColor');
console.log(camelize("list-style-image") === 'listStyleImage');
console.log(camelize("-webkit-transition") === 'WebkitTransition');
