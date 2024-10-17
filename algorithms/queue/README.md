# 佇列 (Queue)

以先進先出 (First In First Out，FIFO) 為原則。

- [`Queue.ts`](./Queue.ts)

```ts
class Queue<T> {
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
```

```ts
const queue = new Queue<number>();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.peek()); // 10
console.log(queue.dequeue()); // 10
console.log(queue.size()); // 2
console.log(queue.isEmpty()); // false

queue.clear();
console.log(queue.isEmpty()); // true
```

## 雙向佇列 (Double-ended Queue)

## 優先佇列 (Priority Queue)

## 雙向優先佇列 (Double Priority Queue)

## 有界佇列 (Bounded Queue)

### 圓形佇列 (Circular Queue) / 環形緩衝區 (Circular Buffer)

### 尾部丟棄 (Tail Drop)
