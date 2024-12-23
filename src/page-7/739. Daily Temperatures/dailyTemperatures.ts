type DailyTemperatures = (temperatures: number[]) => number[];

/**
 * Accepted
 */
export const dailyTemperatures: DailyTemperatures = (temperatures) => {
  const answer: number[] = Array(temperatures.length).fill(0);
  const stack: number[] = [];

  for (let i = 0; i < temperatures.length; i++) {
    while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
      const index = stack.pop() as number;
      answer[index] = i - index;
    }

    stack.push(i);
  }

  return answer;
};
