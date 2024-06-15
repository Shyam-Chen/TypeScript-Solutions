type MinOperations = (logs: string[]) => number;

/**
 * Accepted
 */
export const minOperations: MinOperations = (logs) => {
  const stack: string[] = [];

  for (const log of logs) {
    if (log === '../') {
      stack.pop();
    } else if (log !== './') {
      stack.push(log);
    }
  }

  return stack.length;
};

/**
 * Accepted
 */
export const minOperations2: MinOperations = (logs) => {
  let depth = 0;

  for (const log of logs) {
    if (log === '../') {
      if (depth > 0) depth -= 1;
    } else if (log !== './') {
      depth += 1;
    }
  }

  return depth;
};
