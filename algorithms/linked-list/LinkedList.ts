import { ListNode } from './ListNode';

export class LinkedList<T> {
  head: ListNode<T> | null;

  constructor() {
    this.head = null;
  }

  // 新增節點到鏈結串列的尾部
  append(value: T): void {
    const newNode = new ListNode(value);

    if (this.head === null) {
      // 如果鏈結串列為空，則將新節點設為頭節點
      this.head = newNode;
    } else {
      let current = this.head;

      while (current.next !== null) {
        current = current.next;
      }

      current.next = newNode;
    }
  }

  // 新增節點到鏈結串列的頭部
  prepend(value: T): void {
    const newNode = new ListNode(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  // 印出鏈結串列
  print(): void {
    let current = this.head;
    const values: T[] = [];

    while (current !== null) {
      values.push(current.value);
      current = current.next;
    }

    console.log(values.join(' -> '));
  }
}
