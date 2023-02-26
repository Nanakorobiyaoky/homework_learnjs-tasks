'use strict';

function getAverageAge(arr) {
    let ageSum = 0;
    for (let user of arr) ageSum += +user.age;
    return ageSum/arr.length;
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28