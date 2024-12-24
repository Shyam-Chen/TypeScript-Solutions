type MaxProfit = (prices: number[], fee: number) => number;

/**
 * Accepted
 */
export const maxProfit: MaxProfit = (prices, fee) => {
  let cash = 0;
  let hold = -prices[0];

  for (let i = 1; i < prices.length; i++) {
    cash = Math.max(cash, hold + prices[i] - fee);
    hold = Math.max(hold, cash - prices[i]);
  }

  return cash;
};

/**
 * Accepted
 */
export const maxProfit2: MaxProfit = (prices, fee) => {
  let profit = 0;
  let prevPrice = prices[0];

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] > prevPrice + fee) {
      profit += prices[i] - prevPrice - fee;
      prevPrice = prices[i] - fee;
    }

    if (prices[i] < prevPrice) {
      prevPrice = prices[i];
    }
  }

  return profit;
};
