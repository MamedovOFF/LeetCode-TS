'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
function isMirror(t1, t2) {
  if (t1 === null && t2 === null) return true
  if (t1 === null || t2 === null) return false
  return t1.val === t2.val && isMirror(t1.left, t2.right) && isMirror(t1.right, t2.left)
}
function isSymmetric(root) {
  return isMirror(root.left, root.right)
}
//# sourceMappingURL=isSemetric.js.map
