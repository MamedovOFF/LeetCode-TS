class TimeLimitedCache {
  constructor() {
    this.cache = {}
  }
  set(key, value, duration) {
    var _a
    let res = false
    if (((_a = this.cache[key]) === null || _a === void 0 ? void 0 : _a.time) > new Date().getTime()) res = true
    this.cache[key] = {
      value: value,
      time: new Date().getTime() + duration,
    }
    return res
  }
  get(key) {
    var _a, _b
    if (((_a = this.cache[key]) === null || _a === void 0 ? void 0 : _a.time) > new Date().getTime())
      return (_b = this.cache[key]) === null || _b === void 0 ? void 0 : _b.value
    return -1
  }
  count() {
    var _a
    let res = 0
    for (let key in this.cache) {
      if (((_a = this.cache[key]) === null || _a === void 0 ? void 0 : _a.time) > new Date().getTime()) {
        res++
      }
    }
    return res
  }
}
//# sourceMappingURL=TimeLimitedCache.js.map
