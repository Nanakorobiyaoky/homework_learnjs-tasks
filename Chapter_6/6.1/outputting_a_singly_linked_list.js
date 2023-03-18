'use strict';

function printListRec(list) {
    console.log(list.value);

    if (list.next) {
        printListRec(list.next);
    }

}

function printListCycle(list) {
    while(list) {
        console.log(list.value);
        list = list.next;
    }

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



printListRec(list)
printListCycle(list)