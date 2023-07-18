'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
function postorderTraversal(root) {
  const res = []
  const dfs = (root) => {
    if (root === null) return
    res.push(root.val)
    dfs(root.right)
    dfs(root.left)
  }
  dfs(root)
  return res.reverse()
}
//# sourceMappingURL=postorderTraversal.js.map
