function generate(numRows: number): number[][] {
  const output = []
  for (let i = 0; i < numRows; i++) {
    output[i] = [1]
    output[i][i] = 1
    for (let j = 1; j < i; j++) {
      output[i][j] = output[i - 1][j] + output[i - 1][j - 1]
    }
  }
  return output
}
