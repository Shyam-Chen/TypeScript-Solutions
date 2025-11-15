type RemoveStars = (s: string) => string;

/**
 * Accepted
 */
export const removeStars: RemoveStars = (s) => {
  const stack: string[] = [];

  for (const char of s) {
    if (char === '*') {
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return stack.join('');
};
