function compose(functions) {
  return function (x) {
    for (let i = functions.length - 1; i >= 0; i--) x += functions[i](x) - x
    return x
  }
}
//# sourceMappingURL=FunctionComposition.js.map
