function chunk(arr: any[], size: number): any[][] {
  const res = []
  for (let i = 0; i < arr.length; i += size) {
    res.push(arr.slice(i, i + size))
  }
  return res
}

chunk([1, 2, 3, 4, 5], 2)
