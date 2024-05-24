interface SumOfUnique {
  (nums: number[]): number;
}

export const sumOfUnique: SumOfUnique = (nums) => {
  const arr = [];

  for (let i = 0; i < nums.length; i += 1) {
    const num = nums[i];

    if (nums.indexOf(num) === nums.lastIndexOf(num)) {
      arr.push(num);
    }
  }

  return arr.reduce((acc, cur) => acc + cur, 0);
};

export const sumOfUnique2: SumOfUnique = (nums) => {
  const dict = new Map();

  for (let i = 0; i < nums.length; i += 1) {
    const num = nums[i];
    const count = dict.get(num) || 0;
    dict.set(num, count + 1);
  }

  let result = 0;

  dict.forEach((val, key) => {
    if (val === 1) {
      result += key;
    }
  });

  return result;
};
