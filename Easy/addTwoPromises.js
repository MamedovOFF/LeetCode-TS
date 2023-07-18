var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value)
          })
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value))
        } catch (e) {
          reject(e)
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value))
        } catch (e) {
          reject(e)
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected)
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next())
    })
  }
function addTwoPromises(promise1, promise2) {
  return __awaiter(this, void 0, void 0, function* () {
    const res1 = yield promise1
    const res2 = yield promise2
    return new Promise((resolve) => resolve(res1 + res2))
  })
}
addTwoPromises(Promise.resolve(2), Promise.resolve(2)).then((res) => console.log(res))
//# sourceMappingURL=addTwoPromises.js.map
