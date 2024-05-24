interface NumberOfSteps {
  (num: number): number;
}

export const numberOfSteps: NumberOfSteps = (num) => {
  let curNum = num;
  let step = 0;

  while (curNum) {
    if (curNum % 2 === 0) {
      step += 1;
      curNum /= 2;
    } else {
      step += 1;
      curNum -= 1;
    }
  }

  return step;
};
