'use strict';

function printListRec(list) {
    if (list.next) {
        printListRec(list.next);
    }

    console.log(list.value);

}

function printListCycle(list) {
    let values = [];

    while(list) {
        values.push(list.value);
        list = list.next;
    }

    for (let value of values.reverse()) console.log(value);
}

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};



printListCycle(list)
printListRec(list)