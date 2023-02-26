'use strict';

function topSalary(salaries) {
    let resultName = null;
    let highestSalary = 0;
    for (let [name, salary] of Object.entries(salaries)) {
        if (salary > highestSalary) {
            highestSalary = salary;
            resultName = name;
        }

    }
    return resultName;

}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

console.log(topSalary(salaries))