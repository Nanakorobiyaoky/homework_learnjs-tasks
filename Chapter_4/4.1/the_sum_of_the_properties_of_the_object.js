'use strict';


function symSalaries(obj) {
    let result = 0;

    for (let person in obj) {
        result += obj[person];

    }
    return result

}

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130

}

let sum;

sum = symSalaries(salaries);

console.log(sum);  // 390

