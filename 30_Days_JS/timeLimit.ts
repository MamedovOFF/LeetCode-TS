type F_T = (...params: any[]) => Promise<any>

function timeLimit(fn: F_T, t: number): F_T {
  return async function (...args) {
    return new Promise((res, rej) => {
      const timer = setTimeout(() => rej('Time Limit Exceeded'), t)
      fn(...args)
        .then(res)
        .catch(rej)
        .finally(() => {
          clearTimeout(timer)
        })
    })
  }
}
