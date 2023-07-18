function isValidSubPalindrome(sr, left, right) {
  while (left < right) {
    if (sr[left] !== sr[right]) {
      return false
    }
    left++
    right--
  }
  return true
}
function validPalindrome(s) {
  let left = 0
  let right = s.length - 1
  while (left < right) {
    if (s[left] !== s[right]) {
      return isValidSubPalindrome(s, left + 1, right) || isValidSubPalindrome(s, left, right - 1)
    }
    left++
    right--
  }
  return true
}
//# sourceMappingURL=ValidPalindrom2.js.map
