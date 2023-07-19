function eraseOverlapIntervals(intervals: number[][]): number {
  const copyArr = [...intervals.sort((a, b) => a[1] - b[1])]
  let prev = -1
  let res = 0
  for (let i = 0; i < copyArr.length; i++) {
    if (copyArr[i][0] > prev) {
      res++
    } else {
      prev = copyArr[i][1]
    }
  }
  return res
}

console.log(
  eraseOverlapIntervals([
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 3],
  ]),
)