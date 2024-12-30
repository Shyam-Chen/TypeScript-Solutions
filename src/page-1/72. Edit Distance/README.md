# 72. 編輯距離 (Edit Distance)

給定兩個字串 word1 和 word2，返回將 word1 轉換為 word2 所使用的最少操作數。

你可以對字詞進行以下三種操作：

- 插入一個字元
- 刪除一個字元
- 替換一個字元

範例 1：

```coffee
輸入: word1 = "horse", word2 = "ros"
輸出: 3
說明:
horse -> rorse (將 'h' 替換為 'r')
rorse -> rose (刪除 'r')
rose -> ros (刪除 'e')
```

範例 2：

```coffee
輸入: word1 = "intention", word2 = "execution"
輸出: 5
說明:
intention -> inention (刪除 't')
inention -> enention (將 'i' 替換為 'e')
enention -> exention (將 'n' 替換為 'x')
exention -> exection (將 'n' 替換為 'c')
exection -> execution (插入 'u')
```

## 解題

- 插入操作：`dp[i][j-1] + 1`

```coffee
word1: "abc" -> "abcd"
word2: "abcd"
```

|     | ""  | a   | b   | c   | d   |
| --- | --- | --- | --- | --- | --- |
| ""  | 0   | 1   | 2   | 3   | 4   |
| a   | 1   | 0   | 1   | 2   | 3   |
| ab  | 2   | 1   | 0   | 1   | 2   |
| abc | 3   | 2   | 1   | 0   | 1   |

- 刪除操作：`dp[i-1][j] + 1`

```coffee
word1: "abc" -> "ab"
word2: "ab"
```

|     | ""  | a   | b   | c   |
| --- | --- | --- | --- | --- |
| ""  | 0   | 1   | 2   | 3   |
| a   | 1   | 0   | 1   | 2   |
| ab  | 2   | 1   | 0   | 1   |
| abc | 3   | 2   | 1   | 1   |

- 替換操作：`dp[i-1][j-1] + 1`

```coffee
word1: "abc" -> "abd"
word2: "abd"
```

|     | ""  | a   | b   | c   |
| --- | --- | --- | --- | --- |
| ""  | 0   | 1   | 2   | 3   |
| a   | 1   | 0   | 1   | 2   |
| ab  | 2   | 1   | 0   | 1   |
| abc | 3   | 2   | 1   | 1   |
| adc | 3   | 2   | 1   | 1   |

```ts
export const minDistance: MinDistance = (word1, word2) => {
  const m = word1.length;
  const n = word2.length;

  // 建立一個二維 DP 表
  const dp: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  // 空字串情況處理
  for (let i = 0; i <= m; i++) dp[i][0] = i; // 刪除 word1 中的所有字元
  for (let j = 0; j <= n; j++) dp[0][j] = j; // 插入所有字元以匹配 word2

  // 填充 DP 表
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        // 字元匹配，無需操作
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        // 選擇最少的插入、刪除或替換操作
        dp[i][j] = Math.min(
          dp[i][j - 1] + 1, // 插入
          dp[i - 1][j] + 1, // 刪除
          dp[i - 1][j - 1] + 1, // 替換
        );
      }
    }
  }

  // 結果位於右下角格子中
  return dp[m][n];
};
```
