function searchInsert(nums: Array<number>, target: number): number {
  const res = nums.findIndex((el) => el === target)
  if (res > 0) {
    return res
  }
  let i = 0
  while (nums[i]) {
    if (nums[i] < target) i++
    else return i
  }
  return i
}
