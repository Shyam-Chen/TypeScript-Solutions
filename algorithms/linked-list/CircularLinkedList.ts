import { ListNode } from './ListNode';

export class CircularLinkedList<T> {
  head: ListNode<T> | null;

  constructor() {
    this.head = null;
  }

  // 在尾端新增節點並形成環狀鏈結串列
  append(value: T): void {
    const newNode = new ListNode(value);

    if (this.head === null) {
      // 如果是第一個節點，將其設為頭節點，並指向自己
      this.head = newNode;
      newNode.next = this.head; // 環狀結構
    } else {
      let current = this.head;

      // 找到最後一個節點（指向頭節點的節點）
      while (current.next !== null && current.next !== this.head) {
        current = current.next;
      }

      current.next = newNode;
      newNode.next = this.head; // 使其成為環狀結構
    }
  }

  // 印出環狀鏈結串列
  print(): void {
    if (this.head === null) return;

    let current = this.head;
    const values: T[] = [];

    do {
      values.push(current.value);
      current = current.next as ListNode<T>;
    } while (current !== this.head);

    console.log(`${values.join(' -> ')} -> (回到頭)`);
  }
}
