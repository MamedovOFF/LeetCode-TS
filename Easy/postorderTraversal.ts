import { TreeNode } from '../utils'

function postorderTraversal(root: TreeNode | null): number[] {
  const res = []

  const dfs = (root: TreeNode | null) => {
    if (root === null) return
    res.push(root.val)
    dfs(root.right)
    dfs(root.left)
  }

  dfs(root)

  return res.reverse()
}
