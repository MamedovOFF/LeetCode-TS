const move = [
  [-1, -1],
  [0, -1],
  [1, -1],
  [-1, 0],
  [1, 0],
  [-1, 1],
  [0, 1],
  [1, 1],
]
function shortestPathBinaryMatrix(grid) {
  const n = grid.length - 1
  if (grid[0][0] === 1 || grid[n][n] === 1) return -1
  const stack = [{ position: [0, 0], count: 1 }]
  grid[0][0] = 1
  while (stack.length) {
    const { position, count } = stack.shift()
    if (position[0] === n && position[1] === n) return count
    move.forEach((mov) => {
      var _a
      const i = position[0] + mov[0]
      const j = position[1] + mov[1]
      if (((_a = grid[i]) === null || _a === void 0 ? void 0 : _a[j]) === 0) {
        stack.push({ position: [i, j], count: count + 1 })
        grid[i][j] = 1
      }
    })
  }
  return -1
}
console.log(
  shortestPathBinaryMatrix([
    [0, 0, 0],
    [1, 1, 0],
    [1, 1, 0],
  ]),
)
//# sourceMappingURL=shortestPathBinaryMatrix.js.map
