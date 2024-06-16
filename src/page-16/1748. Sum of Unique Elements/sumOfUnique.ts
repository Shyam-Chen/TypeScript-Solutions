type SumOfUnique = (nums: number[]) => number;

/**
 * Accepted
 */
export const sumOfUnique: SumOfUnique = (nums) => {
  const arr: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (nums.indexOf(num) === nums.lastIndexOf(num)) {
      arr.push(num);
    }
  }

  return arr.reduce((acc, cur) => acc + cur, 0);
};

/**
 * Accepted
 */
export const sumOfUnique2: SumOfUnique = (nums) => {
  const map = new Map<number, number>();

  for (const num of nums) {
    const count = map.get(num) || 0;
    map.set(num, count + 1);
  }

  let sum = 0;

  for (const [key, value] of map) {
    if (value === 1) sum += key;
  }

  return sum;
};
