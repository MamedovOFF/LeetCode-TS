"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function inorderTraversal(root) {
    const res = [];
    function tt(root) {
        if (root) {
            tt(root.left);
            res.push(root.val);
            tt(root.right);
        }
        return res;
    }
    return tt(root);
}
;
//# sourceMappingURL=inorderTraversal.js.map