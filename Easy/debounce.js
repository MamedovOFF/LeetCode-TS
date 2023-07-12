function debounce(fn, t) {
    var timeout;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // if (timeout) {
        //
        // } else {
        //
        // }
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            fn(args);
        }, t);
    };
}
var log = debounce(console.log, 100);
log('Hello'); // cancelled
log('Hello'); // cancelled
log('Hello'); // Logged at t=100ms
