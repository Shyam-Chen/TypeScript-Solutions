export class ListNode {
  public val: number;
  public next: ListNode;

  constructor(val: number) {
    this.val = val;
    this.next = null;
  }
}

export const mergeTwoLists = (l1: ListNode, l2: ListNode): ListNode => {
  let result = null;

  if (l1 === null) return l2;
  if (l2 === null) return l1;

  if (l1.val < l2.val) {
    result.next = mergeTwoLists(l1.next, l2);
    result = l1;
  } else {
    result.next = mergeTwoLists(l2.next, l1);
    result = l2;
  }

  return result;
};
