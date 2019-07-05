export const searchRangeS1 = <T extends number>(nums: T[], target: T): number[] => {
  const res = [-1, -1];

  // left
  let [l, r] = [0, nums.length - 1];

  while (l < r) {
    const mid = Math.floor((l + r) / 2);

    if (nums[mid] < target) l = mid + 1;
    else r = mid;
  }

  if (nums[l] !== target) return res;
  res[0] = l;

  // right
  r = nums.length - 1;

  while (l < r) {
    const mid = Math.ceil((l + r) / 2);

    if (nums[mid] > target) r = mid - 1;
    else l = mid;
  }

  res[1] = r;

  return res;
};

export const searchRangeS2 = <T extends number>(nums: T[], target: T): number[] => (
  [nums.indexOf(target), nums.lastIndexOf(target)]
);
