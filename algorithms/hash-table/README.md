# 雜湊表 (Hash Table)

```ts
// 建立一個 Map 作為 Hash Table
const hashTable = new Map<string, number>();

// 插入鍵值對
hashTable.set('apple', 1);
hashTable.set('banana', 2);
hashTable.set('orange', 3);

// 尋找值
console.log(hashTable.get('apple')); // 1
console.log(hashTable.get('banana')); // 2
console.log(hashTable.get('orange')); // 3

// 刪除一個鍵值對
hashTable.delete('banana');
console.log(hashTable.get('banana')); // undefined

// 檢查是否存在某個鍵
console.log(hashTable.has('apple')); // true
console.log(hashTable.has('banana')); // false

// 取得 Map 的大小
console.log(hashTable.size); // 2 (apple 和 orange)
```

## 分離鏈式雜湊表 (Separate Chaining Hash Table)

通過將衝突的鍵值對存儲在同一個桶 (Bucket) 中，這個桶通常是用來儲存衝突鍵的鏈結串列 (Linked List) 或陣列 (Array)。
