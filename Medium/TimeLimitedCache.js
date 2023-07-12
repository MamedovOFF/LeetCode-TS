var TimeLimitedCache = /** @class */ (function () {
    function TimeLimitedCache() {
        this.cache = {};
    }
    TimeLimitedCache.prototype.set = function (key, value, duration) {
        this.cache[key] = {
            value: value,
            time: new Date().getTime() + duration
        };
        return false;
    };
    TimeLimitedCache.prototype.get = function (key) {
        if (this.cache[key].time > new Date().getTime())
            return this.cache[key].value;
        return -1;
    };
    TimeLimitedCache.prototype.count = function () {
        var res = 0;
        for (var key in this.cache) {
            if (this.cache[key].time > new Date().getTime()) {
                res++;
            }
        }
        return res;
    };
    return TimeLimitedCache;
}());
var obj = new TimeLimitedCache();
obj.set(1, 42, 1000); // false
obj.set(3, 53, 1000); // false
console.log(obj.get(1)); // 42
console.log(obj.get(3)); // 53
console.log(obj.count()); // 1
