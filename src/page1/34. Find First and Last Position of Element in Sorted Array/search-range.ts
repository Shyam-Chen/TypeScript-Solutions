interface SearchRange {
  (nums: number[], target: number): number[];
}

export const searchRange: SearchRange = (nums, target) => {
  const result = [-1, -1];

  // left
  let [l, r] = [0, nums.length - 1];

  while (l < r) {
    const mid = Math.floor((l + r) / 2);

    if (nums[mid] < target) l = mid + 1;
    else r = mid;
  }

  if (nums[l] !== target) return result;
  result[0] = l;

  // right
  r = nums.length - 1;

  while (l < r) {
    const mid = Math.ceil((l + r) / 2);

    if (nums[mid] > target) r = mid - 1;
    else l = mid;
  }

  result[1] = r;

  return result;
};

export const searchRange2: SearchRange = (nums, target) => [
  nums.indexOf(target),
  nums.lastIndexOf(target),
];
