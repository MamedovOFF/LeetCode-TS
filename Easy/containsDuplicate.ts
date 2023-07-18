function containsDuplicate(nums: number[]): boolean {
  for (let i = 0; i < nums.length; i++) if (nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i])) return true
  return false
}

function containsDuplicateTwo(nums: number[]): boolean {
  return nums.length !== new Set(nums).size
}
