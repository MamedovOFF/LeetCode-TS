function containsDuplicate(nums) {
  for (let i = 0; i < nums.length; i++) if (nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i])) return true
  return false
}
function containsDuplicateTwo(nums) {
  return nums.length !== new Set(nums).size
}
//# sourceMappingURL=containsDuplicate.js.map
