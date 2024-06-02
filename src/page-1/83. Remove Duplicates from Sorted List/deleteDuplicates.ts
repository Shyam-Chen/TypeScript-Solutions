import type { ListNode } from '~/utils/linked-list';

type DeleteDuplicates = (head: ListNode | null) => ListNode | null;

/**
 * Accepted
 */
export const deleteDuplicates: DeleteDuplicates = (head) => {
  let current = head;

  while (current !== null && current.next !== null) {
    if (current.val === current.next.val) {
      // Skip the next node as it is a duplicate
      current.next = current.next.next;
    } else {
      // Move to the next node only if no duplicates
      current = current.next;
    }
  }

  return head;
};
