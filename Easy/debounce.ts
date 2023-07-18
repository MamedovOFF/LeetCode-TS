type Fd = (...p: Array<any>) => any

function debounce(fn: Fd, t: number): Fd {
  let timeout
  return function (...args) {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      fn(...args)
    }, t)
  }
}

const log = debounce(console.log, 100)
log('Hello') // cancelled
log('Hello') // cancelled
log('Hello') // Logged at t=100ms
