/* eslint-disable no-restricted-syntax */

export interface ListNode {
  val: number;
  next: ListNode;
}

export const generateLinkedList = (nums: number[]): ListNode => {
  const list: any = {};

  let tail = list;

  for (const val of nums) {
    tail.next = { val, next: null };
    tail = tail.next;
  }

  return list.next;
};

export const generateLinkedListCycle = (nums: number[], pos: number): ListNode => {
  const head = generateLinkedList(nums);

  if (pos === -1) return head;

  let cycle = head;

  while (pos > 0) {
    cycle = cycle.next;
    pos -= 1;
  }

  let tail = cycle;

  while (tail.next !== null) {
    tail = tail.next;
  }

  tail.next = cycle;

  return head;
};
