export const containsDuplicate = (nums: number[]): boolean => {
  const set = new Set([...nums]);
  return set.size !== nums.length;
};
