function filter(arr, fn) {
    const res = [];
    arr.forEach((el, idx) => {
        if (fn(el, idx)) {
            res.push(el);
        }
    });
    return res;
}
;
//# sourceMappingURL=FilterElementsForArray.js.map