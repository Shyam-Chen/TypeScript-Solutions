type DifferenceOfSum = (nums: number[]) => number;

/**
 * Accepted
 */
export const differenceOfSum: DifferenceOfSum = (nums) => {
  // Calculate the element sum
  const elementSum = nums.reduce((sum, num) => sum + num, 0);

  // Calculate the digit sum
  const digitSum = nums.reduce((sum, num) => {
    const digits = String(num).split('');
    const digitSumForNum = digits.reduce((digitSum, digit) => digitSum + Number(digit), 0);
    return sum + digitSumForNum;
  }, 0);

  // Return the absolute difference
  return Math.abs(elementSum - digitSum);
};
