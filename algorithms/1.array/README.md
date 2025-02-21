# 陣列 (Array)

訪問元素：

```ts
const sentence = 'The quick brown fox jumps over the lazy dog.';

// 第 5 個字元
sentence.at(4); // q
sentence[4]; // q
Array.from(sentence)[4]; // q

// 倒數第 4 個字元
sentence.at(-4); // d
Array.from(sentence).at(-4); // d
```

初始化陣列：

```ts
Array(10).fill(0);
// [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

Array.from({ length: 10 }, () => 0);
// [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

Array.from({ length: 3 }, () => Array(3).fill(0));
// [
//   [0, 0, 0],
//   [0, 0, 0],
//   [0, 0, 0],
// ]
```

插入元素：

```ts
const arr = ['A', 'B', 'C', 'D', 'E'];
arr.splice(3, 0, 'Z'); // 在索引 3 處插入 Z
arr; // ['A', 'B', 'C', 'Z', 'D', 'E']
```

```ts
const arr = ['A', 'B', 'C', 'D', 'E'];
arr.splice(arr.indexOf('C') + 1, 0, 'Z'); // 先尋找 C，再將 Z 插入到它的後面
arr; // ['A', 'B', 'C', 'Z', 'D', 'E']
```

刪除元素：

```ts
const arr = ['A', 'B', 'C', 'D', 'E'];
arr.splice(arr.indexOf('C'), 1); // 刪除元素 C
arr; // ['A', 'B', 'D', 'E']
```

## 雙指標 (Two Pointers)

相關名詞：

- 弗洛伊德判圈演算法 (Floyd’s Cycle Detection Algorithm)
- 龜兔賽跑演算法 (Tortoise and Hare Algorithm)
- 快慢指標 (Fast and Slow Pointers)

問題：移動數字 0 至末尾。

```ts
const nums = [0, 1, 0, 3, 12];

let left = 0; // 左指標，指向下次應該交換的非零元素位置
let right = 0; // 右指標，走訪整個陣列

while (right < nums.length) {
  // 如果右指標指向的數字不是 0
  if (nums[right] !== 0) {
    // 交換左指標和右指標的數字
    [nums[left], nums[right]] = [nums[right], nums[left]];

    left += 1; // 左指標移動到下一個位置
  }

  right += 1; // 右指標繼續向右移動
}
```

```ts
const nums = [0, 1, 0, 3, 12];

// 可以看作是左指標，因為它不斷遞增，指向應該放置不是 0 元素的最左邊位置
let nonZeroIndex = 0;

// 走訪陣列，i 可以看作是右指標
for (let i = 0; i < nums.length; i++) {
  // 如果當前數字不是 0
  if (nums[i] !== 0) {
    // 位置互換
    [nums[nonZeroIndex], nums[i]] = [nums[i], nums[nonZeroIndex]];

    // 指標指標移動到下一個位置
    nonZeroIndex += 1;
  }
}
```

## 滑動視窗 (Sliding Window)

維持一個固定長度的視窗，並在陣列中移動這個視窗來進行計算。

問題：找出連續子陣列長度為 `k` 的最大和。

```ts
const nums = [1, 3, -1, -3, 5, 3, 6, 7];
const k = 3;
```

初始化第一個視窗：

```ts
let maxSum = 0;
let currentSum = 0;

// 先計算第一個視窗的和
for (let i = 0; i < k; i++) {
  currentSum += nums[i];
}

maxSum = currentSum;
```

開始滑動視窗：

```ts
for (let i = k; i < nums.length; i++) {
  currentSum += nums[i] - nums[i - k]; // 移動視窗，減去視窗前一個數，加上當前數
  maxSum = Math.max(maxSum, currentSum); // 更新最大和
}
```

- `nums[i]` 是滑動視窗新進來的元素
- `nums[i - k]` 是滑動視窗即將移出的元素

完成走訪所有可能的視窗後：

```ts
maxSum; // 此時 `maxSum` 為最大和
```

## 矩陣 (Matrix)

```ts
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
```

問題：將矩陣的橫行 (Row) 和縱列 (Column) 互換

取得矩陣 `rows` 和 `cols`：

```ts
const rows = matrix.length;
const cols = matrix[0].length;
```

建立一個與原矩陣橫行和縱列互換的空白新矩陣：

```ts
const newMatrix = Array.from({ length: cols }, () => Array(rows));
```

迴圈走訪原矩陣的所有元素，將其分配到新矩陣上：

```ts
for (let r = 0; r < rows; r++) {
  for (let c = 0; c < cols; c++) {
    // 橫行和縱列互換
    newMatrix[c][r] = matrix[r][c];
  }
}
```
