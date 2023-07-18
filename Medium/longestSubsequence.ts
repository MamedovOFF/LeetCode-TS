function longestSubsequence(arr: number[], difference: number): number {
  const obj: { [key: number]: number } = {}
  let maxLen: number = 0
  for (let num of arr) {
    if (obj[num - difference]) obj[num] = obj[num - difference] + 1
    else obj[num] = 1
    maxLen = Math.max(maxLen, obj[num])
  }
  return maxLen
}

// longestSubsequence([1,5,7,8,5,3,4,2,1], -2)
longestSubsequence([4, 12, 10, 0, -2, 7, -8, 9, -9, -12, -12, 8, 8], 0)
// longestSubsequence([1,2,3,4], 1)
// console.log(longestSubsequence([1,5,7,8,5,3,4,2,1], -2))
