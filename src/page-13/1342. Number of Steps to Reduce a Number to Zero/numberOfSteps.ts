type NumberOfSteps = (num: number) => number;

/**
 * Accepted
 */
export const numberOfSteps: NumberOfSteps = (num) => {
  let curNum = num;
  let steps = 0;

  while (curNum > 0) {
    if (curNum % 2 === 0) {
      curNum /= 2;
    } else {
      curNum -= 1;
    }

    steps += 1;
  }

  return steps;
};
