# 堆疊 (Stack)

以後進先出 (Last In, First Out，LIFO) 為原則。

- [`Stack.ts`](./Stack.ts)

```ts
class Stack<T> {
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
```

```ts
const stack = new Stack<number>();

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek()); // 30
console.log(stack.pop()); // 30
console.log(stack.size()); // 2
console.log(stack.isEmpty()); // false
```

基於鏈結串列 (Linked List) 實現：

- [`ListNode.ts`](../linked-list/ListNode.ts)
- [`LinkedListStack.ts`](./LinkedListStack.ts)

```ts
class LinkedListStack<T> {
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
```

```ts
const linkedListStack = new LinkedListStack<number>();

linkedListStack.push(10);
linkedListStack.push(20);
linkedListStack.push(30);

console.log(linkedListStack.peek()); // 30
console.log(linkedListStack.pop()); // 30
console.log(linkedListStack.size()); // 2
console.log(linkedListStack.isEmpty()); // false
```
