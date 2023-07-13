function reduce(nums, fn, init) {
    if (nums.length === 0)
        return init;
    let res = init;
    for (let i = 0; i < nums.length; i++)
        res = fn(res, nums[i]);
    return res;
}
//# sourceMappingURL=reduce.js.map