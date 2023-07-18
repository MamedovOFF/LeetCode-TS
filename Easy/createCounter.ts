import { ReturnObj } from '../utils'

function createCounter(init: number): ReturnObj {
  let counter = init
  return {
    increment: () => ++counter,
    reset: () => (counter = init),
    decrement: () => --counter,
  }
}

const counter = createCounter(5)
counter.increment() // 6
counter.reset() // 5
counter.decrement() // 4
