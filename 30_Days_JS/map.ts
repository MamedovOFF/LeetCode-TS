function map(arr: number[], fn: (n: number, i: number) => number): number[] {
  const res = []
  arr.forEach((el, idx) => {
    res.push(fn(el, idx))
  })
  return res
}
