# 287. 找出重複數字 (Find the Duplicate Number)

給定一個整數陣列 `nums`，其中包含 `n + 1` 個整數，且每個整數的範圍皆在 `[1, n]`。

在 `nums` 中**只有一個重複的數字**，請回傳*這個重複的數字*。

你必須在**不修改**陣列 `nums` 的情況下，並且只使用常數額外空間來解決此問題。

範例 1：

```coffee
輸入: nums = [1,3,4,2,2]
輸出: 2
```

範例 2：

```coffee
輸入: nums = [3,1,3,4,2]
輸出: 3
```

範例 3：

```coffee
輸入: nums = [3,3,3,3,3]
輸出: 3
```

## 解題

使用雙指標 (Two Pointers)

```ts
export const findDuplicate: FindDuplicate = (nums) => {
  let slow = nums[0];
  let fast = nums[0];

  // 步驟 1: 尋找相遇點
  do {
    slow = nums[slow]; // slow 每次走一步
    fast = nums[nums[fast]]; // fast 每次走兩步
  } while (slow !== fast); // 相遇，即發現了一個循環

  // 步驟 2: 尋找循環起點
  slow = nums[0]; // slow 重新設回起點

  // 再次相遇，即為重複的數字
  while (slow !== fast) {
    slow = nums[slow]; // slow 每次走一步
    fast = nums[fast]; // fast 每次走一步
  }

  return slow; // 重複的數字
};
```

```
索引: 0 1 2 3 4
數值: 1 3 4 2 2

1 → 3 → 2 → 4
        ↑   ↓
        ← 2 ← (循環)
```

```
索引: 0 1 2 3 4
數值: 3 1 3 4 2

0 → 3 → 4 → 2
        ↑   ↓
        ← 3 ← (循環)
```

```
索引: 0 1 2 3 4
數值: 3 3 3 3 3

0 → 3 → 3 → 3 → 3
        ↑   ↓
        ← 3 ← (循環)
```
