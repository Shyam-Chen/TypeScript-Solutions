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
[1, 2, 3];
```

```ts
[
  [1, 2, 3],
  [1, 3, 2],
  [2, 1, 3],
  [2, 3, 1],
  [3, 1, 2],
  [3, 2, 1],
];
```

```mermaid
flowchart TB
    0(_, _, _)
    1(1, _, _)
    2(2, _, _)
    3(3, _, _)

    4(1, 2, _)
    5(1, 3, _)
    6(2, 1, _)
    7(2, 3, _)
    8(3, 1, _)
    9(3, 2, _)

    10(1, 2, 3)
    11(1, 3, 2)
    12(2, 1, 3)
    13(2, 3, 1)
    14(3, 1, 2)
    15(3, 2, 1)

    0 --> 1
    0 --> 2
    0 --> 3

    1 --> 4
    1 --> 5
    2 --> 6
    2 --> 7
    3 --> 8
    3 --> 9

    4 --> 10
    5 --> 11
    6 --> 12
    7 --> 13
    8 --> 14
    9 --> 15
```

```ts
function permute(nums: number[]): number[][] {
  const result: number[][] = [];
  const used: boolean[] = Array(nums.length).fill(false);

  function backtrack(currentPermutation: number[]) {
    // 如果當前排列的長度等於原數組長度，說明我們已經生成了一個完整排列
    if (currentPermutation.length === nums.length) {
      result.push([...currentPermutation]);
      return;
    }

    // 走訪可用數字
    for (let i = 0; i < nums.length; i++) {
      // 如果該數字已經被選過，則跳過 (剪枝)
      if (used[i]) continue;

      // 做選擇
      currentPermutation.push(nums[i]);
      used[i] = true;

      // 遞迴進行下一步選擇
      backtrack(currentPermutation);

      // 撤銷選擇 (回溯)
      currentPermutation.pop();
      used[i] = false;
    }
  }

  backtrack([]); // 開始回溯

  return result;
}
```
