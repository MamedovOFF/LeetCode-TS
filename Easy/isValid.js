function isValid(s) {
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i + 1]) {
      switch (s[i]) {
        case '(':
          if (s[i + 1] !== ')') return false
          break
        case '[':
          if (s[i + 1] !== ']') return false
          break
        case '{':
          if (s[i + 1] !== '}') return false
      }
    }
  }
  return true
}
function isValidTwo(s) {
  const bracketsMap = {
    ')': '(',
    ']': '[',
    '}': '{',
  }
  let openBracketsStack = []
  for (let i = 0; i < s.length; i++) {
    const currentBracket = s[i]
    if (['(', '[', '{'].includes(currentBracket)) {
      openBracketsStack.push(currentBracket)
    } else if (openBracketsStack.pop() !== bracketsMap[currentBracket]) {
      return false
    }
  }
  return !openBracketsStack.length
}
//# sourceMappingURL=isValid.js.map
