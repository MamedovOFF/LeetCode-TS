import {TreeNode} from "../utils";

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if (!p && !q) return true
    if (!p || !q) return false
    return q.val === p.val && isSameTree(p.left, q.left) && (isSameTree(p.right, q.right))
}