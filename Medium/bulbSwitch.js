var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function bulbSwitch(n) {
    // @ts-ignore
    var array = __spreadArray([], new Array(n), true).fill('off');
    var round1 = function (arr) {
        return arr.fill('on');
    };
    var round2 = function (arr) {
        for (var i = 0; i < n; i++) {
            if (i % 2 !== 0)
                arr[i] = 'off';
        }
    };
    var round3 = function (arr) {
        for (var i = 0; i < n; i++) {
            if (i % 3 === 0)
                arr[i] = 'off';
        }
    };
    array = round1(array);
    round2(array);
    round3(array);
    var res = 0;
    array.forEach(function (el) {
        if (el === 'on')
            res++;
    });
    return res;
}
function bulbSwitch1(n) {
    return Math.floor(Number(Math.pow(n, 0.5)));
}
console.log(bulbSwitch1(4));
console.log(bulbSwitch(4));
