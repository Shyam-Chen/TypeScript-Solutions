type MinOperations = (logs: string[]) => number;

export const minOperations: MinOperations = (logs) => {
  const stack = [] as string[];

  for (const log of logs) {
    if (log === '../') {
      stack.pop();
    } else if (log !== './') {
      stack.push(log);
    }
  }

  return stack.length;
};

export const minOperations2: MinOperations = (logs) => {
  let depth = 0;

  for (let i = 0; i < logs.length; i += 1) {
    if (logs[i] === '../') {
      if (depth > 0) depth -= 1;
    } else if (logs[i] !== './') {
      depth += 1;
    }
  }

  return depth;

  // reducer
  // return logs.reduce((acc, cur) => {
  //   if (cur === '../') {
  //     if (acc > 0) acc -= 1;
  //   } else if (cur !== './') {
  //     acc += 1;
  //   }
  //   return acc;
  // }, 0);
};
