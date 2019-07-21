import { ListNode } from '../../utils/linked-list';

export const hasCycle = (head: ListNode): boolean => {
  if (!head) return false;

  let slow = head;
  let fast = head.next;

  while (fast) {
    if (!fast.next) return false;
    if (slow === fast) return true;

    slow = slow.next;
    fast = fast.next.next;
  }

  return false;
};
