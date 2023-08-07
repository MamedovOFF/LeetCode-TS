type F_D = (...p: Array<any>) => any

function debounce(fn: F_D, t: number): F_D {
  let timeout: ReturnType<typeof setTimeout>
  return function (...args) {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      fn(...args)
    }, t)
  }
}
