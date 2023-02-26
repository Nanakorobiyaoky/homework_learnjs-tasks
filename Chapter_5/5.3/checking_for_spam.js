'use strict';

function checkSpam(str) {
    let localLowerStr = str.toLowerCase()
    return localLowerStr.includes('viagra') || localLowerStr.includes('xxx');
}


console.log(checkSpam('viagrasodjkfikjsdf'));
console.log(checkSpam('asdasdasXXXjsdfljsdlkf'));
console.log(checkSpam(''));
console.log(checkSpam('grasodjkfikjsdf'));