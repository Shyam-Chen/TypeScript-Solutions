# 動態規劃 (Dynamic Programming)

費波那契數：0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144...

```ts
F[0] = 0;
F[1] = 1;
if (n >= 2) F[n] = F[n - 1] + F[n - 2];
```

```ts
function fibonacci(n: number): number {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
```

一維動態規劃 (1D Dynamic Programming)

```ts
function fibonacci(n: number): number {
  const dp = [0, 1];

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}
```

## 0-1 背包問題 (0-1 Knapsack Problem)

問題：給定 n 個物品，每個物品有一定的重量和價值，並給定一個背包的容量。你需要在不超過背包容量的情況下選擇物品，使得所選物品的總價值最大。

- `Array(n)`: 物品數量
- `weights[]`: 物品的重量
- `values[]`: 物品的價值
- `capacity`: 背包的容量

每個物品的編號 (`i`) 及其對應的重量和價值：

|   i | weights[i - 1] | values[i - 1] |
| --: | -------------: | ------------: |
|   1 |              1 |             5 |
|   2 |              2 |            11 |
|   3 |              3 |            15 |

遞推公式：

```ts
dp[i][c] = Math.max(dp[i - 1][c], dp[i - 1][c - weights[i - 1]] + values[i - 1]);
```

```ts
function knapsack(weights: number[], values: number[], capacity: number): number {
  const n = weights.length;

  // 建立一個 n+1 橫行 (Row)、capacity+1 縱列 (Column) 的二維 DP 表，初始值都設為 0
  const dp: number[][] = Array.from({ length: n + 1 }, () => Array(capacity + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let c = 0; c <= capacity; c++) {
      if (weights[i - 1] <= c) {
        dp[i][c] = Math.max(
          dp[i - 1][c], // 不選擇物品
          dp[i - 1][c - weights[i - 1]] + values[i - 1], // 選擇物品
        );
      } else {
        dp[i][c] = dp[i - 1][c];
      }
    }
  }

  // dp[n][capacity] 即為考慮所有物品且容量為 capacity 時的最大價值
  return dp[n][capacity];
}

const weights = [1, 2, 3];
const values = [5, 11, 15];
const capacity = 4;
console.log(knapsack(weights, values, capacity)); // 20
```

直接使用前一橫行 (Row) 的容量做優化：

```ts
function knapsack(weights: number[], values: number[], capacity: number): number {
  const n = weights.length;
  const dp: number[] = Array(capacity + 1).fill(0);

  for (let i = 0; i < n; i++) {
    for (let c = capacity; c >= weights[i]; c--) {
      dp[c] = Math.max(dp[c], dp[c - weights[i]] + values[i]);
    }
  }

  return dp[capacity];
}

const weights = [1, 2, 3];
const values = [5, 11, 15];
const capacity = 4;
console.log(knapsack(weights, values, capacity)); // 20
```

## 無界背包問題 (Unbounded Knapsack Problem)

遞推公式：

```ts
dp[c] = Math.max(dp[c], dp[c - weights[i - 1]] + values[i - 1]);
```
