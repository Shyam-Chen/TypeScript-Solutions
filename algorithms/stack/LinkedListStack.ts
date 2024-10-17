import { ListNode } from '../linked-list/ListNode';

export class LinkedListStack<T> {
  private head: ListNode<T> | null = null;
  private count = 0;

  // 將元素加入堆疊
  push(value: T): void {
    const newNode = new ListNode(value);
    newNode.next = this.head;
    this.head = newNode;
    this.count += 1;
  }

  // 移除並返回堆疊頂部的元素
  pop(): T | undefined {
    if (this.isEmpty()) return undefined;
    const value = this.head?.value;
    this.head = this.head?.next as ListNode<T>;
    this.count -= 1;
    return value;
  }

  // 查看堆疊頂部的元素
  peek(): T | undefined {
    return this.head?.value;
  }

  // 檢查堆疊是否為空
  isEmpty(): boolean {
    return this.head === null;
  }

  // 返回堆疊中的元素數量
  size(): number {
    return this.count;
  }

  // 清空堆疊
  clear(): void {
    this.head = null;
    this.count = 0;
  }
}
