# 1768. 交替合併字串 (Merge Strings Alternately)

給你兩個字串 `word1` 和 `word2`。請你從 `word1` 開始，透過交替加上字母來合併字串。如果一個字串比另一個字串長，就將多出來的字母追加到合併後字串的結尾。

返回*合併後的字串*。

範例 1：

```ts
輸入: word1 = "abc", word2 = "pqr"
輸出: "apbqcr"
說明: 字串合併情況如下所示：
word1: a   b   c
word2:   p   q   r
合併後: a p b q c r
```

範例 2：

```ts
輸入: word1 = "ab", word2 = "pqrs"
輸出: "apbqrs"
說明: 注意，word2 比 word1 長，"rs" 需要追加到合併後字串的結尾。
word1: a   b
word2:   p   q   r   s
合併後: a p b q   r   s
```

範例 3：

```ts
輸入: word1 = "abcd", word2 = "pq"
輸出: "apbqcd"
說明: 注意，word1 比 word2 長，"cd" 需要追加到合併後字串的結尾。
word1: a   b   c   d
word2:   p   q
合併後: a p b q c   d
```

## 解題

```ts
export const mergeAlternately: MergeAlternately = (word1, word2) => {
  const chars1 = Array.from(word1);
  const chars2 = Array.from(word2);

  // 使用 flatMap 方法，將兩個字串的字元交替合併
  let mergedChars = chars1.flatMap((char, index) => [char, chars2[index]]);

  // 如果 chars2 比 chars1 長，說明還有剩下的字元需要附加到結果陣列中
  if (chars2.length > chars1.length) {
    mergedChars = [...mergedChars, ...chars2.slice(chars1.length)];
  }

  return mergedChars.join('');
};
```

## 解題 2

使用雙指標 (Two Pointers)

```ts
export const mergeAlternately2: MergeAlternately = (word1, word2) => {
  let result = ''; // 儲存合併後的結果

  let pointer1 = 0; // 指向 word1 的當前位置
  let pointer2 = 0; // 指向 word2 的當前位置

  // 當兩個指標都還在有效範圍時，交替加入字元
  while (pointer1 < word1.length || pointer2 < word2.length) {
    if (pointer1 < word1.length) {
      // 從 word1 中取一個字元並加入結果，然後遞增指標
      result += word1[pointer1];
      pointer1 += 1;
    }

    if (pointer2 < word2.length) {
      // 從 word2 中取一個字元並加入結果，然後遞增指標
      result += word2[pointer2];
      pointer2 += 1;
    }
  }

  return result;
};
```
