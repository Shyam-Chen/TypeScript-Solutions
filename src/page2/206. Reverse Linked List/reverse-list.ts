import { ListNode } from '~/utils/linked-list';

interface ReverseList {
  (head: ListNode | null): ListNode | null;
}

/**
 * Accepted
 */
export const reverseList: ReverseList = (head) => {
  let prev = head;
  let cur = head ? head.next : null;

  if (prev?.next) {
    prev.next = null;
  }

  while (cur !== null) {
    const temp = cur;

    cur = cur.next;
    temp.next = prev;
    prev = temp;
  }

  return prev;
};
