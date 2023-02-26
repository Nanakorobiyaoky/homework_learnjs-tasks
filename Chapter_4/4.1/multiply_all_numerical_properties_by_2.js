'use strict';

function multiplyNumeric(obj) {

    for (let key in obj) {
        if (isNaN(+obj[key])) continue;
        obj[key] = obj[key] * 2;

    }

}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);