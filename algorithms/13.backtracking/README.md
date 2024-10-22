# 回溯 (Backtracking)

### 全排列 (Permutations)

```ts
[1, 2];
```

```ts
[
  [1, 2],
  [2, 1],
];
```

```mermaid
flowchart TB
    0(_, _)
    1(1, _)
    2(2, _)
    3(1, 1)
    4(1, 2)
    5(2, 1)
    6(2, 2)

    0 --> 1
    0 --> 2
    1 -. 剪枝 .-> 3
    1 --> 4
    2 --> 5
    2 -. 剪枝 .-> 6
```

```ts
function permute(nums: number[]): number[][] {
  const result: number[][] = [];
  const selected: boolean[] = Array(nums.length).fill(false);

  function backtrack(currentPermutation: number[]) {
    // 如果當前排列的長度等於原數組長度，說明我們已經生成了一個完整排列
    if (currentPermutation.length === nums.length) {
      result.push([...currentPermutation]);
      return;
    }

    // 走訪可用數字
    for (let i = 0; i < nums.length; i++) {
      // 如果該數字已經被選過，則跳過 (剪枝)
      if (selected[i]) continue;

      // 做選擇
      currentPermutation.push(nums[i]);
      selected[i] = true;

      // 遞迴進行下一步選擇
      backtrack(currentPermutation);

      // 撤銷選擇 (回溯)
      currentPermutation.pop();
      selected[i] = false;
    }
  }

  backtrack([]); // 開始回溯

  return result;
}
```
