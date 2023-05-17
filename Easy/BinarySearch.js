function binarySearch(value, list) {
    var start = 0;
    var end = list.length - 1;
    while (start < end) {
        var mid = Math.floor((start + end) / 2);
        if (list[mid] === value)
            return mid;
        else if (list[mid] < value) {
            start = mid + 1;
            console.log(start, 'start');
        }
        else {
            end = mid - 1;
            console.log(end, 'end');
        }
    }
    return -1;
}
console.log(binarySearch(9, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
