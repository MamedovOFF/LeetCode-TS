function filter(arr: number[], fn: (n: number, i: number) => any): number[] {
  const res: number[] = []
  arr.forEach((el, idx) => {
    if (fn(el, idx)) {
      res.push(el)
    }
  })
  return res
}
