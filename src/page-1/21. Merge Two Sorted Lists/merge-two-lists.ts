import { ListNode } from '~/utils/linked-list';

interface MergeTwoLists {
  (list1: ListNode | null, list2: ListNode | null): ListNode | null;
}

/**
 * Accepted
 */
export const mergeTwoLists: MergeTwoLists = (list1, list2) => {
  if (list1 === null) return list2;
  if (list2 === null) return list1;

  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  }

  list2.next = mergeTwoLists(list1, list2.next);
  return list2;
};
