type F_O = (...args: any[]) => any

function once(fn: F_O): F_O {
  let isCalled = false
  return function (...args) {
    if (isCalled) return undefined
    else {
      const res = fn(...args)
      isCalled = !isCalled
      return res
    }
  }
}
