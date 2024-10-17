import { DoublyListNode } from './DoublyListNode';

export class DoublyLinkedList<T> {
  head: DoublyListNode<T> | null;
  tail: DoublyListNode<T> | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  // 新增節點到鏈結串列的尾部
  append(value: T): void {
    const newNode = new DoublyListNode(value);

    if (!this.tail) {
      // 如果鏈結串列是空的
      this.head = newNode;
      this.tail = newNode;
    } else {
      // 更新 tail 節點
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  // 新增節點到鏈結串列的頭部
  prepend(value: T): void {
    const newNode = new DoublyListNode(value);

    if (!this.head) {
      // 如果鏈結串列是空的
      this.head = newNode;
      this.tail = newNode;
    } else {
      // 更新 head 節點
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
  }

  // 印出雙向鏈結串列
  print(): void {
    let current = this.head;

    const values: T[] = [];

    while (current) {
      values.push(current.value);
      current = current.next;
    }

    console.log(values.join(' <-> '));
  }
}
