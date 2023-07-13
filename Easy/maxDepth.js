"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function maxDepth(root) {
    if (root === null)
        return 0;
    const left = maxDepth(root.left) + 1;
    const right = maxDepth(root.right) + 1;
    if (!root.left)
        return right;
    if (!root.right)
        return left;
    return Math.max(left, right);
}
;
//# sourceMappingURL=maxDepth.js.map