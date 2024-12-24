# 714. 買賣股票的最佳時機含手續費 (Best Time to Buy and Sell Stock with Transaction Fee)

給定一個整數陣列 `prices`，其中 `prices[i]` 表示第 `i` 天的股票價格；整數 `fee` 代表了交易股票的手續費。

找出你能獲得的最大利潤。你可以完成任意數量的交易，但你需要為每筆交易支付手續費。

注意：

- 你不得同時進行多項交易 (即，您必須在再次購買之前出售股票)。
- 每次買賣股票只收取一次手續費。

## 解題

使用動態規劃 (Dynamic Programming)

`prices = [1,3,2,8,4,9], fee = 2`

- cash：不持有股票時的最大利潤。
- hold：持有股票時的最大利潤。

i = 0, price = 1：

- cash = 0
- hold = -1，買入

i = 1, price = 3：

- cash = max(0, −1 + 3 − 2) = 0
- hold = max(−1, 0 − 3) = −1

i = 1, price = 2：

- cash = max(0, −1 + 2 − 2) = 0
- hold = max(−1, 0 − 2) = −1

i = 1, price = 8：

- cash = max(0, −1 + 8 − 2) = 5，賣出
- hold = max(−1, 0 − 8) = −1

i = 1, price = 4：

- cash = max(5, -1 + 4 - 2) = 5
- hold = max(−1, 5 − 4) = 1，買入

i = 1, price = 9：

- cash = max(5, 1 + 9 - 2) = 8，賣出
- hold = max(1, 5 - 9) = 1

```ts
export const maxProfit: MaxProfit = (prices, fee) => {
  const n = prices.length;
  const dp: number[][] = Array(n).fill([0, 0]);

  // 初始值
  dp[0][0] = 0; // 第一天不持有股票，利潤為 0
  dp[0][1] = -prices[0]; // 第一天持有股票，利潤為 -prices[0]

  // 狀態轉移
  for (let i = 1; i < n; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i] - fee); // 不持有股票
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]); // 持有股票
  }

  // 最後一天不持有股票的最大利潤
  return dp[n - 1][0];
};
```

```ts
export const maxProfit: MaxProfit = (prices, fee) => {
  const n = prices.length;
  const cash = Array(n).fill(0);
  const hold = Array(n).fill(0);

  cash[0] = 0;
  hold[0] = -prices[0];

  for (let i = 1; i < n; i++) {
    cash[i] = Math.max(cash[i - 1], hold[i - 1] + prices[i] - fee);
    hold[i] = Math.max(hold[i - 1], cash[i - 1] - prices[i]);
  }

  return cash[n - 1];
};
```

```ts
export const maxProfit: MaxProfit = (prices, fee) => {
  let cash = 0;
  let hold = -prices[0];

  for (let i = 1; i < prices.length; i++) {
    cash = Math.max(cash, hold + prices[i] - fee);
    hold = Math.max(hold, cash - prices[i]);
  }

  return cash;
};
```

## 解題 2

使用貪婪 (Greedy)

決策：

- 何時賣出：當當前價格與之前的買入價格之差超過交易費時賣出，以鎖定利潤。
- 何時更新「買入價」：如果找到比目前追踪的 `prevPrice` 更低的價格，就更新 `prevPrice`，以便減少成本。

```ts
export const maxProfit2: MaxProfit = (prices, fee) => {
  let profit = 0; // 總利潤
  let prevPrice = prices[0]; // 追踪有效的「買入價」

  for (let i = 1; i < prices.length; i++) {
    // 如果達到賣出的利潤門檻
    if (prices[i] > prevPrice + fee) {
      profit += prices[i] - prevPrice - fee;
      prevPrice = prices[i] - fee; // 更新「買入價」以便後續交易
    }

    // 如果當前價格低於「買入價」
    if (prices[i] < prevPrice) {
      prevPrice = prices[i]; // 更新「買入價」
    }
  }

  return profit;
};
```
