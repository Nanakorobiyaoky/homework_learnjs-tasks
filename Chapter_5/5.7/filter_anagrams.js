'use strict';

function aclean(arr) {
    let dict = new Map(arr.map(word => [word.toLowerCase().split("").sort().join(""), word]));
    return Array.from(dict.values()).join(',')
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"

console.log(new Set() === new Set())