import { ListNode } from '~/utils/linked-list';

interface HasCycle {
  (head: ListNode | null): boolean;
}

/**
 * Accepted
 */
export const hasCycle: HasCycle = (head) => {
  if (!head) return false;

  let slow = head;
  let fast = head.next;

  while (fast) {
    if (!fast.next) return false;
    if (slow === fast) return true;
    if (slow.next) slow = slow.next;
    fast = fast.next.next;
  }

  return false;
};
