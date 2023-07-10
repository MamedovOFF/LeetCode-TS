"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createCounter(init) {
    var counter = init;
    return {
        increment: function () { return counter++; },
        reset: function () { return counter = init; },
        decrement: function () { return counter--; },
        get: function () { return counter; }
    };
}
;
var counter = createCounter(5);
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4
console.log(counter.get());
