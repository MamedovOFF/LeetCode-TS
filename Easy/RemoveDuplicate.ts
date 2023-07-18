function removeDuplicates(nums: number[]): number {
  let k = 0
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      k++
    }
    nums[i - k] = nums[i]
  }
  return nums.length - k
}
