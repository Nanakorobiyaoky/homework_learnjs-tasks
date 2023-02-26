'use strict';

function isEmpty(obj) {
    for (let key in obj) {
        return true;

    }
    return false;
}

let user = {};

console.log(isEmpty(user))  // false

user.name = 'John'

console.log(isEmpty(user))  // true