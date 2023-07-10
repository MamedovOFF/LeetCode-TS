import {TreeNode} from "../utils";

function maxDepth(root: TreeNode | null): number {
    if (root === null) return 0

    const left = maxDepth(root.left) + 1
    const right = maxDepth(root.right) + 1

    if (!root.left) return right
    if (!root.right) return left

    return Math.max(left, right)
};