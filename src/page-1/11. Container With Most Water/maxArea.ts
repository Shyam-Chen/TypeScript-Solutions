type MaxArea = (height: number[]) => number;

export const maxArea: MaxArea = (height) => {
  let [left, right] = [0, height.length - 1];
  let maxArea = 0;

  while (left < right) {
    const currentHeight = Math.min(height[left], height[right]);
    const currentWidth = right - left;
    const currentArea = currentHeight * currentWidth;

    maxArea = Math.max(maxArea, currentArea);

    if (height[left] < height[right]) {
      left += 1;
    } else {
      right -= 1;
    }
  }

  return maxArea;
};
