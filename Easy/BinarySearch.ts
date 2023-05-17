function binarySearch(value, list) {
    let start = 0;
    let end = list.length - 1
    while (start < end) {
        let mid = Math.floor( (start + end) / 2)
        if (list[mid] === value) return mid
        else if (list[mid] < value) {
            start = mid + 1
        } else  {
            end = mid - 1
        }
    }
    return -1
}

console.log(binarySearch(9, [1,2,3,4,5,6,7,8,9,10]))