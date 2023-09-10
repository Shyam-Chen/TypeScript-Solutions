export interface ListNode {
  val: number;
  next: ListNode | null;
}

export const generateLinkedList = (nums: number[]): ListNode | null => {
  const list: ListNode = { val: 0, next: null };

  let tail = list;

  for (const val of nums) {
    tail.next = { val, next: null };
    tail = tail.next;
  }

  return list.next;
};

export const generateLinkedListCycle = (nums: number[], pos: number): ListNode | null => {
  const head = generateLinkedList(nums);

  if (pos === -1) return head;

  let cycle = head;

  while (pos > 0) {
    if (cycle?.next) cycle = cycle.next;
    pos -= 1;
  }

  let tail = cycle;

  while (tail?.next !== null) {
    if (tail?.next) tail = tail.next;
  }

  tail.next = cycle;

  return head;
};
