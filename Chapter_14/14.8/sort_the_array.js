'use strict';

let animals = ["тигр", "ёж", "енот", "ехидна", "АИСТ", "ЯК"];

animals.sort()
console.log( animals );

let collator = new Intl.Collator();
animals.sort(function(a, b) {
    return collator.compare(a, b);
});

console.log( animals );