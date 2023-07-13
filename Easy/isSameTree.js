"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isSameTree(p, q) {
    if (!p && !q)
        return true;
    if (!p || !q)
        return false;
    return q.val === p.val && isSameTree(p.left, q.left) && (isSameTree(p.right, q.right));
}
//# sourceMappingURL=isSameTree.js.map