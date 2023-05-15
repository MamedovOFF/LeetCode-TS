function removeElement(nums, val) {
    var k = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            nums.splice(i, 1);
            i--;
        }
    }
    return nums.length - k;
}
var nums = [3, 2, 2, 3];
console.log(removeElement(nums, 2));
console.log(nums);
