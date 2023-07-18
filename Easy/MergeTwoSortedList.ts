import { ListNode } from '../utils'

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  let sortList: ListNode = new ListNode()
  const headSortList = sortList
  while (list1 && list2) {
    if (list1.val < list2.val) {
      sortList.next = list1
      list1 = list1.next
    } else {
      sortList.next = list2
      list2 = list2.next
    }
    sortList = sortList.next
  }
  sortList.next = list1 ?? list2
  return headSortList.next
}

function mergeTwoListsRec(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  if (list1 === null) return list2
  if (list2 === null) return list1

  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2)
    return list1
  } else {
    list2.next = mergeTwoLists(list1, list2.next)
    return list2
  }
}
