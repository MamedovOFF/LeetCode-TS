'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
function createCounter(init) {
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
//# sourceMappingURL=createCounter.js.map
