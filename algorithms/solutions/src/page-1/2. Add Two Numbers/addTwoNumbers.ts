import { ListNode } from '~/utils/linked-list';

type AddTwoNumbers = (l1: ListNode | null, l2: ListNode | null) => ListNode | null;

/**
 * Accepted
 */
export const addTwoNumbers: AddTwoNumbers = (l1, l2) => {
  const dummyHead = new ListNode(0);

  let [p, q] = [l1, l2];
  let current = dummyHead;
  let carry = 0;

  // Loop through both linked lists until both lists are fully traversed
  while (p !== null || q !== null) {
    // Get the value of the current node of l1 (p) and l2 (q) if they exist
    const x = p !== null ? p.val : 0;
    const y = q !== null ? q.val : 0;

    // Calculate the sum of the values and the carry from the previous iteration
    const sum = carry + x + y;

    // Update carry for the next iteration
    carry = Math.floor(sum / 10);

    // Create a new node with the sum value modulo 10 and append it to the result list
    current.next = new ListNode(sum % 10);
    current = current.next;

    // Move to the next nodes in l1 and l2 if they exist
    if (p !== null) p = p.next;
    if (q !== null) q = q.next;
  }

  // If there is a carry left after the final addition, create a new node with the carry value
  if (carry > 0) {
    current.next = new ListNode(carry);
  }

  return dummyHead.next;
};
