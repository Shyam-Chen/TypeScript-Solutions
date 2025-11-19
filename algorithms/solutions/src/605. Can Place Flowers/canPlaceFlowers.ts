type CanPlaceFlowers = (flowerbed: number[], n: number) => boolean;

/**
 * Accepted
 */
export const canPlaceFlowers: CanPlaceFlowers = (flowerbed, n) => {
  let count = 0; // 計算已經種下的花數量
  let i = 0; // 當前索引位置

  const length = flowerbed.length;

  while (i < length) {
    // 如果當前位置是空的 (0)
    if (flowerbed[i] === 0) {
      const prevEmpty = i === 0 || flowerbed[i - 1] === 0; // 檢查左邊是否空，或是否在邊界
      const nextEmpty = i === length - 1 || flowerbed[i + 1] === 0; // 檢查右邊是否空，或是否在邊界

      // 如果左右都空，可以種花
      if (prevEmpty && nextEmpty) {
        count += 1; // 種花後計數 +1
        if (count >= n) return true; // 如果已種夠 n 朵花，直接回傳 true
        i += 2; // 跳過下一格，避免相鄰種花
        continue; // 進入下一次迴圈
      }
    }

    i += 1; // 如果不能種花，或當前位置是 1，移動到下一格
  }

  return count >= n; // 走訪完成後，檢查是否種夠花
};
