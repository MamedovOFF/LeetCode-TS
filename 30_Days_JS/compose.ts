type F_C = (x: number) => number

function compose(functions: F_C[]): F_C {
  return function (x) {
    for (let i = functions.length - 1; i >= 0; i--) x += functions[i](x) - x
    return x
  }
}
