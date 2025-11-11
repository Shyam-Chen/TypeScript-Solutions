import type { ListNode } from '~/utils/linked-list';

type OddEvenList = (head: ListNode | null) => ListNode | null;

/**
 * Accepted
 */
export const oddEvenList: OddEvenList = (head) => {
  // If the list is empty, return it as is
  if (head === null) return head;

  // Initialize pointers for odd and even nodes
  let odd = head; // Start odd pointer at the first node
  let even = head.next; // Start even pointer at the second node
  const evenHead = even; // Save the start of the even list

  // Traverse the list to rearrange the odd and even nodes
  while (even !== null && even.next !== null) {
    odd.next = even.next; // Link current odd node to the next odd node
    odd = odd.next; // Move the odd pointer to the next odd node
    even.next = odd.next; // Link current even node to the next even node
    even = even.next; // Move the even pointer to the next even node
  }

  // After the loop, connect the end of the odd list to the head of the even list
  odd.next = evenHead;

  // Return the head of the reordered list
  return head;
};
