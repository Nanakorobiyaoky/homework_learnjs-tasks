'use strict';

let user = {
    name: "Василий Иванович",
    age: 35
};

let jsonString = JSON.stringify(user);

console.log(typeof jsonString);

let objectFromJSON = JSON.parse(jsonString)

console.log(typeof objectFromJSON);
console.log(objectFromJSON);

