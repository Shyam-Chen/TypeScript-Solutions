import type { ListNode } from '~/utils/linked-list';

type PairSum = (head: ListNode | null) => number;

/**
 * Accepted
 */
export const pairSum: PairSum = (head) => {
  const stack: number[] = [];
  let slow = head;
  let fast = head;

  // Push the first half of the list onto the stack
  while (fast?.next) {
    if (slow?.val) stack.push(slow.val);
    slow = slow?.next || null;
    fast = fast.next.next;
  }

  let maxSum = 0;

  // Calculate twin sums using the second half of the list and the stack
  while (slow) {
    const twinSum = slow.val + Number(stack.pop());
    maxSum = Math.max(maxSum, twinSum);
    slow = slow.next;
  }

  return maxSum;
};
