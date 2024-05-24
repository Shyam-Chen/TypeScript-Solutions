import { ListNode } from '~/utils/linked-list';

interface DeleteDuplicates {
  (head: ListNode | null): ListNode | null;
}

/**
 * Accepted
 */
export const deleteDuplicates: DeleteDuplicates = (head) => {
  let temp = head;

  while (temp !== null && temp.next !== null) {
    if (temp.val === temp.next.val) {
      temp.next = temp.next.next;
    } else {
      temp = temp.next;
    }
  }

  return head;
};
