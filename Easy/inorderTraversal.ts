import { TreeNode } from '../utils'

function inorderTraversal(root: TreeNode | null): number[] {
  const res = []
  function tt(root: TreeNode | null) {
    if (root) {
      tt(root.left)
      res.push(root.val)
      tt(root.right)
    }
    return res
  }
  return tt(root)
}
