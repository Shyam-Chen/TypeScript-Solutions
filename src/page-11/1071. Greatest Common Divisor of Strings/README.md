# 1071. 字串的最大公因數 (Greatest Common Divisor of Strings)

對於兩個字串 `s` 和 `t`，只有在 `s = t + t + t + ... + t + t` (即 `t` 與自身連接一次或多次) 時，我們才認定「`t` 可以整除 `s`」。

給定兩個字串 `str1` 和 `str2`，返回最長的字串 `x`，使得 `x` 可以同時整除 `str1` 和 `str2`。

範例 1：

```coffee
輸入: str1 = "ABCABC", str2 = "ABC"
輸出: "ABC"
```

範例 2：

```coffee
輸入: str1 = "ABABAB", str2 = "ABAB"
輸出: "AB"
```

範例 3：

```coffee
輸入: str1 = "LEET", str2 = "CODE"
輸出: ""
```

## 解題

```ts
export const gcdOfStrings: GcdOfStrings = (str1, str2) => {
  //
};
```
