function maxProfit(prices) {
  let min = prices[0]
  let max = 0
  prices.forEach((num) => {
    min = Math.min(min, num) // 7 // 1
    max = Math.max(max, num - min) // 0 // -1
  })
  return max
}
console.log(maxProfit([7, 1, 5, 3, 6, 4]))
//# sourceMappingURL=maxProfit.js.map
