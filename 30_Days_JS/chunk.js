function chunk(arr, size) {
    const res = [];
    for (let i = 0; i < arr.length; i += size) {
        res.push(arr.slice(i, i + size));
    }
    console.log(res);
    return res;
}
chunk([1, 2, 3, 4, 5], 2);
