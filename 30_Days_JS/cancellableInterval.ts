function cancellable(fn: Function, args: any[], t: number): Function {
  fn(...args)
  const interval: ReturnType<typeof setInterval> = setInterval(() => {
    fn(...args)
  }, t)
  return () => {
    clearInterval(interval)
  }
}

const result: any = []

const fn = (x) => x * 2
const args = [4],
  t = 20,
  cancelT = 110

const start = new Date().getTime()
const logs = (...argsArr) => {
  const diff = Math.floor(new Date().getTime() - start)
  //@ts-ignore
  result.push({ time: diff, returned: fn(...argsArr) })
}

const cancel = cancellable(logs, args, t)

setTimeout(() => {
  cancel()
}, cancelT)

setTimeout(
  () => {
    console.log(result) // [
    //      {"time":0,"returned":8},
    //      {"time":20,"returned":8},
    //      {"time":40,"returned":8},
    //      {"time":60,"returned":8},
    //      {"time":80,"returned":8},
    //      {"time":100,"returned":8}
    //  ]
  },
  cancelT + t + 15,
)
