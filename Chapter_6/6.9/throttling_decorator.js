'use strict';

function throttle(func, ms) {

    let isThrottled = false,
        savedArgs;

    function wrapper(...args) {

        if (isThrottled) {
            savedArgs = arguments;
            return;
        }

        func.call(this, ...args);

        isThrottled = true;

        setTimeout(function() {
            isThrottled = false;
            if (savedArgs) {
                wrapper.call(this, ...savedArgs);
                savedArgs = undefined;
            }
        }, ms);
    }

    return wrapper;
}

function f(a) {
    console.log(a)
}

let f1000 = throttle(f, 1000);

f1000(1);
f1000(2);
f1000(3);
f1000(4);

setTimeout ( () => {
    f1000(5);
    f1000(6);
    f1000(7);
    f1000(8);
}, 1000)



