'use strict';

let age = 18;

if (!(14 <= age && age <= 90)) {
    console.log(`${age} out of range [14 : 90]`);
} else {
    console.log(`${age} in range [14 : 90]`);
}

if (14 > age || age > 90) {
    console.log(`${age} out of range [14 : 90]`);
} else {
    console.log(`${age} in range [14 : 90]`);
}
