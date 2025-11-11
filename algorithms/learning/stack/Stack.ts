export class Stack<T> {
  private items: T[] = [];

  // 將元素加入堆疊
  push(item: T): void {
    this.items.push(item);
  }

  // 移除並返回堆疊頂部的元素
  pop(): T | undefined {
    return this.items.pop();
  }

  // 查看堆疊頂部的元素
  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  // 檢查堆疊是否為空
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  // 返回堆疊中的元素數量
  size(): number {
    return this.items.length;
  }

  // 清空堆疊
  clear(): void {
    this.items = [];
  }
}
