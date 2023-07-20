type ReturnObj = {
  increment: () => number
  decrement: () => number
  reset: () => number
}

function createCounter(init: number): ReturnObj {
  let counter = init
  return {
    increment: () => ++counter,
    reset: () => (counter = init),
    decrement: () => --counter,
  }
}
