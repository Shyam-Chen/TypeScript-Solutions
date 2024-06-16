type Interpret = (command: string) => string;

/**
 * Accepted
 */
export const interpret: Interpret = (command) => {
  return command.replace(/\(\)/g, 'o').replace(/\(al\)/g, 'al');
};

/**
 * Accepted
 */
export const interpret2: Interpret = (command) => {
  let result = '';
  let i = 0;

  while (i < command.length) {
    if (command[i] === 'G') {
      result += 'G';
      i += 1;
    } else if (command[i] === '(' && command[i + 1] === ')') {
      result += 'o';
      i += 2;
    } else if (
      command[i] === '(' &&
      command[i + 1] === 'a' &&
      command[i + 2] === 'l' &&
      command[i + 3] === ')'
    ) {
      result += 'al';
      i += 4;
    }
  }

  return result;
};
