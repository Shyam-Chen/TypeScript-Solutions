# 283. 移動零 (Move Zeroes)

給定一個整數陣列 `nums`，將所有 `0` 移至其末端，同時保持非零元素的相對順序。

請注意，你必須在不複製陣列的情況下，在原位對陣列進行操作。

範例 1：

```coffee
輸入: nums = [0,1,0,3,12]
輸出: [1,3,12,0,0]
```

範例 2：

```coffee
輸入: nums = [0]
輸出: [0]
```

## 解題

使用雙指標 (Two Pointers)：

- 走訪指標 (`i`) 逐個檢查陣列中的元素
- 非零指標 (`nonZeroIndex`) 記錄下一個非零元素應該存放的位置

當遇到非零元素時，我們就將其與 `nonZeroIndex` 指向的元素交換，並將 `nonZeroIndex` 向前移動。

```ts
export const moveZeroes: MoveZeroes = (nums) => {
  // 這將追蹤下一個非零數字應該去的索引
  let nonZeroIndex = 0;

  // 使用目前指標走訪陣列
  for (let i = 0; i < nums.length; i++) {
    // 如果目前元素不為 0
    if (nums[i] !== 0) {
      // 將其與 nonZeroIndex 處的元素交換
      [nums[nonZeroIndex], nums[i]] = [nums[i], nums[nonZeroIndex]];

      // 將非零指標移到下一個位置
      nonZeroIndex += 1;
    }
  }
};
```

以 `nums = [0,1,0,3,12]` 為例：

| `i` | `nums[i]` | `nonZeroIndex` | 操作                                                                  |
| --- | --------- | -------------- | --------------------------------------------------------------------- |
| 0   | 0         | 0              | 無動作 (因為是 0)                                                     |
| 1   | 1         | 0              | 交換 `nums[0]` 和 `nums[1]` → `[1, 0, 0, 3, 12]`，`nonZeroIndex += 1` |
| 2   | 0         | 1              | 無動作 (因為是 0)                                                     |
| 3   | 3         | 1              | 交換 `nums[1]` 和 `nums[3]` → `[1, 3, 0, 0, 12]`，`nonZeroIndex += 1` |
| 4   | 12        | 2              | 交換 `nums[2]` 和 `nums[4]` → `[1, 3, 12, 0, 0]`，`nonZeroIndex += 1` |
