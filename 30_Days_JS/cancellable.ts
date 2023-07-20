function cancellable(fn: Function, args: any[], t: number): Function {
  const time = setTimeout(() => {
    fn(...args)
  }, t)
  return () => {
    clearTimeout(time)
  }
}
