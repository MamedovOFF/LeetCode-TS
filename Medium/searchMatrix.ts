function searchMatrix_1(matrix: number[][], target: number): boolean {
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i].indexOf(target) !== -1) return true
  }
  return false
}

function searchMatrix_2(matrix: number[][], target: number): boolean {
  let rowIndex = 0
  for (let i = 0; i < matrix.length - 1; i++) {
    if (target > matrix[i][0] && matrix[i + 1][0] < target) {
      rowIndex = i
      break
    }
  }

  for (let i = 0; i < matrix[rowIndex].length - 1; i++) {
    if (target === matrix[rowIndex][i]) return true
  }

  return false
}

const matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
  ],
  target = 13

console.log(searchMatrix_1(matrix, target))
console.log(searchMatrix_2(matrix, target))
