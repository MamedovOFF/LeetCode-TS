import { ListNode } from "../utils";
function deleteDuplicates(head) {
    var _a, _b;
    let current = head;
    while (current) {
        let temp = current;
        while (temp)
            if (((_a = temp === null || temp === void 0 ? void 0 : temp.next) === null || _a === void 0 ? void 0 : _a.val) === current.val)
                temp.next = (_b = temp === null || temp === void 0 ? void 0 : temp.next) === null || _b === void 0 ? void 0 : _b.next;
            else
                temp = temp.next;
        current = current.next;
    }
    return head;
}
const head = new ListNode(2, new ListNode(2, new ListNode(2, new ListNode(2, new ListNode(4)))));
console.log(deleteDuplicates(head));
