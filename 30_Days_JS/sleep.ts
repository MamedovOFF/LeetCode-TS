async function sleep(millisecond: number): Promise<void> {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res()
    }, millisecond)
  })
}
