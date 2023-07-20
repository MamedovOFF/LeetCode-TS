type F_M = (...params: any) => any

function memoize(fn: F_M): F_M {
  const cache = {}
  return function (...args) {
    const key = JSON.stringify(args)
    if (key in cache) return cache[key]
    const result = fn(...args)
    cache[key] = result
    return result
  }
}
