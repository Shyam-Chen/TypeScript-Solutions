export const search = (nums: number[], target: number): number =>
  nums.indexOf(target);

export const search2 = (nums: number[], target: number): number => {
  let [left, right] = [0, nums.length];
  let mid = 0;

  while (left < right) {
    mid = left + (right - left) / 2;

    if (nums[mid] === target) return mid;

    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return -1;
};
