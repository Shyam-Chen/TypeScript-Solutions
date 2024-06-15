type MinOperations = (nums: number[]) => number;

export const minOperations: MinOperations = (nums) => {
  const intArr = [...nums];

  let result = 0;

  for (let i = 1; i < intArr.length; i++) {
    if (intArr[i] <= intArr[i - 1]) {
      result += intArr[i - 1] - intArr[i] + 1;
      intArr[i] = intArr[i - 1] + 1;
    }
  }

  return result;
};
