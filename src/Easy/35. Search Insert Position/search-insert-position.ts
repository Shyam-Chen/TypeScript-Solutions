export const searchInsert = (nums: number[], target: number): number => {
  if (!target) return 0;

  const found = nums.indexOf(target);
  if (found >= 0) return found;

  for (let i = 0; i < nums.length; i += 1) {
    target -= 1;

    const insert = nums.indexOf(target);

    if (insert >= 0) return insert + 1;
  }
};
