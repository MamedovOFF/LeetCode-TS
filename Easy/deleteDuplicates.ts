import { ListNode } from '../utils'

function deleteDuplicates(head: ListNode | null): ListNode | null {
  let current: ListNode | null = head

  while (current) {
    let temp: ListNode | null = current
    while (temp)
      if (temp?.next?.val === current.val) temp.next = temp?.next?.next
      else temp = temp.next
    current = current.next
  }

  return head
}

const head = new ListNode(2, new ListNode(2, new ListNode(2, new ListNode(2, new ListNode(4)))))
console.log(deleteDuplicates(head))
