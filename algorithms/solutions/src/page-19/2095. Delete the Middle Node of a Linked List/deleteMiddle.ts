import type { ListNode } from '~/utils/linked-list';

type DeleteMiddle = (head: ListNode | null) => ListNode | null;

/**
 * Accepted
 */
export const deleteMiddle: DeleteMiddle = (head) => {
  // If the list is empty or has only one node, return null (no middle to remove)
  if (head === null || head.next === null) return null;

  let slow: ListNode | null = head;
  let fast: ListNode | null = head;
  let prev: ListNode | null = null;

  while (fast !== null && fast.next !== null) {
    prev = slow;
    slow = slow?.next || null;
    fast = fast.next.next;
  }

  // 'slow' is now pointing to the middle node
  if (prev !== null && slow !== null) {
    prev.next = slow.next; // Remove the middle node
  }

  return head;
};
