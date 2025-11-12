export class Queue<T> {
  private items: T[] = [];

  // 加入元素到佇列的尾端
  enqueue(item: T): void {
    this.items.push(item);
  }

  // 從佇列的頭部移除元素
  dequeue(): T | undefined {
    return this.items.shift();
  }

  // 查看佇列的第一個元素（不移除）
  peek(): T | undefined {
    return this.items[0];
  }

  // 檢查佇列是否為空
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  // 取得佇列的長度
  size(): number {
    return this.items.length;
  }

  // 清空佇列
  clear(): void {
    this.items = [];
  }
}
