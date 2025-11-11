type FinalString = (s: string) => string;

/**
 * Accepted
 */
export const finalString: FinalString = (s) => {
  const result: string[] = [];

  for (const c of s) {
    if (c === 'i') {
      result.reverse();
    } else {
      result.push(c);
    }
  }

  return result.join('');
};
