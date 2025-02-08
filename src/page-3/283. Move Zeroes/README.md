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
