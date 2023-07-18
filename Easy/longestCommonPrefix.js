function longestCommonPrefix(strs) {
  const firstStr = strs[0]
  for (let i = 0; i < firstStr.length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (firstStr[i] !== strs[j][i]) {
        return strs[0].slice(0, i)
      }
    }
  }
  return firstStr
}
//# sourceMappingURL=longestCommonPrefix.js.map
