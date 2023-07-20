function eraseOverlapIntervals(intervals) {
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
  console.log(res)
  return res
}
// eraseOverlapIntervals([
//   [1, 2],
//   [1, 2],
//   [1, 2],
// ])
// console.log(
//   eraseOverlapIntervals([
//     [1, 2],
//     [1, 2],
//     [1, 2],
//   ]),
// )
console.log(
  eraseOverlapIntervals([
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 3],
  ]),
)
// console.log(
//   eraseOverlapIntervals([
//     [1, 100],
//     [11, 22],
//     [1, 11],
//     [2, 12],
//   ]),
// )
